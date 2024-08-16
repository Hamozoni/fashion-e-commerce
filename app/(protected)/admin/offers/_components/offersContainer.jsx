"use client";
import { useEffect, useState } from "react";
import { Navbar } from "../../products/_components/navbar"

export const OffersContainer = ({data})=> {

    const [categoryName,setCategoryName] = useState('all');
    const [subcategoryName,setSubCategory] = useState('');
    const [products,setProducts] = useState(data);
    const [isLoading,setIsLoading] = useState(false);

    useEffect(()=> {

        console.log(products)

    },[]);

    return (
        <div className="">
            <Navbar 
               categoryName={categoryName}
               setCategoryName={setCategoryName}
               subcategoryName={subcategoryName}
               setSubcategoryName={setSubCategory}
            />
        </div>
    )
}