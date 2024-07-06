"use client"
import { createContext, useEffect, useRef, useState } from "react";
// components
import SelectImage from "./SelectImage";
import SelectSize from "./SelectSize";
import Features from "./Features"
import AddToCart from "./AddToCart";
import Specifications from "./Specifications";
import ImagesGalary from "./ImagesGalary";
import AddToListBtn from "../../../components/addToListBtn";
// lip
import getCurrency from "../../../lip/getCurrency";
import { ReviewsAverage } from "../../../ui/productReviews/components/reviewsAverage";
// reviews context component
import ReviewsContext from "../../../ui/productReviews/reviewsContext"

export const ProductDetailsContext =  createContext(null);

function ProductDetails({product}) {

    const {images,brand,name,priceInCent,aboutThisItem,specifications} = product;
    const [selectedSize,setSelectedSize] = useState('');
    const [selectedColor,setSelectedColor] = useState(images[0]?.color);

    const about = useRef();

    // useEffect(()=> {
    //     about.current.innerText = aboutThisItem;
    // },[]);

  return (
    //   <ReviewsContext product={product}>
        <ProductDetailsContext.Provider 
            value={{
                product,
                selectedSize,
                setSelectedSize,
                selectedColor,
                setSelectedColor
                }}
                >
                <div className="md:flex gap-4 lg:gap-8 capitalize">
                    <ImagesGalary  /> 
                    <div className="flex-1">
                        <div>
                            <header className="pb-2">
                                <h5
                                    className="text-2xl text-teal-9500"
                                    >{name}
                                </h5>
                                <h4 className="text-sm text-teal-700">
                                    brand: {brand}
                                </h4>
                                <ReviewsContext product={product}>
                                   <ReviewsAverage />
                                </ReviewsContext>
                            </header>
                            <div className="flex items-center  text-green-950 gap-3">
                                <h4 className='text-lg font-extrabold'>
                                    {getCurrency(+priceInCent)}
                                </h4>
                                <p className="text-green-800 text-sm">Inclusive of VAT</p>
                            </div>
                            <SelectSize />
                            <SelectImage />
                            {/* <Specifications specifications={specifications} /> */}
                            {/* <footer className="py-4">
                                <h4 className="pb-2 text-lg font-bold text-green-950">about this items</h4>
                                <p 
                                    className="text-green-800" 
                                    ref={about} >
                                </p>
                            </footer> */}
                        </div>
                        <Features />
                        <div className="flex items-center gap-2 pt-5 ">
                            <AddToCart
                                product={product} 
                                selectedColor={selectedColor}
                                selectedSize={selectedSize} 
                            />
                        <AddToListBtn product={product} />
                        </div>
                    </div>
                </div>
        </ProductDetailsContext.Provider>
        // </ReviewsContext>
  )
}

export default ProductDetails;