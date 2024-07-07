"use client";

import { categoriesData } from "../../../data/categoriesData";
export const Categories = ()=> {

    const className ={ 
        cateLi : ' capitalize font-medium teat-teal-800 text-xl cursor-pointer'
    }
    return (
        <div className="">
            <ul className="flex items-center gap-3">
                {
                    categoriesData?.map(({name})=> (
                        <li className={className.cateLi}>{name}</li>
                    ))
                }
            </ul>
        </div>
    );
};