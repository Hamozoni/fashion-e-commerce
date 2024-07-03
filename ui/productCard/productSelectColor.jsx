"use client";

import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
const ProductSelectColor = ({
    productImages,
    selectedColor,
    setSelectedColor
}) => {

    const [isColors,setIsColors] = useState(false);

  return (
    <div className="relative flex-1">
        <h5 className=" capitalize text-green-800">color: </h5>
        <button
            onClick={()=> setIsColors(!isColors)}
            className="w-full flex items-center justify-between p-1 border bg-green-50
           border-green-100 
             rounded-md"
             >
            <h6 className={`${selectedColor ? 'w-7 h-5 rounded-md' :''}`} 
                style={selectedColor?{backgroundColor: selectedColor} : ''}
                >
                {selectedColor ? '' :'color: '}
            </h6>
            <IoIosArrowForward />
        </button>
        {
            isColors ? (
                <ul 
                    className="p-2 z-50
                    bg-green-50 rounded-md 
                    absolute left-0 top-8 w-full 
                    border border-green-100"
                    >
                    {
                        Object.entries(productImages)?.map(([color])=> (
                            <li 
                                className={`${selectedColor === color ? 'border-4 border-green-600' :''} mb-1 w-full h-5 rounded-md`}
                                style={{backgroundColor: color}}
                                key={color} 
                                onClick={()=> {
                                    setSelectedColor(color);
                                    setIsColors(false)
                                }}
                                >
                            </li>
                        ))
                    }
                </ul>
            ): null
        }
    </div>
  )
}

export default ProductSelectColor