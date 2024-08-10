"use client"
import {fetchData} from "../../../../../lip/fetchData";
import { useEffect, useState } from "react";
import {Navbar} from "./navbar";
import {ProductCard} from "./productCard";
import { TbAdjustmentsSearch } from "react-icons/tb";

export const ProductsContainer = ()=> {

    const [categoryName,setCategoryName] = useState('all');
    const [subcategoryName,setSubcategoryName] = useState('all');
    const [products,setProducts] = useState([]);
    const [allResults,setAllResults] = useState(0);
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError] = useState(null);
    const [page,setPage] = useState(1);

    useEffect(()=> {
        fetchData(`admin/products?category=${categoryName}&sub=${subcategoryName}&page=${page}`)
        .then((data)=> {
            console.log(data);
            setAllResults(data?.count)
            setProducts(data?.products)
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
            <section className="">
                <h6 className="text-sm font-bold text-gray-500">
                    <TbAdjustmentsSearch /> all results {allResults}
                </h6>
                {
                    products?.map((product)=> (
                        <ProductCard key={product?.id} product={product} />
                    ))
                }
            </section>
        </div>
    )
};