"use client"
import { createContext, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
// components
import {SelectColor} from "./SelectColor";
import {SelectSize} from "./SelectSize";
import {Features} from "./Features"
import {AddToCart}from "../../../ui/buttons/addToCart";
import {Specifications}from "./Specifications";
import {ImagesGalary} from "./ImagesGalary";
import {AddToListBtn }from "../../../ui/buttons/addToListBtn";
// lip
import {getCurrency} from "../../../lip/getCurrency";
import { ReviewsAverage } from "../../../ui/productReviews/components/reviewsAverage";
// reviews context component
import {ReviewsContextProvider} from "../../../ui/productReviews/reviewsContext"

export const ProductDetailsContext =  createContext(null);

export function ProductDetails({data}) {

    const [product,setProduct]= useState(data);

    const searchParams = useSearchParams();

    useEffect(()=> {

        const searchParamsObject = Object.fromEntries(searchParams.entries());
        const {
            color,
            colorName,
            size,imagePath,
            priceInHalala
        } = searchParamsObject;

        console.log(searchParamsObject)

        setProduct((prev)=> {
            const selectedValues = {
                color,
                colorName,
                size,imagePath,
                priceInHalala
            }

            return {...prev,...selectedValues}
        })
    },[]);

  return (
        <ProductDetailsContext.Provider 
            value={{
                product,
                setProduct,
                }}
                >
                <div className="md:flex gap-4 lg:gap-8 capitalize pb-3 border-b border-teal-100">
                    <ImagesGalary  /> 
                    <div className="flex-1">
                        <div>
                            <header className="pb-2">
                                <h5
                                    className="text-2xl text-teal-9500"
                                    >{product?.name}
                                </h5>
                                <h4 className="text-sm text-teal-700">
                                    brand: {product?.brand}
                                </h4>
                                <ReviewsContextProvider product={product}>
                                   <ReviewsAverage />
                                </ReviewsContextProvider>
                            </header>
                            <div className="flex items-center  text-teal-950 gap-3">
                                <h4 className='text-2xl font-extrabold'>
                                    {getCurrency(+product?.priceInHalala)}
                                </h4>
                                <p className="text-teal-800 text-sm">Inclusive of VAT</p>
                            </div>
                            <SelectSize />
                            <SelectColor />
                            <Specifications />
                        </div>
                        <Features />
                        <div className="flex items-center gap-2 pt-5 ">
                            <AddToCart
                                product={product} 
                            />
                        <AddToListBtn product={product} />
                        </div>
                    </div>
                </div>
        </ProductDetailsContext.Provider>
  )
};