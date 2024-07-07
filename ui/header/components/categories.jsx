"use client";

import { useState } from "react";
import { categoriesData } from "../../../data/categoriesData";
import Overlay from "../../../components/Overlay";
import Image from "next/image";
import Link from "next/link";
export const Categories = ()=> {

    const [isSubCategories,setIsSubCategories] = useState(false)

    const className ={ 
        cateLi : ' capitalize font-medium teat-teal-800 text-xl cursor-pointer'
    }
    return (
        <div className="">
            <ul className="flex items-center gap-3">
                {
                    categoriesData?.map(({name})=> (
                        <li onClick={()=> setIsSubCategories(true)} className={className.cateLi}>{name}</li>
                    ))
                }
            </ul>
            {
                isSubCategories ?
                <>
                 <Overlay onClick={()=> setIsSubCategories(false)} />
                 <div className="fixed top-0 left-0 h-svh bg-teal-50 z-50">
                    <nav className="">
                        {
                            categoriesData[0]?.sub?.map(({name,imagePath,linkPath})=> (
                                <div key={name} className="">
                                    <Link href={linkPath}>
                                        <Image src={imagePath} width={30} height={30} alt={name}/>
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