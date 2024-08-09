"use client"
import {fetchData} from "../../../../../lip/fetchData";
import { useEffect, useState } from "react";
import {Navbar} from "./navbar";
import {ProductCard} from "./productCard"

export const ProductsContainer = ()=> {

    const [categoryName,setCategoryName] = useState('all');
    const [subcategoryName,setSubcategoryName] = useState('all');
    const [products,setProducts] = useState([]);
    const [page,setPage] = useState(1);

    useEffect(()=> {
        fetchData(`admin/products?category=${categoryName}&sub=${subcategoryName}&page=${page}`)
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
            <div className="">
                {
                    products?.map((product)=> (
                        <ProductCard key={product?.id} product={product} />
                    ))
                }
            </div>
        </div>
    )
};