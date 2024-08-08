"use client";

import { useState } from "react";
import { useEffect } from "react";
import {fetchData} from "../../../../../lip/fetchData";
import { Loading } from "../../../../../ui/models/Loading";
import { Error } from "../../../../../ui/components/error";
import {DoughnutChart} from "../../_charts/doughnut"

export const  Navbar = ()=> {

    const [sectionsData,setSectionData] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError] = useState(null);


    const handleFetch = ()=> {
        setIsLoading(true);
        fetchData('admin/products/sectionsQuantity')
        .then((data)=> {
            setSectionData(data)
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
            <nav>
                <ul className="flex items-center gap-3 overflow-x-auto w-full">
                   {
                      sectionsData?.map(({name,items,quantity,products})=> (
                        <li 
                            className="p-3 cursor-pointer rounded-md flex-1 flex-grow text-center bg-gray-50 border border-teal-200  capitalize min-w-fit font-bold"
                            key={name}>
                                <h5 className="text-lg text-teal-950 mb-2">{name}</h5>
                                <h6 className="text-sm text-gray-600">{products || 0} products  
                                     <small className="px-2">
                                       {Math.floor((products / sectionsData?.find(e=> e.name === 'all').products) * 100)}%
                                    </small>
                                </h6>
                                <h6 className="text-sm text-gray-600">{items || 0} item  
                                     <small className="px-2">
                                       {Math.floor((items / sectionsData?.find(e=> e.name === 'all').items) * 100)}%
                                    </small>
                                </h6>
                                <h6 className="text-sm text-gray-600">{quantity || 0} quantity
                                    <small className="px-2">
                                      {Math.floor((quantity / sectionsData?.find(e=> e.name === 'all').quantity) * 100)}%
                                    </small>
                                </h6>
                                 
                            </li>
                      ))
                   }
                </ul>
            </nav>
            <div className="">
                {/* <DoughnutChart /> */}
            </div>
        </header>
    )
}