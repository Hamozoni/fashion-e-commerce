"use client";
import Link from "next/link";
import Image from "next/image";
// component
import AddToListBtn from "../../components/addToListBtn";
import ProductSelectColor from "./productSelectColor";
import ProductSelectSize from "./productSelectSize"
// lip
import getCurrency from "../../lip/getCurrency";
import { arrayGroupBykey } from "../../lip/arrayGroupBykey";
import { useState } from "react";
import AddToCart from "../../app/product/_components/AddToCart";


function ProductCard({product}) {

    const {id,name,priceInCent,images,sizes} = product;

    const productImages = arrayGroupBykey(images,'color');

    const [selectedColor,setSelectedColor] = useState(images[0]?.color);
    const [selectedSize,setSelectedSize] = useState(null);

    const className = {
            card: 'w-[220px] rounded-lg border border-green-100 cursor-pointer hover:border-green-300 relative',
            image: 'w-[220px] max-h-[220px] max-w-[220px]',
            heart: 'absolute top-2 right-2',
    }

   return (
    <div className={className.card}>
        <Link href={`/product/${id}`}>
            <Image 
                className={className.image} 
                src={images[1].imagePath.replace("public",'')}
                alt={name}
                width={220}
                height={200}
               />
        </Link>
        <div className={className.heart}>
            <AddToListBtn product={product} />
        </div>
        <div className="p-3">
            <div className="text-center pb-2">
                <h2 className="text-lg font-bold text-green-950">
                    {getCurrency(priceInCent)}
                </h2>
                <h4 
                    className="text-md font-medium text-green-800 "
                    >{name}
                </h4>
            </div>
            <div className="flex justify-between gap-3 pb-2">
                <ProductSelectColor
                   productImages={productImages}
                   selectedColor={selectedColor}
                   setSelectedColor={setSelectedColor}
                />
                <ProductSelectSize
                sizes={sizes}
                selectedSize={selectedSize}
                setSelectedSize={setSelectedSize}
                 />
            </div>
            <AddToCart 
                product={product} 
                selectedColor={selectedColor}
                selectedSize={selectedSize} 
                />
        </div>
    </div>
  )
}

export default ProductCard