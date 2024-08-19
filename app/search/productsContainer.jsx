"use client";

import { fetchData } from "@/lip/fetchData";
import { LoadMoreBtn } from "@/ui/buttons/loadMoreBtn";
import { ProductCard } from "@/ui/cards/ProductCard";
import { useState } from "react";

export const ProductsContainer = ({products,count})=> {

    const [data,setData] = useState(products);
    const [page,setPage] = useState(1);
    const [isLoading,setIsLoading] = useState(false);
    const [isError,setIsError] = useState(null);


    const handleMoreData = ()=> {
        setIsLoading(true);
        setIsError(null);

        fetchData(`search?query=${query}&page=${page + 1}`)
        .then((data)=> {
            setData(prev=> [...prev,...data?.products]);
            setPage(page + 1);
        })
        .catch((error)=> {
            setIsError(error)
        })
        .finally(()=> {
            setIsLoading(false)
        })
    };

    return (
        <div className="">
            <div className="flex items-center gap-5">
                {
                    data?.map((product)=> (
                        <ProductCard key={product?.id} product={product} />
                    ))
                }

            </div>
            <LoadMoreBtn 
                isError={isError} 
                isLoading={isLoading} 
                count={count} 
                onClick={handleMoreData}
                />
        </div>
    )
}