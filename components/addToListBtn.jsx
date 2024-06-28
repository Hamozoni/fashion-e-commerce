"use client";
import { useState } from "react";
// icons
import { IoIosHeartEmpty, IoMdHeart } from "react-icons/io";

const AddToListBtn = () => {

    const [isAddedToList,setIsAddedToList] = useState(false);

  return (
    <button
        onClick={()=> setIsAddedToList(!isAddedToList)} 
        className="flex items-center justify-center border border-rose-300 rounded-md px-3 py-2 text-xl"
        >
        {
            isAddedToList ?
            <IoMdHeart size={20} className="text-rose-500 hover:scale-125" />
            :
            <IoIosHeartEmpty size={20}  className="text-rose-500 hover:scale-125" />
        }
    </button>
  )
}

export default AddToListBtn