"use client"

import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";

function AddToCard() {

    const [quantity,setQuantity] = useState(1);

    const inceaceQuantity = ()=> {

        setQuantity(prev=> prev > 9 ? prev: prev + 1)

    };
    const dicceaceQuantity = ()=> {
        setQuantity(prev=> prev > 1 ? prev - 1: prev)
    };

  return (
    <div className="flex items-stretch justify-center gap-2 pt-5 w-full cursor-pointer">
        <div className="flex items-center justify-center gap-2  border border-green-300 rounded-md p-3 py-2">
            <FiMinus className="text-xl" onClick={dicceaceQuantity} />
            <h5 className="text-xl border-x border-green-200 px-2" >{quantity}</h5>
            <FiPlus className="text-xl " onClick={ inceaceQuantity}/>
        </div>
        <div className="flex items-center justify-center flex-1 bg-green-900 text-green-100 hover:bg-green-700 border border-green-300 rounded-md p-5 py-2 text-md font-bold">
            <h6>add to cart</h6>
        </div>
        <div className="flex items-center justify-center  border border-green-300 rounded-md p-3 py-2 text-xl">
            <FaHeart className="text-rose-500" />
        </div>
    </div>
  )
}

export default AddToCard