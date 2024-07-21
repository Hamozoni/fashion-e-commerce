"use client";

import { useEffect, useState } from "react";
import {fetchData} from "../../lip/fetchData";

import Loading from "../../app/loading";
import { ProductCard } from "../productCard/ProductCard";
export const HomeProducts = ({category})=> {

    const [products,setProducts] = useState([]);
    const [isLoading,setisLoading] = useState(false);
    const [error,setError] = useState(null)

    useEffect(()=> {
        setisLoading(true)
        fetchData(`products/category?category=${category}&page=1`)
        .then((data)=> {
            setProducts(data);
            console.log(data);
            setError(null);
        })
        .catch((error)=> {
            setError(error);
        })
        .finally(()=> {
             setisLoading(false)
        })
    },[category]);


    return (
        <section className="p-3 lg:px-8 mb-10">
            <h4 className="text-2xl capitalize text-teal-950 font-bold mb-8">products for {category} may you like : </h4>
            <div className="">
                {
                    isLoading ? <Loading /> : 
                    <div className="flex gap-5 overflow-x-auto">
                        {
                            products?.map((product)=> (
                                <ProductCard key={product.id} product={product} />
                            ))
                        }
                    </div>
                }
            </div>
        </section>
    )
}