"use client"

import { useState } from "react";
import {categoriesData} from "../../../../data/categoriesData";

export const SelectCategory = ()=> {

    const [subCategory,setSubCategory] = useState([]);
    return (
        <div className="">
            <div className="flex flex-col gap-3 mb-3 group">
                <label className="text-lg font-bold text-gray-500 group-hover:text-teal-500">category *</label>

                <select 
                    className="p-1 capitalize rounded-md border-2 border-gray-200 outline-2 bg-gray-50 outline-teal-400 min-w-[150px] w-[150px] text-lg font-medium text-teal-900" 
                    name="category" 
                    id=""
                    >
                    {
                        categoriesData?.map(({name,sub})=> (
                            

                            <option
                                key={name}
                                className=" "
                                value={name}
                                >
                            <button onClick={()=> setSubCategory(sub)}>{name}</button>
                            </option>
                        ))
                    }
                </select>
            </div>
            <div className="flex flex-col gap-3 mb-3 group">
                <label className="text-lg font-bold text-gray-500 group-hover:text-teal-500">category *</label>

                <select className="p-1 capitalize rounded-md border-2 border-gray-200 outline-2 bg-gray-50 outline-teal-400 min-w-[150px] w-[150px] text-lg font-medium text-teal-900" name="category" id="">
                    {
                        subCategory?.map(({name})=> (
                            
                            <option
                                key={name}
                                className=" "
                                value={name}
                                >{name}
                            </option>
                        ))
                    }
                </select>
            </div>
        </div>
    )
}