
"use client";

import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

const productSelectSize = ({sizes,selectedSize,setSelectedSize}) => {

    const [isSizes,setIsSizes] = useState(false);

  return (
    <div className="relative flex-1 w-full flex gap-2">
        <h5 className=" capitalize text-teal-950 font-bold text-lg">size: </h5>
        <button 
            onClick={()=> setIsSizes(!isSizes)}
            className="flex items-center justify-between text-teal-900 shadow-md  w-full p-1 border min-w-10
           border-gray-100 
             rounded-md uppercase"
            >
            <h6 
                className="text-teal-900 font-bold text-sm">
                    {selectedSize ? selectedSize :''}
            </h6>
            <IoIosArrowForward />
        </button>
        {
            isSizes ? (
                <ul className="p-2 z-50
                    bg-teal-50 rounded-md 
                    absolute left-0 top-8 w-full 
                    border border-teal-100 shadow-md">
                    {
                        sizes?.map(size=> (
                            <li 
                                className={`${selectedSize === size.name ? 'border border-teal-500 bg-teal-200' : 'hover:bg-teal-100'} p-2 text-center rounded-md w-full uppercase`}
                                onClick={()=> {
                                    setSelectedSize(size.name)
                                    setIsSizes(false)
                                }}
                                key={size}
                                >
                                {size?.name}
                            </li>
                        ))
                    }
                </ul>
            ):''
        }
    </div>
  )
}

export default productSelectSize