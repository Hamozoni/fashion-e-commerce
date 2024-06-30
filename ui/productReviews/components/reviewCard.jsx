"use clent"
import { useContext, useRef, useState, useTransition } from "react";
import Image from "next/image"
// components
import {ButtonWithIcon} from "../../../components/buttons";
// icons
import { LiaStarSolid } from "react-icons/lia";
import { FaRegUser } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import { VscEdit } from "react-icons/vsc";
import { MdDelete } from "react-icons/md";
import { IoIosArrowRoundBack } from "react-icons/io";
// server actions
import {removeReviewAction} from "../../../actions/productReviews/removeReview";
// hooks
import { useCurrentUser } from "../../../hooks/useCurrentUser";
// context
import { ReviewsContext } from "./reviewsContext";
import Overlay from "../../../components/Overlay";

const ratingStars = new Array(5).fill('start');

function ReviewCard({review}) {

     const {fetchReviews} = useContext(ReviewsContext)

    const user = useCurrentUser();
    const [loading,startTransition] = useTransition();
    const [isRemoveModle,setIsRemoveModle] = useState(false);
    const [isEdidable,setIsEdidable] = useState(false);

    const [reviewTitle,setReviewTitle] = useState(review?.rateTitle);
    const [reviewText,setReviewText] = useState(review?.rateText);
    const reviewTextRef = useRef(null)
    const handleRevomeReview = ()=> {

        startTransition(()=> {
            removeReviewAction(review?.id,review?.reviewImage)
            .then((data)=> {
                if(data?.success) {
                    fetchReviews(review.productId)
                }
            })
        });

    };

    const handleEditReview = ()=> {
        setIsEdidable(true)
        reviewTextRef.current.focuse();
    }


  return (
        <div className="py-7 border-b border-gray-00">
            <header className="flex items-center gap-2 pb-2">
                {
                    review?.auther?.image ?
                    <Image
                         className="rounded-full" 
                        src={review?.auther?.image} 
                        width={40} height={40} 
                        alt="auther"
                        />
                    :
                    <FaRegUser size={30} />
                }
                <section className="">
                    <h4 className="text-green-900">
                        {review?.auther?.name}
                    </h4>
                    <time 
                        className="text-green-800 text-sm"
                        dateTime={new Date(review.createdAt).toDateString()}
                        >{new Date(review.createdAt).toDateString()}
                    </time>
                </section>
            </header>
            <section className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                    {
                        ratingStars?.map((_,index)=> (
                            <div key={index} className="flex items-center text-yellow-400">
                                {
                                    review?.rating > index ?
                                    <LiaStarSolid size={20}/>
                                    :
                                    <FaRegStar size={20} />
                                }
                            </div>
                        ))
                    }
                </div>
                {
                    (isEdidable && review?.autherId === user?.id) ?
                    <input 
                        className="border-b border-green-200 focus:border-green-400"
                        type="text" 
                        value={reviewTitle}
                        onChange={(e)=> setReviewTitle(e.target.value)}
                        />
                    :
                  <h5 >{review?.rateTitle}</h5>
                }
            </section>
            <div className="">
                {
                    (isEdidable && review?.autherId === user?.id) ? 
                    <textarea 
                        ref={reviewTextRef}
                        className="text-green-800 text-sm focus:outline-none w-full border-b border-green-200 focus:border-green-400"
                        value={reviewText}
                        onChange={(e)=> setReviewText(e.target.value)}
                        
                        >
                    </textarea>
                    :
                    <article 
                        className="text-green-800 text-sm pb-3 max-w-full break-words overflow-auto"
                        >{review?.rateText}
                    </article>
                }
                {
                    review?.reviewImage &&
                    <div className="p-3">
                        <Image 
                            src={review?.reviewImage?.replace('public','')} 
                            width={150} height={200} alt='product image'
                            />
                    </div>
                }
            </div>
            {
                user?.id === review?.autherId && (
                    <footer className="flex items-center gap-3">
                        <ButtonWithIcon 
                          text='edit'
                          Icon={VscEdit}
                          type='save'
                          onClick={handleEditReview}
                        />
                        <ButtonWithIcon 
                          text='delete'
                          Icon={MdDelete}
                          type='delete'
                          onClick={()=> setIsRemoveModle(true)}
                        />
                    </footer>
                )
            }
            {
                isRemoveModle && (
                    <>
                       <Overlay onClick={()=> setIsRemoveModle(false)}/>
                        <div className="bg-green-50 capitalize z-50 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 rounded-md w-[370px]">
                            <h5 className="text-green-950 mb-3 font-medium text-lg">
                                are you sure you want to delete your review ?
                            </h5>
                            <div className=" flex items-center gap-3">
                                <ButtonWithIcon 
                                    text='delete'
                                    Icon={MdDelete}
                                    type='delete'
                                    disabled={loading}
                                    onClick={handleRevomeReview}
                                    />
                                <ButtonWithIcon 
                                    text='back'
                                    Icon={IoIosArrowRoundBack}
                                    type='save'
                                    onClick={()=> setIsRemoveModle(false)}
                                    />
                            </div>
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default ReviewCard