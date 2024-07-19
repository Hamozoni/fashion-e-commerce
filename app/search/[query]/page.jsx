"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import {fetchData} from '../../../lip/fetchData'


const SearchPage = ()=> {

    const [data,setData]= useState([]);
    const [error,setError]= useState(null);
    const [isLoading,setIsLoading]= useState(false);
    const searchParams = useSearchParams();

    const searchQuery = searchParams.get('query');

    useEffect(()=> {
        setError(null);
        setIsLoading(true);
        fetchData(`search/:${searchQuery}`)
        .then((data)=> {
            setData(data);
            console.log(data)
        })
        .catch((error)=> {
            setError(error);
            console.log(error);
        })
        .finally(()=> {
            setIsLoading(false);
        })
    },[searchQuery]);


    return (
        <div className="">
            
        </div>
    )
}

export default SearchPage;