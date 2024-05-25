"use client"

import getCurrency from "../../_lip/getCurrency";
import SelectImage from "./SelectImage";
import SelectSize from "./SelectSize";
import Features from "./Features"

import { useEffect, useRef, useState } from "react";
import ImagesGalary from "./ImagesGalary";
import AddToCart from "./AddToCart";


function ProductDetails({product,selectedColor}) {

    const [selectedSize,setSelectedSize] = useState('')

    const about = useRef();

    useEffect(()=> {
        about.current.innerText = product?.aboutThisItem
    },[]);





  return (
    <div className="flex gap-5">
        <ImagesGalary productImages={data.images} selectedColor={data.images[1].color}/>
        <div className="">
            <div>
                <div className="pb-2">
                    <h4 className="text-lg font-bold text-green-900">{product?.brand}</h4>
                    <h5 className="text-lg text-green-800">{product?.name}</h5>
                </div>
                <div className="flex items-center  text-green-900 gap-3">
                <h4 className='text-lg font-extrabold'>{getCurrency(+product.priceInCent)}</h4>
                <p className="text-green-800 text-sm">Inclusive of VAT</p>
                </div>
                <Features />
                <SelectSize sizes={product?.sizes} />
                <SelectImage images={product?.images} />
                <Specifications specifications={product.specifications} />
                <section className="py-4">
                    <h4 className="pb-2 text-lg font-bold text-green-900">about this items</h4>
                    <aside className="text-green-800" ref={about} ></aside>
                </section>
            </div>
            <AddToCart  product={data} selectedColor='#0c9597' selectedSize='42' />
        </div>
    </div>
  )
}

export default ProductDetails;