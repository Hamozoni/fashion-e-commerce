"use client"
import { fetchData } from "../../../lip/fetchData"
import { Error } from "../../../ui/components/error"
import { createContext, useEffect, useState } from "react"

export const overviewContext  = createContext();


export const OverviewContextProvider = ({children})=> {
    const [overviewData,setOverviewData] = useState({});
    const [isLoading,setIsLoading] = useState(false);
    const [errors,setErrors] = useState(null);

    const fetchOverviewData = ()=> {
        setIsLoading(true);
        setErrors(null);

        fetchData('admin/overview')
        .then((data)=> {
            console.log(data);
        })
        .catch((error)=> {
            console.log(error)
        })
    }

    useEffect(()=> {
        fetchOverviewData();
    },[]);

    return (
        <overviewContext.Provider >
            {children}
        </overviewContext.Provider>
    )
}