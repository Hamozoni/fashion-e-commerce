"use client";

import { Navbar } from "@/app/(protected)/admin/products/_components/navbar";
import { useState } from "react";

export const OfferCardContainer = ()=> {

    const [products,setProducts] = useState([]);
    const [count,setCount] = useState(1);

    


    return (
        <div className="">
            <Navbar 
                setData={setProducts} 
                setCount={setCount} 
                pathname='admin/offers'
                />
        </div>
    )
}