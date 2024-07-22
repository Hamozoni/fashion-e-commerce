"use client";

import { useState } from "react";
import {CategoryProducts} from "./categoryProducts";
import Image from "next/image";

import offerImage from "../../public/categories/sliders/offer-2.webp"
import offer2Image from "../../public/categories/sliders/offer-1.jpg"

export const CategoriesProducts = ()=> {

    const [menPage,setMenPage] = useState(1);
    const [womenPage,setWomenPage] = useState(1);
    const [kidsPage,setKidsPage] = useState(1);

    const handleMenPage = ()=> {
        setMenPage(menPage + 1);
    };

    const handleWomenPage = ()=> {
        setWomenPage(womenPage + 1);
    };

    const handleKidsPage = ()=> {
        setKidsPage(kidsPage + 1);
    };

    const width = window.innerWidth

    return (
        <div className="">
            <div className="">
              <Image width={width} height={200} src={offerImage}  alt="offer"/>
           </div>
            <div className="p-3 lg:px-8 mb-10">
                <CategoryProducts 
                    category='men' 
                    page={menPage} 
                    onClick={handleMenPage}
                    />
                <CategoryProducts 
                    category='women' 
                    page={womenPage}
                    onClick={handleWomenPage}
                    />
                <CategoryProducts 
                    category='kids' 
                    page={kidsPage}
                    onClick={handleKidsPage}
                    />
            </div>
            <div className="">
              <Image width={width} height={200} src={offer2Image}  alt="offer"/>
           </div>
        </div>
    )
}