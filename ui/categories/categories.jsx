"use client";

import { useState } from "react";
import {categories} from "../../data/categories";
import { CategoryCard } from "./categoryCard";
import {Offers} from "./offers"

export const Categories = ()=> {

    const [category,setCategory] = useState(categories[0]?.name);
    const [subCategory,setSubCategory] = useState(categories[0]?.sub);

    const handleChangeCategory = (name)=> {
        setCategory(name);
        const currentSubCate = categories?.find(e=> e.name === name)?.sub;

        setSubCategory(currentSubCate)
    };


    return (
        <div className="p-3 lg:px-8">
            <header className="">
                <Offers/>
                <div className=" flex items-center justify-center py-5 capitalize">
                    <nav>
                        <ul className="flex items-center rounded-md bg-teal-50 overflow-hidden shadow-lg">
                            {
                                categories?.map(({name})=> (
                                    <li 
                                       className={`cursor-pointer border-r-teal-800 border-l-teal-800 text-teal-900 font-bold py-3 px-8 ${category === name ? 'bg-teal-900 text-teal-50':'hover:bg-teal-100'}`}
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
            <div className="overflow-x-auto ">
                <div className="flex items-center justify-center gap-3 min-w-fit">
                   {
                         subCategory?.map((suCate)=> (
                                 <CategoryCard key={suCate.name}  category={suCate}/>
                                ))
                    }
                </div>
            </div>
        </div>
    )
}