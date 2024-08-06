"use client";

import { useState } from "react";
import { useEffect } from "react";
import {fetchData} from "../../../../../lip/fetchData";
import { Loading } from "../../../../../ui/models/Loading";
import { Error } from "../../../../../ui/components/error";

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
                <ul className="flex items-center gap-3 overflow-x-auto">
                   {
                      sectionsData?.map(({name,items,quantity})=> (
                        <li 
                            className="p-3 rounded-md flex-grow text-center bg-gray-50 border-gray-200  capitalize min-w-fit font-bold"
                            key={name}>
                                <h5 className="text-lg text-teal-950 mb-2">{name}</h5>
                                <h6 className="text-sm text-gray-600">{items || 0} item  
                                     <small>
                                       {Math.floor((items / sectionsData?.find(e=> e.name === 'all sections').items) * 100)}%
                                    </small>
                                </h6>
                                <h6 className="text-sm text-gray-600">{quantity || 0} quantity
                                    <small>
                                      {Math.floor((quantity / sectionsData?.find(e=> e.name === 'all sections').quantity) * 100)}%
                                    </small>
                                </h6>
                                 
                            </li>
                      ))
                   }
                </ul>
            </nav>
        </header>
    )
}