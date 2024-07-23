"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import {fetchData} from '../../lip/fetchData';
import {Loading} from "../../components/Loading";
import {ProductCard} from "../../ui/cards/productCard";

const SearchPage = ()=> {

    const [data,setData]= useState([]);
    const [error,setError]= useState(null);
    const [isLoading,setIsLoading]= useState(false);
    const searchParams = useSearchParams();

    const searchQuery = searchParams.get('query');

    console.log(searchQuery);

    useEffect(()=> {
        setError(null);
        setIsLoading(true);
        fetchData(`search?query=${searchQuery}`)
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
        <div className="min-h-screen p-3 lg:px-8">
            {
                isLoading ? <Loading /> : null
            }
            <header className="mb-4 mt-3">
                <h3 className="text-xl font-bold text-teal-950 capitalize">search results: {data?.length}</h3>
            </header>
            <div className="flex flex-wrap gap-5 justify-center">
                {
                    data?.map((product)=> (
                        <ProductCard product={product} />
                    ))
                }
            </div>
        </div>
    )
}

export default SearchPage;