"use client"
import { useEffect, useState } from "react";
// fetch api
import { fetchData } from "../../../lip/fetchData";
// components
import { ProductCard } from "../../../ui/cards/productCard";
// loader
import Loading from "../../loading";

export const RelatedProducts = ({id})=> {

    const [products,setProducts] = useState([]);
    const [isLoading,setIsLoading] = useState(null);
    const [error,setError] = useState(null)

    useEffect(()=> {
        fetchData(`products/relatedById?id=${id}`)
        .then((data)=> {
            setError(null);
            console.log(data)
            setProducts(data);
        })
        .catch((error)=> {
            setError(error);
        })
        .finally(()=> {
            setIsLoading(false);
        })
    },[id]);

    return (
        <section>
            <h4 className="text-teal-950 dark:text-teal-50 text-2xl font-bold capitalize">
                related products:
            </h4>
            <div className="flex gap-5 overflow-x-auto py-5">
                {
                    isLoading ? <Loading /> :
                    products?.map((product)=> (
                        <ProductCard key={product.id} product={product}/>
                    ))
                }
            </div>
        </section>
    )
}