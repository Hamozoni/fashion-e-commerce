"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import {fetchData} from "../../lip/fetchData";

import Loading from "../../app/loading";
import { ProductCard } from "../productCard/ProductCard";
import { ButtonWithIcon } from "../../components/buttons";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";

import {ScrollLeft,ScrollRight} from "../../components/scrollingBotton"
import { PulseLoader } from "react-spinners";

export const Products = ({category,page,onClick})=> {

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

        const scrollEnds = (e.target.children.length * 240) - (e.target.scrollLeft + e.target.clientWidth)
        setLeftScroll(e.target.scrollLeft);
        setLeftScrollEnds(scrollEnds)
    };


    const scrollRight = ()=> {
        productsContainerRef.current.scrollBy({
            top: 0,
            left: 220,
            behavior: 'smooth'
        });
    };

    const scrollLeft = ()=> {
        productsContainerRef.current.scrollBy({
            top: 0,
            left: -220,
            behavior: 'smooth'
        });
    };


    return (
        <section className="p-3 lg:px-8 mb-10">
            <h4 className="text-2xl capitalize text-teal-950 font-bold mb-8">products for {category} may you like : </h4>
            <div className="relative lg:px-[40px]">
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
                                {
                                    isLoadingMore ? <PulseLoader /> :
                                    <button
                                        onClick={onClick} 
                                        className=" capitalize text-xl text-teal-950 font-bold"
                                            >load more
                                    </button>
                                }
                            </div>
                            : null
                        }
                    </div>
                }
                <ScrollLeft 
                    onClick={scrollLeft} 
                    leftScroll={leftScroll}
                    />
                <ScrollRight 
                    onClick={scrollRight}
                    leftScrollEnds={leftScrollEnds}
                    />
            </div>
            <div  className=" w-[120px] mx-auto mt-4">
                <Link href={`/category?category=${category}`}>
                    <ButtonWithIcon 
                        text='see all' 
                        Icon={IoIosArrowDown}
                        type='primary'
                        onClick={()=> ''}
                    />
                </Link>

            </div>
        </section>
    )
}