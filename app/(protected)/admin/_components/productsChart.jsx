"use client";

import { useState } from "react";
import { useEffect } from "react";
import {fetchData} from "@/lip/fetchData";
import  Loading  from "../loading";
import { Error } from "@/ui/components/error";
import {DoughnutChart} from "../_charts/doughnut"

export const  ProductsChart = ()=> {

    const [productsData,setProductsData] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError] = useState(null);


    const handleFetch = ()=> {
        setError(null)
        setIsLoading(true);
        fetchData('admin/products/sectionsQuantity')
        .then((data)=> {
            setProductsData(data)
            console.log(data)
        })
        .catch((error)=> {
            setError(error)
        })
        .finally(()=> {
            setIsLoading(false)
        })
    }
    useEffect(()=> {
        handleFetch()
    },[]);

    if(isLoading) return <Loading />

    if(error) return <Error onClick={handleFetch} />

    return (
        <section className="p-3 rounded-md border border-teal-100 dark:border-stone-800 bg-teal-50 dark:bg-stone-950 my-8">
            <header>
                <h4 className="text-teal-950 dark:text-teal-50 text-lg font-bold capitalize">
                    products status
                </h4>
                <ul className="flex items-center gap-3 my-3">
                    {
                        productsData?.map(({name,products,items,quantity})=>(
                            <li 
                                className="flex-grow text-center p-3 rounded-md bg-white dark:bg-black capitalize"
                                key={name}>
                                <h4 className="text-teal-950 dark:text-teal-50 text-lg font-bold mb-2">{name}</h4>
                                <h6 className="text-xs font-bold text-gray-500">products {products || 0}</h6>
                                <h6 className="text-xs font-bold text-gray-500">items {items || 0}</h6>
                                <h6 className="text-xs font-bold text-gray-500">quantity {quantity || 0}</h6>
                            </li>
                        ))
                    }
                </ul>

            </header>
            <div className="sm:flex items-center gap-3">
                <DoughnutChart
                    labels={['men','women','kids']}
                    chartData={productsData?.map(e=> e.products)}
                    bgColors={['#ffc10770','#ff572287','#00968896']}
                    text='Products'
                 />
                   <DoughnutChart
                    labels={['men','women','kids']}
                    chartData={productsData?.map(e=> e.items)}
                    bgColors={['#00968896','#ffc10770','#ff572287']}
                    text='Items'
                 />
                 <DoughnutChart
                    labels={['men','women','kids']}
                    chartData={productsData?.map(e=> e.quantity)}
                    bgColors={['#ff572287','#00968896','#ffc10770']}
                    text='Quantity'
                 />
            </div>
        </section>
    )
}