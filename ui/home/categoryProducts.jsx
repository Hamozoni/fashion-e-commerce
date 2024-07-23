"use client";

import Link from "next/link";
import {useEffect, useRef, useState } from "react";
// fetch api
import {fetchData} from "../../lip/fetchData";
// loader
import Loading from "../../app/loading";
// components
import { ProductCard } from "../cards/productCard";
import { LoadMoreBtn, ScrollLeftBtn, ScrollRightBtn } from "../buttons/buttons";

export const CategoryProducts = ({category,page,onClick})=> {

    const [products,setProducts] = useState([]);
    const [isLoading,setisLoading] = useState(false);
    const [isLoadingMore,setIsLoadingMore] = useState(false);
    const [isThereMoreData,setIsThereMoreData] = useState(true);
    const [error,setError] = useState(null);

    const [leftScroll,setLeftScroll] = useState(0)
    const [leftScrollEnds,setLeftScrollEnds] = useState(200);

    useEffect(()=> {
        if (products.length > 0) {
            setIsLoadingMore(true)
        }else {
            setisLoading(true);
        }
        fetchData(`products/category?category=${category}&page=${page}`)
        .then((data)=> {
            if(data?.length > 0) {
                setProducts(prev => [...prev,...data]);
            }else {
                setIsThereMoreData(false)
            }
            console.log(data);
            setError(null);
        })
        .catch((error)=> {
            setError(error);
        })
        .finally(()=> {
             setisLoading(false);
             setIsLoadingMore(false)
        });
    },[category,page]);



    const productsContainerRef = useRef();


    const handleScroll = (e)=> {

        const scrollEnds = (e.target.children.length * 235) - (e.target.scrollLeft + e.target.clientWidth);

        console.log(scrollEnds)
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
            <header className="flex items-center justify-between mb-8">
                 <h4 
                    className=" text-lg sm:text-xl capitalize text-teal-950 font-bold "
                    >for {category} may you like : 
                </h4>

                <Link 
                    className="text-sm capitalize text-teal-800 font-bold hover:text-teal-700"
                    href={`/category?category=${category}`}>
                     see all
                </Link>

            </header>
            <div className="relative">
                {
                    isLoading ? <Loading /> : 
                    <div onScroll={handleScroll} ref={productsContainerRef} className="flex gap-5 overflow-x-auto">
                        {
                            products?.map((product)=> (
                                <ProductCard key={product.id} product={product} />
                            ))
                        }

                        {
                            isThereMoreData ? 
                            <div className="min-w-[200px] min-h-full flex items-center justify-center">
                                <LoadMoreBtn 
                                    isLoadingMore={isLoadingMore} 
                                    onClick={onClick}
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