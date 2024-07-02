"use client"
// icons
import { FaRegHeart } from "react-icons/fa";

import {useAppSelector} from "../../../store/store"

const LikedList = () => {

    const likedListItemsLength = useAppSelector(state=> state.LikedList);


  return (
    <div>

        <div className="relative">
            <FaRegHeart />
            {
                likedListItemsLength && (
                    <div className=" absolute top-0 left-0 flex justify-center items-center bg-rose-700 text-rose-200">
                        <h6>
                            {likedListItemsLength}
                        </h6>
                    </div>

                )

            }
        </div>
        
    </div>
  )
}

export default LikedList