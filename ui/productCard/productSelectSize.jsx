
"use client";

import { useState } from "react";
// icons
import { IoMdArrowDropdown } from "react-icons/io";

const productSelectSize = ({sizes,selectedSize,setSelectedSize}) => {

    const [isSizes,setIsSizes] = useState(false);

  return (
    <div className="relative">
        <button 
            onClick={()=> setIsSizes(!isSizes)}
            className="flex items-center justify-between gap-4 w-fit"
            >
            <h6>{selectedSize ? '' :'size: '}</h6>
            <IoMdArrowDropdown />
        </button>
        {
            isSizes ? (
                <ul className="p-2 z-50
                    bg-green-50 rounded-md 
                    absolute left-0 top-8 w-full 
                    border border-green-100">
                    {
                        sizes?.map(size=> (
                            <li 
                                className={`${selectedSize === size ? 'border border-green-500 bg-green-200' : 'hover:bg-green-100'} w-8 p-2 text-center rounded-md`}
                                onClick={()=> {
                                    setSelectedSize(size)
                                    setIsSizes(false)
                                }}
                                key={size}
                                >
                                {size}
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