"use client";
import {ProductCard} from "./productCard";
import { useState } from "react";
import { Navbar } from "./navbar";
import {usePathname, useSearchParams } from "next/navigation";
import { fetchData } from "@/lip/fetchData";
import { NoResults } from "@/ui/components/noResults";
import { AllResultsTitle } from "@/ui/components/allResultsTitle";
import { LoadMoreBtn } from "@/ui/buttons/loadMoreBtn";

export const ProductsContainer = ()=> {

    const searchParams = useSearchParams();

    const {category,subcategory} =  Object.fromEntries(searchParams.entries());
    const pathname = usePathname()

    const [data,setData] = useState([]);
    const [allResults,setAllResults] = useState(0);
    const [isLoadingMore,setIsLoadingMore] = useState(false);
    const [isError,setIsError] = useState(null);
    const [page,setPage] = useState(1)

    const handleFetchMore = ()=> {
        setIsError(null)
        setIsLoadingMore(true);
        const endPoint = `${pathname}?category=${category || 'all'}&subcategory=${subcategory || 'all'}&page=${page + 1}`
        fetchData(endPoint)
        .then(data=> {
            setData(prev=> [...prev,...data?.products]);
            setAllResults(data?.count);
            setPage(page + 1)
        })
        .catch(error=> {
            setIsError(error)
        })
        .finally(()=> {
            setIsLoadingMore(false)
        })
    }



    return (
        <div className="">
            <Navbar 
                setData={setData} 
                setCount={setAllResults} 
                setPage={setPage} 
                pathname={pathname}
                />

            {
                <section className="">
                    <AllResultsTitle count={allResults} />
                    <div className="">
                        {
                            data?.map((product)=> (
                                <ProductCard 
                                    key={product?.id} 
                                    product={product} 
                                    />
                            ))
                        }

                    </div>
                    <LoadMoreBtn 
                        isError={isError} 
                        isLoading={isLoadingMore} 
                        onClick={handleFetchMore} 
                        />
                    {
                    allResults === 0 && 
                        <NoResults />
                    }
                </section>

            }
        </div>
    )
};