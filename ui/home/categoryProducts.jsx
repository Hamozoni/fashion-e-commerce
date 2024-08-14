"use client";

import Link from "next/link";
import {useCallback, useEffect, useRef, useState } from "react";
// fetch api
import {fetchData} from "@/lip/fetchData";
// loader
import Loading from "@/app/loading";
// components
import { ProductCard } from "../cards/productCard";
import { LoadMoreBtn, ScrollLeftBtn, ScrollRightBtn } from "../buttons/buttons";
import { Error } from "../components/error";

export const CategoryProducts = ({category})=> {

    const [products,setProducts] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [isLoadingMore,setIsLoadingMore] = useState(false);
    const [IsError,setIsError] = useState(null);
    const [count,setCount] = useState(0);

    const [page,setPage] = useState(1);

    const [leftScroll,setLeftScroll] = useState(0)
    const [leftScrollEnds,setLeftScrollEnds] = useState(200);

    const handleFetchCategory = useCallback((isMore,page)=> {

        if(isMore) {
            setIsLoading(true);
        }else {
            setIsLoading(true);
        }

        setIsError(null);
        fetchData(`products/category?category=${category}&page=${page}`)
        .then((data)=> {
            setCount(data.count)
            if (isMore) {
                setProducts(prev=> [...prev,...data.products]);
            }else {
                setProducts(data.products);
            };
        })
        .catch((error)=> {
            setIsError(error);
        })
        .finally(()=> {
             setIsLoading(false);
             setIsLoadingMore(false)
        });
    },[category])

    useEffect(()=> {
        handleFetchCategory(false,1)
    },[handleFetchCategory]);

    const productsContainerRef = useRef();

    const handleScroll = (e)=> {
        const scrollEnds = (e.target.children.length * 235) - (e.target.scrollLeft + e.target.clientWidth);
        setLeftScroll(e.target.scrollLeft);
        setLeftScrollEnds(scrollEnds)
    };

    const scrollRight = ()=> {
        productsContainerRef.current.scrollBy({
            top: 0,
            left: 440,
            behavior: 'smooth'
        });
    };

    const scrollLeft = ()=> {
        productsContainerRef.current.scrollBy({
            top: 0,
            left: -440,
            behavior: 'smooth'
        });
    };

    return (
        <section className="py-5">
            <header className="flex items-center justify-between mb-3">
                 <h4 
                    className=" text-lg sm:text-xl capitalize text-teal-950 dark:text-teal-50 font-bold "
                    >for {category} may you like : 
                </h4>

                <Link 
                    className="text-sm capitalize text-teal-800 dark:text-teal-100 font-bold hover:text-teal-700 dark:hover:text-teal-50"
                    href={`/category?category=${category}`}>
                     see all
                </Link>

            </header>
            <div className="relative">
                {
                    isLoading ? <Loading /> 
                    : IsError ? 
                    <Error onClick={()=>handleFetchCategory(false,page)} /> :
                    <div 
                        onScroll={handleScroll} 
                        ref={productsContainerRef} 
                        className="flex gap-5 overflow-x-auto py-6">
                        {
                            products?.map((product)=> (
                                <ProductCard key={product.id} product={product} />
                            ))
                        }

                        {
                            count <= products?.length ? 
                            <div className="min-w-[200px] min-h-full flex items-center justify-center">
                                <LoadMoreBtn 
                                    isLoadingMore={isLoadingMore} 
                                    onClick={()=> {
                                        handleFetchCategory(true,page + 1)
                                        setPage(page + 1)
                                    }}
                                   />
                            </div>
                            : null
                        }

                    </div>
                }

                <ScrollLeftBtn 
                    onClick={scrollLeft} 
                    leftScroll={leftScroll}
                    />
                <ScrollRightBtn 
                    onClick={scrollRight}
                    leftScrollEnds={leftScrollEnds}
                    />
            </div>
        </section>
    )
}