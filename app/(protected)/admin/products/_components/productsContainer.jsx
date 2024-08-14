"use client"
import {fetchData} from "@/lip/fetchData";
import { useCallback, useEffect, useState } from "react";
import {Navbar} from "./navbar";
import {ProductCard} from "./productCard";
import { TbAdjustmentsSearch } from "react-icons/tb";
import { LiaTruckLoadingSolid } from "react-icons/lia";
import { Loading } from "@/ui/models/Loading";
import {Error} from "@/ui/components/error"
import { ButtonWithIcon } from "@/ui/buttons/buttons";

export const ProductsContainer = ()=> {

    const [categoryName,setCategoryName] = useState('all');
    const [subcategoryName,setSubcategoryName] = useState('all');
    const [products,setProducts] = useState([]);
    const [allResults,setAllResults] = useState(0);
    const [isLoading,setIsLoading] = useState(false);
    const [isLoadingMore,setIsLoadingMore] = useState(false);
    const [error,setError] = useState(null);
    const [page,setPage] = useState(1);

    const handleFetch = useCallback((page,isLoadMore = false)=> {

        if(isLoadMore){
            setIsLoadingMore(true);
        }else {
            setIsLoading(true);
            setPage(1)
        };

        setError(null);

        fetchData(`admin/products?category=${categoryName}&sub=${subcategoryName}&page=${page}`)
        .then((data)=> {
            if(isLoadMore) {
                setProducts(prev => [...prev,...data?.products]);
            }else {
                setProducts(data?.products)
            }
            setAllResults(data?.count)
        })
        .catch((error)=> {
            setError(error)
        })
        .finally(()=> {
            setIsLoading(false);
            setIsLoadingMore(false)
        })
    },[categoryName,subcategoryName])

    useEffect(()=> {
        handleFetch(1);
    },[handleFetch]);

    const handleLoadMore = ()=> {
        setPage(page + 1);
        handleFetch(page + 1,true);
    }

    return (
        <div className="">
            {
                isLoading ? <Loading /> : null
            }
            <Navbar 
                categoryName={categoryName} 
                setCategoryName={setCategoryName} 
                setSubcategoryName={setSubcategoryName}
                subcategoryName={subcategoryName}
                />
            {
                 !!error ? <Error onClick={()=> handleFetch(page)} /> :
                <section className="">
                    <h6 className="text-lg font-bold text-gray-500 capitalize flex items-center gap-2">
                        <TbAdjustmentsSearch /> all results {allResults}
                    </h6>
                    {
                        products?.map((product)=> (
                            <ProductCard 
                                key={product?.id} 
                                product={product} 
                                setProducts={setProducts} 
                                />
                        ))
                    }
                    {
                        products?.length < allResults &&
                        <div className="max-w-[150px] mx-auto">
                            <ButtonWithIcon 
                                text='laod more' 
                                Icon={LiaTruckLoadingSolid} 
                                type='save'
                                onClick={handleLoadMore}
                                disabled={isLoadingMore}
                                />

                        </div>
                    }
                </section>

            }
        </div>
    )
};