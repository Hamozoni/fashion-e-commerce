"use client";

import { useState } from "react";
import { useEffect } from "react";
import {fetchData} from "../../../../../lip/fetchData";
import { Loading } from "../../../../../ui/models/Loading";
import { Error } from "../../../../../ui/components/error";
import {DoughnutChart} from "../../_charts/doughnut"

export const  Navbar = ()=> {

    const [sectionsData,setSectionData] = useState([]);
    const [sectionsFilteredData,setSectionsFilteredData] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError] = useState(null);


    const handleFetch = ()=> {
        setIsLoading(true);
        fetchData('admin/products/sectionsQuantity')
        .then((data)=> {
            setSectionData(data);
            const filterdData = data.filter(e=> e.name !== 'all')
            setSectionsFilteredData(filterdData)
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
        <header className="flex items-start gap-3">
            <nav className="flex-1">
                <ul className="flex items-center gap-3 overflow-x-auto w-full">
                   {
                      sectionsData?.map(({name,items,quantity,products})=> (
                        <li 
                            className="p-3 cursor-pointer rounded-md flex-1 flex-grow text-center bg-gray-50 border border-teal-200  capitalize min-w-fit font-bold"
                            key={name}>
                                <h5 className="text-lg text-teal-950 mb-2">{name}</h5>
                            </li>
                      ))
                   }
                </ul>
            </nav>
            <div className="max-[120px]">
                <DoughnutChart
                    labels={['men','women','kids']}
                    chartData={sectionsFilteredData?.map(e=> e.products)}
                    bgColors={['#ffc10770','#ff572287','#00968896']}
                    text='Products'
                 />
                   <DoughnutChart
                    labels={['men','women','kids']}
                    chartData={sectionsFilteredData?.map(e=> e.items)}
                    bgColors={['#00968896','#ffc10770','#ff572287']}
                    text='Items'
                 />
                 <DoughnutChart
                    labels={['men','women','kids']}
                    chartData={sectionsFilteredData?.map(e=> e.quantity)}
                    bgColors={['#ff572287','#00968896','#ffc10770']}
                    text='Quantity'
                 />
            </div>
        </header>
    )
}