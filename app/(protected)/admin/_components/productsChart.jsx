"use client";

import { useState } from "react";
import { useEffect } from "react";
import {fetchData} from "../../../../lip/fetchData";
import { Loading } from "../../../../ui/models/Loading";
import { Error } from "../../../../ui/components/error";
import {DoughnutChart} from "../_charts/doughnut"

export const  ProductsChart = ()=> {

    const [productsData,setProductsData] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError] = useState(null);


    const handleFetch = ()=> {
        setIsLoading(true);
        fetchData('admin/products/sectionsQuantity')
        .then((data)=> {
            setProductsData(filterdData)
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
        <div className="">
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
        </div>
    )
}