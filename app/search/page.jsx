"use client";

import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
// icons
import { RiDownloadCloud2Fill } from "react-icons/ri";
// axios fetch
import {fetchData} from '../../lip/fetchData';
// components
import {Loading} from "../../ui/models/Loading";
import {ProductCard} from "../../ui/cards/productCard";
import { Error } from "../../ui/components/error";
import { ButtonWithIcon } from "../../ui/buttons/buttons";

const SearchPage = ()=> {

    const [data,setData]= useState([]);
    const [error,setError]= useState(null);
    const [count,setCount] = useState(0)
    const [page,setPage] = useState(1);
    const [isLoading,setIsLoading] = useState(false);
    const [isLoadingMore,setIsLoadingMore] = useState(false);

    const searchParams = useSearchParams();
    const searchQuery = searchParams.get('query');

    const fetchSearch = useCallback((isMore,page)=> {
        setError(null);
        if(isMore) {
            setIsLoadingMore(true)
        }else {
            setIsLoading(true);
        }
        fetchData(`search?query=${searchQuery}&page=${page}`)
        .then((data)=> {
            setData(data?.products);
            setCount(data?.count)
        })
        .catch((error)=> {
            setError(error);
        })
        .finally(()=> {
            setIsLoading(false);
            setIsLoadingMore(false)
        })

    },[searchQuery])

    useEffect(()=> {
        fetchSearch(false,1)
    },[fetchSearch]);


    return (
        <div className="min-h-screen p-3 lg:px-8">
            {
                isLoading ? <Loading /> 
                : error ? <Error onClick={()=> fetchSearch(false,page)}/> 
                :
                <div>
                    <header className="mb-4 mt-3">
                        <h3 className="text-xl font-bold text-teal-950 dark:text-teal-50 capitalize"
                        >all search results: {count}
                    </h3>
                    </header>
                    <div className="flex flex-wrap gap-5">
                        {
                            data?.map((product)=> (
                                <ProductCard key={product?.id} product={product} />
                            ))
                        }
                    </div>
                    {
                        count < data?.length ? 
                        <footer className="w-[140px] mx-auto my-5">
                            <ButtonWithIcon
                            text='load more'
                            type='primary'
                            Icon={RiDownloadCloud2Fill}
                            disabled={isLoadingMore}
                            onClick={()=> {
                                fetchSearch(true,page + 1)
                                setPage(page + 1);
                            }}
                            />
                        </footer>
                        : null
                    }
                </div>
             }
        </div>
    )
}

export default SearchPage;