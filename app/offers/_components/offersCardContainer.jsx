"use client";

import { Navbar } from "@/app/(protected)/admin/products/_components/navbar";
import { ProductCard } from "@/ui/cards/ProductCard";
import { useState } from "react";

export const OfferCardContainer = ()=> {

    const [products,setProducts] = useState([]);
    const [count,setCount] = useState(1);
    const [page,setPage] = useState(1);




    return (
        <div className="">
            <Navbar 
                setData={setProducts} 
                setCount={setCount} 
                setPage={setPage}
                pathname='admin/offers'
                />
            <div className="flex items-center gap-5 flex-wrap">
                {
                    products?.map(({
                        id,
                        color,
                        colorName,
                        offerExpiresAt,
                        offerPriceInHalala,
                        priceInHalala,
                        product
                    })=> (
                        <ProductCard 
                            key={id} 
                            product={{
                               colors:[{
                                id,
                                color,
                                colorName,
                                offerExpiresAt,
                                offerPriceInHalala,
                                priceInHalala}],
                                color,
                                colorName,
                                offerExpiresAt,
                                offerPriceInHalala,
                                priceInHalala,
                                ...product
                            }} 
                            />
                    ))
                }
            </div>
        </div>
    )
}