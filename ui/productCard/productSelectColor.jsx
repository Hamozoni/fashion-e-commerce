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
    <div className="relative flex-1 flex gap-2">
        <h5 className=" capitalize text-green-800">color: </h5>
        <button
            onClick={()=> setIsColors(!isColors)}
            className="w-full flex items-center justify-between p-1 border cursor-pointer bg-tael-50 shadow-md text-teal-500
           border-teal-100 
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
                    bg-teal-50 rounded-md shadow-md 
                    absolute right-0 top-8 w-fit cursor-pointer 
                    border border-teal-100"
                    >
                    {
                        Object.entries(productImages)?.map(([color])=> (
                            <li 
                                className={`${selectedColor === color ? 'border-2 border-teal-100 outline outline-teal-600 shadow-md' :''} mb-1 w-8 h-8 rounded-full cursor-pointer`}
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