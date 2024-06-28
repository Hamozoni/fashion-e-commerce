"use client"

import getCurrency from "../../../lip/getCurrency";
import SelectImage from "./SelectImage";
import SelectSize from "./SelectSize";
import Features from "./Features"

import { useEffect, useRef, useState } from "react";
import ImagesGalary from "./ImagesGalary";
import AddToCart from "./AddToCart";
import Specifications from "./Specifications";


function ProductDetails({product}) {

    const [selectedSize,setSelectedSize] = useState('');
    const [selectedColor,setSelectedColor] = useState(product?.images[0]?.color);

    const about = useRef();

    const imagesGroupBy = (images, key) => images.reduce(
        (result,item) => ({
          ...result,[item[key]]: [...(result[item[key]] || []),item,],}), 
        {},
      );

    useEffect(()=> {
        about.current.innerText = product?.aboutThisItem;
    },[]);

  return (
    <div className="md:flex gap-5">
        <ImagesGalary 
            productImages={imagesGroupBy(product.images,'color')} 
            selectedColor={selectedColor}
            />
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
                <SelectSize 
                    sizes={product?.sizes} 
                    selectedSize={selectedSize}
                    setSelectedSize={setSelectedSize}/>
                <SelectImage 
                    images={imagesGroupBy(product.images,'color')} 
                    selectedColor={selectedColor} 
                    setSelectedColor={setSelectedColor} />
                <Specifications 
                    specifications={product.specifications} />
                <section className="py-4">
                    <h4 className="pb-2 text-lg font-bold text-green-900">about this items</h4>
                    <aside className="text-green-800" ref={about} ></aside>
                </section>
            </div>
            <AddToCart
                product={product} 
                selectedColor={selectedColor} 
                selectedSize={selectedSize} />
        </div>
    </div>
  )
}

export default ProductDetails;