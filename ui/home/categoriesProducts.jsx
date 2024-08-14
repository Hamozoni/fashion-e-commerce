"use client";

import {CategoryProducts} from "./categoryProducts";
import Image from "next/image";

import offerImage from "@/public/categories/sliders/offer-1.jpg"
import offer2Image from "@/public/categories/sliders/offer-2.webp"

export const CategoriesProducts = ()=> {

    const width = window.innerWidth

    return (
        <div className="">
            <div className="">
              <Image width={width} height={200} src={offerImage}  alt="offer"/>
           </div>
            <div className="p-3 lg:px-8">
                <CategoryProducts category='men' />
                <CategoryProducts category='women' />
                <CategoryProducts category='kids' />
            </div>
            <div className="">
              <Image width={width} height={200} src={offer2Image}  alt="offer"/>
           </div>
        </div>
    )
}