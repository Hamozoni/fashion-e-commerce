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
            <header className="max-w-full mp-3 mb-6">
                <Offers/>
                <div className=" flex items-center justify-between">
                    <h4>shop by category</h4>
                    <nav>
                        <ul className="flex items-center gap-3">
                            {
                                categories?.map(({name})=> (
                                    <li 
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