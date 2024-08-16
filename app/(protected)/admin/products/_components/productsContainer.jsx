"use client";
import {ProductCard} from "./productCard";
import { TbAdjustmentsSearch } from "react-icons/tb";
import { LiaTruckLoadingSolid } from "react-icons/lia";
import { ButtonWithIcon } from "@/ui/buttons/buttons";
import { useState } from "react";
import { Navbar } from "./navbar";
import {usePathname} from "next/navigation";
import { Error } from "@/ui/components/error";
import { fetchData } from "@/lip/fetchData";

export const ProductsContainer = ()=> {

    const pathname = usePathname()

    const [data,setData] = useState([]);
    const [allResults,setAllResults] = useState(0);
    const [isLoadingMore,setIsLoadingMore] = useState(false);
    const [isError,setIsError] = useState(null);
    const [page,setPage] = useState(1)

    const handleFetchMore = ()=> {
        setIsError(null)
        setIsLoadingMore(true)
        fetchData(`${pathname}}&page=${page + 1}`)
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
            <Navbar setData={setData} setCount={setAllResults} />

            {
                <section className="">
                    <h6 className="text-lg font-bold text-gray-500 capitalize flex items-center gap-2">
                        <TbAdjustmentsSearch /> all results {allResults}
                    </h6>
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
                        :data?.length < allResults &&
                        <div className="max-w-[150px] mx-auto">
                            <ButtonWithIcon 
                                text='laod more' 
                                Icon={LiaTruckLoadingSolid} 
                                type='save'
                                onClick={handleFetchMore}
                                disabled={isLoadingMore}
                                />

                        </div>
                    }
                </section>

            }
        </div>
    )
};