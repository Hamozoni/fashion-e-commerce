"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
// component
import AddToListBtn from "../../components/addToListBtn";
import AddToCart from "../../app/product/_components/AddToCart";
// lip
import getCurrency from "../../lip/getCurrency";
import { arrayGroupBykey } from "../../lip/arrayGroupBykey";
// icons
import { IoIosArrowForward,IoIosArrowBack} from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { TbEyeClosed } from "react-icons/tb";


function ProductCard({product}) {

    
    const [productDetails,setProductDetails] = useState(product);
    
    const className = {
            card: 'w-[344px] rounded-lg border border-gray-100 cursor-pointer hover:border-gray-200 relative p-3',
            image: 'w-fit flex-1 min-w-[320px] max-h-[370px] max-w-[320px]',
            heart: 'absolute top-2 left-0 w-full flex items-center justify-between p-4',
    }


   return (
    <div className={className.card}>
        <div  className=" w-[320px] overflow-hidden flex  relative group">
            {
                productDetails?.images?.map(({imagePath,colorName})=> (
                    colorName === productDetails?.colorName ?
                    <div key={productDetails?.id}
                        className={className.image}>
                        <Image 
                            className="rounded-md"
                            src={imagePath}
                            alt='product image'
                            width={320}
                            height={370}
                        />

                    </div> : null

                ))
            }

        </div>
        <div className={className.heart}>
            <AddToListBtn product={productDetails} />
            <Link 
                // onMouseEnter={()=> setIsLikHaverd(true)}
                // onMouseLeave={()=> setIsLikHaverd(false)}
                href={`/product/${productDetails?.id}`} 
                className="flex justify-center items-center shadow-md p-2 text-teal-900 bg-teal-50 rounded-full border border-gray-100">
               {/* {isLikHaverd ? <TbEyeClosed size={22}/> : <FaEye size={22}/> } */}
            </Link>
        </div>
        <div className="p-3">
            <h2 className="text-xl font-bold text-teal-950 text-center ">
                {getCurrency(productDetails?.priceInHalala)}
            </h2>
            <div className="pb-2">
                <Link
                    href={`/product/${productDetails?.id}`}
                    className="text-lg font-bold text-teal-900 hover:text-teal-900"
                    >{productDetails?.name}
                </Link>
            </div>
            {/* <div className=" ">
              <AddToCart 
                product={product} 
                selectedColor={selectedColor}
                selectedSize={selectedSize} 
                />
            </div> */}
        </div>
    </div>
  )
}

export default ProductCard