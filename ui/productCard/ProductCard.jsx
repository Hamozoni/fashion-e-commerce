"use client";
import Link from "next/link";
import Image from "next/image";
import {useContext, useMemo, useState } from "react";
// component
import {AddToListBtn} from "../../buttons/addToListBtn";
import {AddToCart} from "../../app/product/_components/AddToCart";
import {ColorOptions} from "../../app/product/_components/SelectColor"
import {SizesOptions} from "../../app/product/_components/SelectSize"
// lip
import getCurrency from "../../lip/getCurrency";
import { AppContext } from "../../app/contextProvider";
// icons


const className = {
    card: ' rounded-lg border border-gray-100 cursor-pointer hover:border-gray-200 relative',
    heart: 'absolute top-2 left-2',
};


export function ProductCard({product}) {

   const [productDetails,setProductDetails] = useState(product);

   const {id,color,colorName,size,imagePath,priceInHalala} = productDetails;


   
   
   const linkHref = {
       pathname : `/product/${id}`,
       query: {color,colorName,size,imagePath,priceInHalala}
    };
    
    const { innerWidth } = useContext(AppContext);
    const imageWidth = innerWidth < 400 ? 160 : innerWidth  <  440 ?  180 : innerWidth < 460 ?  200 : 220;
    const cardHeight = innerWidth > 630 ? 280 : 200;
    

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
                    className=" min-h-[280px] max-h-[280px] flex items-center justify-center overflow-hidden">
                        <Image
                            className='object-contain'
                            src={productDetails?.imagePath}
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
            <div className="text-center ">
                <Link
                    href={linkHref}
                    className="text-sm sm:text-lg font-bold text-teal-900 hover:text-teal-900 line-clamp-2 capitalize"
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
                <h2 className="text-lg mb-2 sm:mb-0 sm:text-xl font-bold text-teal-950 text-center ">
                    {getCurrency(productDetails?.priceInHalala)}
                </h2>
                <AddToCart 
                    product={productDetails}
                    isFromCard={true}  
                    />
            </div>
        </div>
    </div>
  )
};