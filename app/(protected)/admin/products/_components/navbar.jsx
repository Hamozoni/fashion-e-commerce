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
        <header>
            <div className="sm:flex items-center gap-3 justify-center mb-3">
                <DoughnutChart
                    labels={['men','women','kids']}
                    chartData={sectionsFilteredData?.map(e=> e.products)}
                    bgColors={['#00968896','#ff572287','#ffc10770']}
                    text='Products'
                 />
                   <DoughnutChart
                    labels={['men','women','kids']}
                    chartData={sectionsFilteredData?.map(e=> e.items)}
                    bgColors={['#00968896','#ff572287','#ffc10770']}
                    text='Items'
                 />
                 <DoughnutChart
                    labels={['men','women','kids']}
                    chartData={sectionsFilteredData?.map(e=> e.quantity)}
                    bgColors={['#00968896','#ff572287','#ffc10770']}
                    text='Quantity'
                 />
            </div>
            <nav>
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
        </header>
    )
}