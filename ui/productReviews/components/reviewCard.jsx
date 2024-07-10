"use clent"
import { useContext, useState, useTransition } from "react";
import Image from "next/image"
// components
import {ButtonWithIcon} from "../../../components/buttons";
import {RatingStars} from "./reviewsRating"
// icons
import { FaRegUser } from "react-icons/fa";
import { VscEdit } from "react-icons/vsc";
import { MdDelete,MdOutlineSaveAs } from "react-icons/md";
import { IoIosArrowRoundBack } from "react-icons/io";
// server actions
import {removeReviewAction} from "../../../actions/productReviews/removeReview";
import {updatereviewAction} from "../../../actions/productReviews/updateReview";
// context
import { ReviewsContext } from "../reviewsContext";
import Overlay from "../../../components/Overlay";
import { AppContext } from "../../../app/contextProvider";


function ReviewCard({review,index}) {

     const {setReviews} = useContext(ReviewsContext)

    const {currentUser} = useContext(AppContext);
    const [loading,startTransition] = useTransition();
    const [isRemoveModle,setIsRemoveModle] = useState(false);
    const [isEdidable,setIsEdidable] = useState(false);

    const [reviewTitle,setReviewTitle] = useState(review?.rateTitle);
    const [reviewText,setReviewText] = useState(review?.rateText);
    const [rating,setRating] = useState(review?.rating);

    const handleRevomeReview = ()=> {

        startTransition(()=> {
            removeReviewAction(review?.id,review?.images)
            .then((data)=> {
                if(data?.success) {
                    setReviews(prev=> prev?.filter(e=> e.id !== review?.id))
                }
            })
        });

    };

    const handleUpdateReview = ()=> {

        startTransition(()=> {
            updatereviewAction(review?.id,
                {
                    rateTitle: reviewTitle,
                    rateText: reviewText,
                    rating: +rating
                }
            )
            .then(data=> {
                if(data?.data) {
                    setReviews(prev=> {
                        prev[index] = {...data?.data,auther:{name: currentUser?.name,image: currentUser?.image}}
                        return [...prev]
                    });
                };
            })
            .finally(()=>{
                setIsEdidable(false);
            })
        });
    };



    const updatedAt = Date.parse(review?.createdAt) < Date.parse(review?.updatedAt) ? "Edited at" :'';

  return (
        <div className={`${isEdidable ? 'border border-gray-100':' shadow-md'} my-5 rounded-md p-3 border-l-2 border-teal-300`}>
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
                    <h4 className="text-teal-950 font-bold text-lg">
                        {review?.auther?.name}
                    </h4>
                    <time 
                        className="text-teal-900 text-sm"
                        dateTime={new Date(review.createdAt).toDateString()}
                        >{updatedAt} {new Date(review?.updatedAt).toDateString()}
                    </time>
                </section>
            </header>
            <section className="flex items-center gap-2 mb-4">
                <RatingStars rating={rating} setRating={isEdidable ? setRating : ()=> ''}/>
                {
                    (isEdidable && review?.autherId === currentUser?.id) ?
                    <input 
                        className="border-b text-lg border-teal-200 text-teal-950 focus:border-teal-400"
                        type="text" 
                        value={reviewTitle}
                        onChange={(e)=> setReviewTitle(e.target.value)}
                        />
                    :
                  <h5 className="text-lg text-teal-950" >{review?.rateTitle}</h5>
                }
            </section>
            <div className="">
                {
                    (isEdidable && review?.autherId === currentUser?.id) ? 
                    <textarea 
                        className="text-teal-900 text-sm font-bold focus:outline-none w-full border-b border-teal-200 focus:border-green-400"
                        value={reviewText}
                        onChange={(e)=> setReviewText(e.target.value)}
                        
                        >
                    </textarea>
                    :
                    <article 
                        className="text-teal-900 text-sm font-bold pb-3 max-w-full break-words overflow-auto"
                        >{review?.rateText}
                    </article>
                }
                {
                    review?.images?.length > 0 ?
                    <div className="p-3 flex max-w-full gap-1 flex-wrap justify-center items-center">
                        {
                            review?.images?.map(({imagePath,id})=> (
                                <div key={id} className="bg-white rounded-md ">
                                    <Image
                                        className=""
                                        src={imagePath?.replace('public','')} 
                                        width={160} height={200} alt='product image'
                                        />

                                </div>
                            ))
                        }
                    </div> : null
                }
            </div>
            {
                currentUser?.id === review?.autherId && (
                    <footer className="flex items-center gap-1 w-[180px]">
                        <ButtonWithIcon 
                          text={isEdidable ? 'save' : 'edit'}
                          Icon={isEdidable ? MdOutlineSaveAs : VscEdit}
                          type='save'
                          disabled={loading}
                          onClick={isEdidable ? handleUpdateReview : ()=> setIsEdidable(true)}
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
                        <div className="bg-teal-50 capitalize z-50 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 rounded-md w-[370px]">
                            <h5 className="text-teal-950 mb-3 font-medium text-lg">
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