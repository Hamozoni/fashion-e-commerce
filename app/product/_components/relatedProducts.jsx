"use client"
import { useCallback, useEffect, useState } from "react";
// fetch api
import { fetchData } from "@/lip/fetchData";
// components
import { ProductCard } from "@/ui/cards/productCard";
// loader
import Loading from "../../loading";
import { Error } from "@/ui/components/error";
import { NoResults } from "@/ui/components/noResults";

export const RelatedProducts = ({id})=> {

    const [products,setProducts] = useState([]);
    const [isLoading,setIsLoading] = useState(null);
    const [error,setError] = useState(null);


    const fetchRelated = useCallback(()=> {
        setError(null)
        fetchData(`products/relatedById?id=${id}`)
        .then((data)=> {
            setError(null);
            setProducts(data);
        })
        .catch((error)=> {
            setError(error);
        })
        .finally(()=> {
            setIsLoading(false);
        })
    },[id])

    useEffect(()=> {
        fetchRelated()
    },[fetchRelated]);

    return (
        <section>
            <h4 className="text-teal-950 dark:text-teal-50 text-2xl font-bold capitalize">
                related products:
            </h4>
            <div className="flex gap-5 overflow-x-auto py-5">
                {
                    isLoading ? <Loading /> 
                    : error ? <Error onClick={fetchRelated} /> 
                    : products?.length === 0 ? <NoResults />
                    : products?.map((product)=> (
                        <ProductCard key={product.id} product={product}/>
                    ))
                }
            </div>
        </section>
    )
}