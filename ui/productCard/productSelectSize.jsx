
"use client";

import { useState } from "react";

const productSelectSize = ({sizes,selectedSize,setSelectedSize}) => {

    const [isSizes,setIsSizes] = useState(false);

  return (
    <div className="relative flex items-center gap-1">
        <h5 className=" capitalize text-green-800">size: </h5>
        <button 
            onClick={()=> setIsSizes(!isSizes)}
            className="flex items-center gap-1 
            p-1 border bg-green-50 min-w-10
           border-green-100 
             rounded-md uppercase"
            >
            <h6 
                className="text-green-900 font-bold text-center text-sm w-full">
                    {selectedSize ? selectedSize :''}
            </h6>
            <p>{isSizes ? '^' : '>'}</p>
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
                                className={`${selectedSize === size.name ? 'border border-green-500 bg-green-200' : 'hover:bg-green-100'} p-2 text-center rounded-md w-full uppercase`}
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