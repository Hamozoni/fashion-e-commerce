"use client";
import { useEffect, useState } from "react";
import { Navbar } from "../../products/_components/navbar"

export const OffersContainer = ()=> {

    const [categoryName,setCategoryName] = useState('all');
    const [subcategoryName,setSubCategory] = useState('');
    const [products,setProducts] = useState([]);
    const [count,setCount] = useState(0);
    const [isLoading,setIsLoading] = useState(false);

    useEffect(()=> {

        console.log(products)

    },[]);

    return (
        <div className="">
            <Navbar 
               setData={setProducts}
               setCount={setCount}
            />
        </div>
    )
}