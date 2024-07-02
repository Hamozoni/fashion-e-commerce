"use client"
// icons
import { FaRegHeart } from "react-icons/fa";

import {useAppSelector} from "../../../store/store"
import Link from "next/link";

const LikedList = () => {

    const likedListItemsLength = useAppSelector(state=> state.likedList?.length);


  return (
    <div>

        <Link href='/likedList' className="relative">
            <FaRegHeart color='#f43f5e' size={22}/>
            {
                likedListItemsLength ? (
                    <div 
                        className="absolute 
                         -top-3 left-2 flex 
                         w-5 h-5 rounded-full
                         justify-center items-center
                         bg-rose-500 text-rose-50 text-sm"
                         >
                        <h6>
                            {likedListItemsLength > 9 ? '9+' : likedListItemsLength}
                        </h6>
                    </div>

                ): null

            }
        </Link>
        
    </div>
  )
}

export default LikedList