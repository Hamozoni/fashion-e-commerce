"use client";
import { useEffect, useState } from "react";
import { Navbar } from "../../products/_components/navbar"
import { OfferProductCard } from "./offerProductCard";

export const OffersContainer = ()=> {

    const [categoryName,setCategoryName] = useState('all');
    const [subcategoryName,setSubCategory] = useState('');
    const [products,setProducts] = useState([]);
    const [count,setCount] = useState(0);
    const [isLoading,setIsLoading] = useState(false);


    return (
        <div className="">
            <Navbar 
               setData={setProducts}
               setCount={setCount}
            />
            <div className="">
                <h5>all results {count}</h5>
                <div className="">
                    {
                        products?.map(product=> (
                            <OfferProductCard key={product?.id} product={product} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}