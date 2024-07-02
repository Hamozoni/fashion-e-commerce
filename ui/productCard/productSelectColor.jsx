"use client";

import { useState } from "react";

const ProductSelectColor = ({
    productImages,
    selectedColor,
    setSelectedColor
}) => {

    const [isColors,setIsColors] = useState(false);

  return (
    <div className="relative">
        <button
            onClick={()=> setIsColors(!isColors)}
            className="flex items-center gap-4 
            p-1 border bg-green-50
           border-green-100 
             rounded-md"
             >
            <h6 className={`${selectedColor ? 'w-7 h-5 rounded-md' :''}`} 
                style={selectedColor?{backgroundColor: selectedColor} : ''}
                >
                {selectedColor ? '' :'color: '}
            </h6>
            <IoMdArrowDropdown />
        </button>
        {
            isColors ? (
                <ul 
                    className="p-2
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