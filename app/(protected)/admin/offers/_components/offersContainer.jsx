"use client";
import { useState } from "react";
import { Navbar } from "../../products/_components/navbar"
import { OfferProductCard } from "./offerProductCard";

import { TbAdjustmentsSearch } from "react-icons/tb";
import { FaTruckLoading } from "react-icons/fa";

import { fetchData } from "@/lip/fetchData";
import { useSearchParams } from "next/navigation";
import { ButtonWithIcon } from "@/ui/buttons/buttons";
import { Error } from "@/ui/components/error";

export const OffersContainer = ()=> {

    const searchParams = useSearchParams()

    const {category,subcategory} = Object.fromEntries(searchParams.entries())

    const [products,setProducts] = useState([]);
    const [count,setCount] = useState(0);
    const [isLoading,setIsLoading] = useState(false);
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
    }


    return (
        <div className="">
            <Navbar 
               setData={setProducts}
               setCount={setCount}
            />
            <div className="">
                <h5><TbAdjustmentsSearch /> all results {count}</h5>
                <div className="">
                    {
                        products?.map(product=> (
                            <OfferProductCard key={product?.id} product={product} />
                        ))
                    }
                </div>
                {
                    isErrror ? <Error onClick={handleFetchMore} />:
                    <div className="max-w-[150px] mx-auto">
                        <ButtonWithIcon
                        text='load more'
                        Icon={FaTruckLoading}
                        type='save'
                        disabled={isLoading}
                        />

                    </div>
                }
            </div>
        </div>
    )
}