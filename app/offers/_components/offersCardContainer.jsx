"use client";

import { Navbar } from "@/app/(protected)/admin/products/_components/navbar";
import { fetchData } from "@/lip/fetchData";
import { LoadMoreBtn } from "@/ui/buttons/loadMoreBtn";
import { ProductCard } from "@/ui/cards/ProductCard";
import { AllResultsTitle } from "@/ui/components/allResultsTitle";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export const OfferCardContainer = ()=> {

    const [products,setProducts] = useState([]);
    const [count,setCount] = useState(1);
    const [page,setPage] = useState(1);
    const [isError,setIsError] = useState(null);
    const [isLoading,setIsLoading] = useState(false);

    const searchParams = useSearchParams();

    const {category,subcategory} = Object.fromEntries(searchParams.entries());


    const handeMoreData = ()=> {
        setIsLoading(true);
        setIsError(null);

        const endPoint = `admin/offers?category=${category}&subcategory=${subcategory}&page=${page + 1}`

        fetchData(endPoint)
        .then(data=> {
            products(prev=> [...prev,...data?.products]);
            setPage(page + 1)
        })
        .catch(error=> {
            setIsError(error);
        })
        .finally(()=> {
            setIsLoading(false)
        })
    };

    return (
        <div className="">
            <Navbar 
                setData={setProducts} 
                setCount={setCount} 
                setPage={setPage}
                pathname='admin/offers'
                />
            <AllResultsTitle count={count} />
            <div className="flex items-center gap-5 flex-wrap">
                {
                    products?.map(({
                        id,
                        color,
                        colorName,
                        offerExpiresAt,
                        offerPriceInHalala,
                        priceInHalala,
                        product
                    })=> (
                        <ProductCard 
                            key={id} 
                            product={{
                               colors:[{
                                id,
                                color,
                                colorName,
                                offerExpiresAt,
                                offerPriceInHalala,
                                priceInHalala}],
                                color,
                                colorName,
                                offerExpiresAt,
                                offerPriceInHalala,
                                priceInHalala,
                                ...product
                            }} 
                            />
                    ))
                }
            </div>
            {
                count <= products.length ? 
                <LoadMoreBtn 
                    isError={isError} 
                    isLoading={isLoading} 
                    onClick={handeMoreData} 
                    />
                : null
            }
        </div>
    )
}