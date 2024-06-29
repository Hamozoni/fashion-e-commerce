"use clent"
import Image from "next/image"
// components
import {ButtonWithIcon} from "../../../components/buttons"
// icons
import { LiaStarSolid } from "react-icons/lia";
import { FaRegUser } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import { VscEdit } from "react-icons/vsc";
import { MdDelete } from "react-icons/md";
// server actions
import {removeReviewAction} from "../../../actions/productReviews/removeReview";
// hooks
import { useCurrentUser } from "../../../hooks/useCurrentUser";
import { useTransition } from "react";

const ratingStars = new Array(5).fill('start');

function ReviewCard({review,setReviews}) {



    const user = useCurrentUser();
    const [loading,startTransition] = useTransition()

    const handleRevomeReview = ()=> {

        startTransition(()=> {
            removeReviewAction(review.id)
            .then((data)=> {
                if(data?.success) {
                    setReviews((rev)=> rev.filter(rev=> rev.id !== review.id))
                }
            })
        })

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
            <section className="flex items-center gap-2">
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
                <h5 >{review?.rateTitle}</h5>
            </section>
            <div className="">
                <article 
                    className="text-green-800 text-sm pb-3"
                    >{review?.rateText}
                </article>
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
                          onClick=''
                        />
                        <ButtonWithIcon 
                          text='delete'
                          Icon={MdDelete}
                          type='delete'
                          onClick={handleRevomeReview}
                        />
                    </footer>
                )
            }
        </div>
    )
}

export default ReviewCard