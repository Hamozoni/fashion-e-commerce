"use client";
import Link from "next/link";
import Image from "next/image";
import {useState } from "react";
// component
import {AddToListBtn} from "../../components/addToListBtn";
import {AddToCart} from "../../app/product/_components/AddToCart";
import {ColorOptions} from "../../app/product/_components/SelectColor"
import {SizesOptions} from "../../app/product/_components/SelectSize"
// lip
import getCurrency from "../../lip/getCurrency";
import { useRouter } from "next/navigation";
// icons


const className = {
    card: 'w-[280px] rounded-lg border border-gray-100 cursor-pointer hover:border-gray-200 relative',
    image: 'min-w-[200px] max-w-[200px] max-h-[280px] ',
    heart: 'absolute top-2 left-0 w-full flex items-center justify-between p-4',
};

export function ProductCard({product}) {

   const [productDetails,setProductDetails] = useState(product);

   const {id,color,colorName,size,imagePath,priceInHalala} = productDetails;

   console.log(colorName);

   const router = useRouter()

   const linkHref = {
      pathname : `/product/${id}`,
      query: {color,colorName,size,imagePath,priceInHalala}
   };
    
   return (
    <div className={className.card}>
        <div className="relative">
            <Link href={linkHref}>
                <div
                    className="w-[220px] min-w-[200px] min-h-[280px] max-h-[280px] flex items-center justify-center overflow-hidden">
                        <Image 
                            className={className.image}
                            src={productDetails?.imagePath}
                            alt='product image'
                            width={200}
                            height={280}
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
            <div className="pb-2 text-center ">
                <Link
                    href={linkHref}
                    className="text-lg font-bold text-teal-900 hover:text-teal-900 line-clamp-2 capitalize"
                    >{productDetails?.name}
                </Link>
            </div>
            <div className="flex items-center justify-between gap-3">
                <h2 className="text-xl font-bold text-teal-950 text-center ">
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