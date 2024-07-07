"use client";

import { useState } from "react";
import { categoriesData } from "../../../data/categoriesData";
import Overlay from "../../../components/Overlay";
import Image from "next/image";
import Link from "next/link";

import { GiTireIronCross } from "react-icons/gi";

export const Categories = ()=> {

    const [isSubCategories,setIsSubCategories] = useState(false);
    const [subCategories,setSubCategories] = useState(null);
    const [category,setCategory] = useState(null);

    const className ={ 
        cateLi : ' capitalize font-medium teat-teal-800 text-xl cursor-pointer'
    }
    return (
        <div className=" capitalize">
            <ul className="flex items-center gap-3">
                {
                    categoriesData?.map(({name,imagePath,sub})=> (
                        <li 
                            onClick={()=> {
                                setSubCategories(sub);
                                setCategory({name,imagePath})
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
                <>
                 <Overlay onClick={()=> setIsSubCategories(false)} />
                 <div className="fixed top-0 left-0 h-svh bg-teal-50 z-50">
                    <nav className="">
                        <div 
                            className="px-5 py-3 cursor-pointer"
                            onClick={()=> setIsSubCategories(false)}
                            ><GiTireIronCross />
                        </div>
                        <div className="relative py-3 px-5 border-b border-teal-100 gap-3">
                            <Image 
                                className="rounded-md" 
                                src={category?.imagePath} 
                                width={260}
                                />

                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-transparent"></div>
                            
                            <h3 
                                className=" absolute left-0 bottom-0 w-full text-center py-3 text-teal-900 text-xl font-bold"
                                >{category?.name} fashion
                            </h3>
                        </div>
                        {
                            subCategories?.map(({name,imagePath,linkPath})=> (
                                <div 
                                   onClick={()=> setIsSubCategories(false)}
                                    key={name} 
                                    className="min-w-[300px]">
                                    <Link 
                                        className="flex items-center gap-3 px-5 py-3 hover:bg-teal-100"
                                        href={linkPath}>
                                        <Image
                                            className="rounded-full" 
                                            src={imagePath} 
                                            width={40} 
                                            height={40} 
                                            alt={name}
                                            />
                                        <h4>{name}</h4> 
                                    </Link>
                                </div>
                            ))
                        }
                    </nav>
                 </div>
                </>
                : null
            }
        </div>
    );
};