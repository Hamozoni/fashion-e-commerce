"use client";
import {ProductCard} from "./productCard";
import { LiaTruckLoadingSolid } from "react-icons/lia";
import { ButtonWithIcon } from "@/ui/buttons/buttons";
import { useState } from "react";
import { Navbar } from "./navbar";
import {usePathname, useSearchParams } from "next/navigation";
import { Error } from "@/ui/components/error";
import { fetchData } from "@/lip/fetchData";
import { NoResults } from "@/ui/components/noResults";
import { AllResultsTitle } from "@/ui/components/allResultsTitle";

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
        setIsLoadingMore(true)
        fetchData(`${pathname}?category=${category || 'all'}&subcategory=${subcategory || 'all'}&page=${page + 1}`)
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
                    {
                        data?.map((product)=> (
                            <ProductCard 
                                key={product?.id} 
                                product={product} 
                                />
                        ))
                    }
                    {
                        isError ?  
                        <Error onClick={handleFetchMore} />
                        :data?.length < allResults ?
                        <div className="max-w-[150px] mx-auto">
                            <ButtonWithIcon 
                                text='laod more' 
                                Icon={LiaTruckLoadingSolid} 
                                type='save'
                                onClick={handleFetchMore}
                                disabled={isLoadingMore}
                                />

                        </div>
                        :allResults === 0 && 
                        <NoResults />
                    }
                </section>

            }
        </div>
    )
};