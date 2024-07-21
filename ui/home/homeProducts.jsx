"use client";

import { useEffect, useRef, useState } from "react";
import {fetchData} from "../../lip/fetchData";

import Loading from "../../app/loading";
import { ProductCard } from "../productCard/ProductCard";
import { ButtonWithIcon } from "../../components/buttons";
import { HiOutlinePlusSmall } from "react-icons/hi2";
import Link from "next/link";

import {ScrollLeft,ScrollRight} from "../../components/scrollingBotton"

export const HomeProducts = ({category})=> {

    const [products,setProducts] = useState([]);
    const [isLoading,setisLoading] = useState(false);
    const [error,setError] = useState(null)

    useEffect(()=> {
        setisLoading(true)
        fetchData(`products/category?category=${category}&page=1`)
        .then((data)=> {
            setProducts(data);
            console.log(data);
            setError(null);
        })
        .catch((error)=> {
            setError(error);
        })
        .finally(()=> {
             setisLoading(false)
        })
    },[category]);



    const productsContainerRef = useRef();

    const scrollLeft = ()=> {
        productsContainerRef.current.scrollBy({
            top: 0,
            left: 220,
            behavior: 'smooth'
        })
    };

    const scrollRight = ()=> {
        productsContainerRef.current.scrollBy({
            top: 0,
            left: -220,
            behavior: 'smooth'
        })
    };


    return (
        <section className="p-3 lg:px-8 mb-10">
            <h4 className="text-2xl capitalize text-teal-950 font-bold mb-8">products for {category} may you like : </h4>
            <div className="relative lg:px-[40px]">
                {
                    isLoading ? <Loading /> : 
                    <div ref={productsContainerRef} className="flex gap-5 overflow-x-auto">
                        {
                            products?.map((product)=> (
                                <ProductCard key={product.id} product={product} />
                            ))
                        }
                        <div className="min-w-[150px] min-h-full flex items-center justify-center">
                            <button className=" capitalize text-xl text-teal-950 font-bold">load more</button>
                        </div>
                    </div>
                }
                <ScrollLeft onClick={scrollLeft} />
                <ScrollRight onClick={scrollRight} />
            </div>
            <div  className=" w-[120px] mx-auto mt-4">
                <Link href={`/category?category=${category}`}>
                    <ButtonWithIcon 
                        text='see all' 
                        Icon={HiOutlinePlusSmall}
                        type='primary'
                        onClick={()=> ''}
                    />
                </Link>

            </div>
        </section>
    )
}