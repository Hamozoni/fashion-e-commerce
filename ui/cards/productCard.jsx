"use client";
import Link from "next/link";
import Image from "next/image";
import {useContext, useMemo, useState } from "react";
// component
import {AddToListBtn} from "../buttons/addToListBtn";
import {ColorOptions} from "../components/selectColor"
import {SizesOptions} from "../components/selectSize"
// lip
import {getCurrency} from "../../lip/getCurrency";
import { AppContext } from "../../app/contextProvider";
import { AddToCartBtn } from "../buttons/addToCartBtn";
// icons


const className = {
    card: ' rounded-lg border border-gray-100 dark:border-teal-950 cursor-pointer hover:border-gray-200 dark:hover:border-teal-900 relative overflow-hidden hover:scale-105',
    heart: 'absolute top-2 left-2',
    title: "text-sm sm:text-[16px] font-bold text-teal-900 dark:text-teal-50 hover:text-teal-900 dark:hover:text-teal-100 line-clamp-2 capitalize"
};


export function ProductCard({product}) {

   const [productDetails,setProductDetails] = useState(product);
   const {
        id,
        // color,
        colorName,
        size,
        imagePath,
        priceInHalala,
        offerPriceInHalala,
        // offerExpiresAt
    } = productDetails;
   
   const linkHref = {
       pathname : `/product/${id}`,
       query: {colorName,size}
    };
    
    const { innerWidth } = useContext(AppContext);
    const imageWidth = innerWidth < 400 ? 160 : innerWidth  <  440 ?  180 : innerWidth < 460 ?  200 : 220;
    const cardHeight = innerWidth < 400 ? 200 : innerWidth < 600 ? 260 : 280;

    const imageStyle = useMemo(()=> {
        return {
            width: imageWidth,
            maxWidth: imageWidth,
            minWidth: imageWidth,
            height: cardHeight,
            minHeight: cardHeight,
            maxHeight: cardHeight
        }
    },[innerWidth]);

    const cardStyle = useMemo(()=> {
        return {
            width: imageWidth,
            maxWidth: imageWidth,
            minWidth: imageWidth,
        }
    },[innerWidth]);
    
   return (
    <div 
        style={cardStyle} 
        className={className.card}>
        <div className="relative">
            <Link href={linkHref}>
                <div
                    style={imageStyle}
                    className=" min-h-[280px] max-h-[280px] flex items-center justify-center bg-white overflow-hidden">
                        <Image
                            className='object-contain'
                            src={`${process.env.FIREBASE_IMAGES_URL}${imagePath}`}
                            alt='product image'
                            width={imageWidth}
                            height={cardHeight}
                        />
                </div>
            </Link>

            <div className=" absolute left-0 bottom-0 w-full flex items-center justify-center">
                <ColorOptions 
                    product={productDetails}
                    setProduct={setProductDetails}
                />
            </div>
        </div>
        <div className={className.heart}>
            <AddToListBtn product={productDetails} />
        </div>
        <div className="p-3">
            <div className="">
                <Link
                    href={linkHref}
                    className={className.title}
                    >{productDetails?.name}
                </Link>
            </div>
            <div className="flex items-center my-3 overflow-x-auto">
                <SizesOptions 
                    product={productDetails} 
                    setProduct={setProductDetails}
                    />
            </div>
            <div className="sm:flex items-center justify-between gap-3">
                <div className="text-sm mb-2 sm:mb-0 sm:text-[16px] font-medium text-teal-900 dark:text-teal-100 text-center ">
                   {
                        offerPriceInHalala ? 
                        <h2>
                            {getCurrency(offerPriceInHalala)}
                        </h2>
                        :null
                    }
                    <h2 className={offerPriceInHalala ? 'line-through text-xs': ''}>
                        {getCurrency(priceInHalala)}
                    </h2>
                </div>
                <AddToCartBtn 
                    product={productDetails}
                    isFromCard={true}  
                    />
            </div>
        </div>
    </div>
  )
};
