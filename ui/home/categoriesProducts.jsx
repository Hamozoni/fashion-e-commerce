"use client";

import {CategoryProducts} from "./categoryProducts";
import Image from "next/image";

import offer1 from "@/public/categories/sliders/offer-1.jpg"
import offer2 from "@/public/categories/sliders/offer-2.webp"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export const CategoriesProducts = ()=> {

    const [width,setWidth] = useState(window.innerWidth);
    const router = useRouter();

    useEffect(()=> {
        const handleResize = ()=> {
            setWidth(window.innerWidth)
        };
        window.addEventListener('resize',handleResize);
        return () => window.removeEventListener('resize',handleResize)
    },[]);

    return (
        <div className="">
            <div 
                onClick={()=> router.push('/offers?category=all&subcategory=all')} 
                className="cursor-pointer"
                >
                <Image 
                    width={width} 
                    height={200} 
                    src={offer1}  
                    alt="offer"
                    />
           </div>
            <div className="p-3 lg:px-8">
                <CategoryProducts category='men' />
                <CategoryProducts category='women' />
                <CategoryProducts category='kids' />
            </div>
            <div 
                onClick={()=> router.push('/offers?category=all&subcategory=all')} 
                className="cursor-pointer"
                >
              <Image 
                    width={width} 
                    height={200} 
                    src={offer2}  
                    alt="offer"
                    />
           </div>
        </div>
    )
}