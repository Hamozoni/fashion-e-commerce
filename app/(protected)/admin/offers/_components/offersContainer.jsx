"use client";
import {useState } from "react";
import { Navbar } from "../../products/_components/navbar"
import { OfferProductCard } from "./offerProductCard";

import { fetchData } from "@/lip/fetchData";
import { useSearchParams } from "next/navigation";
import { AllResultsTitle } from "@/ui/components/allResultsTitle";
import { LoadMoreBtn } from "@/ui/buttons/loadMoreBtn";

export const OffersContainer = ()=> {

    const searchParams = useSearchParams()

    const {category,subcategory} = Object.fromEntries(searchParams.entries())

    const [products,setProducts] = useState([]);
    const [count,setCount] = useState(0);
    const [isLoading,setIsLoading] = useState(false);
    const [isValid,setIsValid] = useState(true);
    const [isErrror,setIsError] = useState(null);
    const [page,setPage] = useState(1);

    const handleFetchMore = ()=> {
        const endPoint = `admin/offers?category=${category || 'all'}&subcategory=${subcategory || 'all'}&page=${page + 1}`
        setIsLoading(true);
        setIsError(null)
        fetchData(endPoint)
        .then(data=> {
            setProducts(prev=> [...prev,...data?.products]);
            setCount(data?.count);
            setPage(page + 1)
        })
        .catch(error=> {
            setIsError(error)
        })
        .finally(()=> {
            setIsLoading(false)
        })
    };

    const className = {
        validBtn: `${isValid ? 'text-teal-300 border-b border-b-teal-300': 'text-teal-950 dark:text-teal-50 ' } font-bold capitalize text-sm`,
        expiresBtn: `${isValid ? 'text-teal-950 dark:text-teal-50': ' text-teal-300 border-b border-b-teal-300' } font-bold capitalize text-sm`,
    }


    return (
        <div className="capitalize">
            <Navbar 
               setData={setProducts}
               setCount={setCount}
               setPage={setPage}
               pathname='admin/offers'
            />
            <div className="">
                <section className="flex items-center justify-between mb-3">
                    <AllResultsTitle count={count} />
                    <nav className="flex items-center gap-5">
                        <button 
                            onClick={()=> setIsValid(true)}
                            className={className.validBtn}>
                                valid
                            </button>
                        <button
                            onClick={()=> setIsValid(false)} 
                            className={className.expiresBtn}>
                                expired
                            </button>
                    </nav>
                </section>
                <div className="">
                    {
                        products?.map(product=> {
                            const nowDate = Date.now();
                            const expireDate = Date.parse(product.offerExpiresAt);
                            if(isValid) {
                                if(expireDate > nowDate) {
                                    return(
                                        <OfferProductCard 
                                              key={product?.id} 
                                              product={product} />  
                                   )  
                                }
                            }else {
                                if(expireDate < nowDate) {
                                    return(
                                        <OfferProductCard 
                                              key={product?.id} 
                                              product={product} />  
                                   )  
                                }
                            }
                            
                        })
                    }
                </div>
                {
                    count > products?.length ?
                    <LoadMoreBtn 
                        isError={isErrror} 
                        isLoading={isLoading} 
                        onClick={handleFetchMore}
                        />
                    :null
                }
            </div>
        </div>
    )
}