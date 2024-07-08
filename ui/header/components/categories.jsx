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
    const [categoryName,setCategoryName] = useState('');

    const className ={ 
        cateLi : ' capitalize font-bold text-teal-800 text-xl cursor-pointer'
    }
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
                <>
                 <Overlay onClick={()=> setIsSubCategories(false)} />
                 <div className="fixed top-[70px] left-3 lg:left-8 border border-teal-300  rounded-md bg-teal-50 z-50">
                    <nav className="">
                        <div 
                            className="px-5 py-3 cursor-pointer"
                            onClick={()=> setIsSubCategories(false)}
                            ><GiTireIronCross />
                        </div>
                        <div className="relative p-3 gap-3">
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-transparent"></div>
                            <h3 
                                className=" text-center text-teal-400 text-xl font-bold"
                                >{categoryName} fashion
                            </h3>
                        </div>
                        <div className="p-3 py-4 overflow-auto">
                            {
                                subCategories?.map(({name,imagePath,linkPath})=> (
                                    <div 
                                    onClick={()=> setIsSubCategories(false)}
                                        key={name} 
                                        className="min-w-[300px] border-2 border-gray-200 rounded-full mb-3 hover:bg-teal-100 hover:border-teal-400">
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
                                            <h4 className="text-teal-800 font-bold text-lg">{name}</h4> 
                                        </Link>
                                    </div>
                                ))
                            }

                        </div>
                    </nav>
                 </div>
                </>
                : null
            }
        </div>
    );
};