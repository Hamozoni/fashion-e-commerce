"use client"
import { fetchData } from "../../../lip/fetchData"
import { Error } from "../../../ui/components/error";
import Loading from "./loading";
import { createContext, useEffect, useState } from "react"

export const OverviewContext  = createContext();


export const OverviewContextProvider = ({children})=> {
    const [overviewData,setOverviewData] = useState({});
    const [isLoading,setIsLoading] = useState(false);
    const [errors,setErrors] = useState(null);

    const fetchOverviewData = ()=> {
        setIsLoading(true);
        setErrors(null);

        fetchData('admin/overview')
        .then((data)=> {
            setOverviewData(data);
            console.log(data)
        })
        .catch((error)=> {
            setErrors(error)
        })
        .finally(()=> {
            setIsLoading(false)
        })
    }

    useEffect(()=> {
        fetchOverviewData();
    },[]);

    if(isLoading) return <Loading />

    if(errors) return <Error onClick={fetchOverviewData} />

    return (
        <OverviewContext.Provider value={{overviewData}}>
            {children}
        </OverviewContext.Provider>
    )
}