"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
// categories data
import { categoriesData } from "../../../data/categoriesData";
// components
import {Overlay} from "../../models/overlay";
// icons
import { GiTireIronCross } from "react-icons/gi";
// styles
const className ={ 
    cateLi : ' capitalize font-bold text-teal-800 dark:text-teal-100 text-xl cursor-pointer'
};

export const SubCatories = ({subCategories,setIsSubCategories})=> {
    return (
        <ul className="p-3 py-4 overflow-auto">
        {
            subCategories?.map(({name,imagePath,linkPath})=> (
                <li 
                    onClick={()=> setIsSubCategories(false)}
                    key={name} 
                    className="w-full border border-gray-200 dark:border-stone-800 rounded-full mb-3 hover:bg-teal-100 dark:hover:bg-stone-800 hover:border-teal-400">
                    <Link 
                        className="flex items-center gap-3 p-1"
                        href={linkPath}>
                        <Image
                            className="rounded-full" 
                            src={imagePath} 
                            width={40} 
                            height={40} 
                            alt={name}
                            />
                        <h4 className="text-teal-900 dark:text-teal-50 font-normal text-lg">{name}</h4> 
                    </Link>
                </li>
            ))
        }

    </ul>
    )
}



export const HeaderCategories = ()=> {
    
    const [isSubCategories,setIsSubCategories] = useState(false);
    const [subCategories,setSubCategories] = useState(null);
    const [categoryName,setCategoryName] = useState('');
    

    const CategoriesModel = ()=> {
        return (
            <>
            <Overlay onClick={()=> setIsSubCategories(false)} />
            <div className="fixed top-[70px] left-3 lg:left-8 border min-w-[300px] border-teal-100 shadow-md  rounded-md bg-gray-50 dark:bg-stone-950 z-[70]">
               <nav className="">
                   <div 
                       className="px-5 py-3 cursor-pointer"
                       onClick={()=> setIsSubCategories(false)}
                       ><GiTireIronCross />
                   </div>
                   <SubCatories 
                        subCategories={subCategories}
                        setIsSubCategories={setIsSubCategories}
                       />
               </nav>
            </div>
           </>
        )
    };

    return (
        <div className=" capitalize">
            <ul className="flex items-center gap-3">
                {
                    categoriesData?.map(({name,sub})=> (
                        <li 
                            onClick={()=> {
                                setSubCategories(sub);
                                setCategoryName(name);
                                setIsSubCategories(true);
                            }} 
                            className={className.cateLi}
                            >{name}
                        </li>
                    ))
                }
            </ul>
            {
                isSubCategories ?
                <CategoriesModel />
                : null
            }
        </div>
    );
};