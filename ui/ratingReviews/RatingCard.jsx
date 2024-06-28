import Image from "next/image"

import { LiaStarSolid } from "react-icons/lia";
import { FaRegUser } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";

const ratingStars = new Array(5).fill('start')


async function RatingCard({review}) {
  return (
        <div className="py-7 border-b border-gray-00">
            <div className="flex items-center gap-2 pb-2">
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
                <div className="">
                    <h4 className="text-green-900">
                        {review?.auther?.name}
                    </h4>
                    <time 
                        className="text-green-800 text-sm"
                        >{new Date(review.createdAt).toDateString()}
                    </time>
                </div>
            </div>
            <div className="flex items-center gap-2">
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
            </div>
            <div className="">
                <article 
                    className="text-green-800 text-sm pb-3"
                    >{review?.rateText}
                </article>
                {
                    review?.reviewImage &&
                    <Image 
                        src={review?.reviewImage?.replace('public','')} 
                        width={150} height={200} alt='product image'
                        />
                }
            </div>
        </div>
    )
}

export default RatingCard