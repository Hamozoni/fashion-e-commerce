"use client";
import { useState } from "react";
import { Navbar } from "../../products/_components/navbar"

export const OffersContainer = ()=> {

    const [categoryName,setCategoryName] = useState('all');
    const [subcategoryName,setSubCategory] = useState('');

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