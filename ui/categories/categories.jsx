"use client";

import { useState } from "react";
import {categoriesData} from "../../data/categoriesData";
import { SubcategoryCard } from "./subcategoryCard";

export const Categories = ()=> {

    const [category,setCategory] = useState(categoriesData[0]?.name);
    const [subCategory,setSubCategory] = useState(categoriesData[0]?.sub);

    const handleChangeCategory = (name)=> {
        setCategory(name);
        const currentSubCate = categoriesData?.find(e=> e.name === name)?.sub;

        setSubCategory(currentSubCate)
    };


    return (
        <div className="p-3 lg:px-8 -translate-y-32">
            <header className="">
                <div className=" flex items-center justify-center py-5 capitalize">
                    <nav>
                        <ul className="flex items-center rounded-full border border-teal-300 p-1 w-fit gap-2 bg-white overflow-hidden shadow-lg">
                            {
                                categoriesData?.map(({name})=> (
                                    <li 
                                       className={`cursor-pointer rounded-full border-2 border-gray-200 font-bold py-1 px-8 ${category === name ? 'text-teal-50 bg-teal-700 border-teal-100 border-2':'text-teal-900  hover:bg-gray-50 hover:border-teal-300'}`}
                                        key={name}
                                        onClick={()=>handleChangeCategory(name)}
                                        >{name}
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                </div>
            </header>
            <div className="w-full min-w-full">
                <div className="overflow-x-auto p-3 pt-0 w-full min-w-full">
                    <ul className="flex items-center gap-3 w-fit min-w-fit">
                    {
                            subCategory?.map((sub)=> (
                                    <li key={sub?.name} className="min-w-fit w-full flex-1">
                                        <SubcategoryCard sub={sub}/>
                                    </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}