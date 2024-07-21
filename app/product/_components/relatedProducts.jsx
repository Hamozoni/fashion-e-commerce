"use client"

import { useEffect, useState } from "react"
import { fetchData } from "../../../lip/fetchData";
import { ProductCard } from "../../../ui/productCard/ProductCard";
import Loading from "../../loading"

export const RelatedProducts = ({id})=> {

    const [products,setProducts] = useState([]);
    const [isLoading,setIsLoading] = useState(null);
    const [error,setError] = useState(null)

    useEffect(()=> {
        fetchData(`products/relatedById?id${id}`)
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
            <h4>related products:</h4>
            <div className="">
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