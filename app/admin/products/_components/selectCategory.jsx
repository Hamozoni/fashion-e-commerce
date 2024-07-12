"use client"
import { useState } from "react";
import {categoriesData} from "../../../../data/categoriesData";
import { IoMdArrowDropright } from "react-icons/io";

export const SelectCategory = ({categoryName,setCategoryName})=> {

    const [isModel,setIsModel] = useState(false)

   const className = {
        label: 'text-lg font-bold text-gray-500 group-hover:text-teal-500',
        select: 'cursor-pointer px-3 py-1 flex items-center justify-between gap-3 w-[150px] rounded-md bg-gray-50 border-2'
    }

    return (
        <div className="flex gap-5">
            <div className="flex flex-col gap-3 mb-3 group">
                <h4 className={className.label}>category *</h4>

                <div className="relative w-fit">
                    <div 
                         onClick={()=> setIsModel(!isModel)}
                        className={`${isModel? 'border-teal-300' : 'border-gray-200'} ${className.select}`}>
                        <h5 className="text-lg font-medium text-teal-950">{categoryName}</h5>
                        <IoMdArrowDropright color=" #5eead4"/>
                    </div>
                    {
                        isModel ? 
                        <ul className="absolute top-[110%] left-0 w-full bg-gray-50 shadow-md rounded-md border-2 border-teal-300">
                            {
                                categoriesData?.map(({name,id})=> (
                                <li
                                    className={`${name === categoryName ? 'bg-gray-200' : 'hover:bg-gray-100'} px-3 p-1 cursor-pointer text-lg font-medium text-teal-900 `}
                                    onClick={()=> setCategoryName(name)}
                                    key={id}
                                    >
                                    {name}
                                </li>
                            ))
                            }
                        </ul> : null
                    }

                </div>
            </div>
        </div>
    )
}