import Image from "next/image"

import { LiaStarSolid } from "react-icons/lia";
import { FaRegUser } from "react-icons/fa";


async function RatingCard({review}) {
  return (
        <div className="py-7 border-b border-gray-00">
            <div className="flex items-center gap-2 pb-2">
                {/* <Image src='/products/1a392cce-01bd-41f8-8cd9-3688080faae6-61vj2VbUKNL._AC_SY500_.jpg' width={40} height={40} alt="auther"/>
                    */}
                    <FaRegUser size={30} />
                <div className="">
                    <h4 className="text-green-900">{review.autherName}</h4>
                        <p className="text-green-800 text-sm">{review.createdAt}</p>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <div className="flex items-center text-yellow-400">
                    <LiaStarSolid size={20}/>
                    <LiaStarSolid size={20}/>
                    <LiaStarSolid size={20}/>
                    <LiaStarSolid size={20}/>
                    <LiaStarSolid size={20}/>
                </div>
                <h5 >{review?.heighlight}</h5>
            </div>
            <div className="">
                <aside className="text-green-800 text-sm pb-3">{review.review}</aside>
                {
                    review?.image !== null &&
                    <Image src='/products/1a392cce-01bd-41f8-8cd9-3688080faae6-61vj2VbUKNL._AC_SY500_.jpg' width={400} height={400} alt='product image'/>
                }
            </div>
        </div>
    )
}

export default RatingCard