"use client"
import {fetchData} from "../../../../../lip/fetchData";
import { useEffect, useState } from "react";
import {Navbar} from "./navbar";

export const ProductsContainer = ()=> {

    const [categoryName,setCategoryName] = useState('all');
    const [subcategoryName,setSubcategoryName] = useState('all');
    const [products,setProducts] = useState([])

    useEffect(()=> {
        fetchData(`admin/products?category=${categoryName}&sub=${subcategoryName}`)
        .then((data)=> {
            console.log(data)
            setProducts(data)
        })
        .catch((error)=> {
            console.log(error)
        })

    },[categoryName,subcategoryName]);

    return (
        <div className="">
            <Navbar 
                categoryName={categoryName} 
                setCategoryName={setCategoryName} 
                setSubcategoryName={setSubcategoryName}
                subcategoryName={subcategoryName}
                />
        </div>
    )
};