"use client";

import { useEffect, useState } from "react";
import {SummaryFilter} from "./summaryFilter";
import {revenueFilterDates} from "../../../../data/filteringDates"
import { fetchData } from "../../../../lip/fetchData";
import {BarChart, RevenueChart} from "../_charts/bar";
import Loading from "../loading";
import { Error } from "../../../../ui/components/error";
import { getCurrency } from "../../../../lip/getCurrency";


export const RevenueSummary = ()=> {
    const [filteredBy,setFilteredBy] = useState(revenueFilterDates[3]);
    const [revenueData,setRevenueData] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError] = useState(null);

    const handleFetchRevenue = ()=> {
        setIsLoading(true);
        fetchData(`admin/revenue?dates=${JSON.stringify(filteredBy?.date)}`)
        .then((data)=> {
            console.log(data);
            setRevenueData(data)
        })
        .catch((error)=> {
            setError(error);
        })
        .finally(()=> {
            setIsLoading(false)
        })
    }
    useEffect(()=> {
        handleFetchRevenue();
    },[filteredBy]);


    return (
        <section className="mt-8 p-3 rounded-md bg-teal-50 dark:bg-stone-950 border border-teal-100 dark:border-stone-900">
            <SummaryFilter 
                data={revenueFilterDates}
                title='revenue' 
                filteredBy={filteredBy} 
                setFilteredBy={setFilteredBy} 
            />
            {
                isLoading ? 
                <div className="max-w-[300px]">
                    <Loading />
                </div>
                : error ? <Error onClick={handleFetchRevenue} />
                :<div className="mt-5">
                    <ul className="flex gap-3 items-center overflow-x-auto capitalize">
                        {  
                            revenueData?.map(({name,revenue})=> (
                                <li 
                                    className="p-2 bg-white dark:bg-black rounded-md text-center flex-grow"
                                    key={name}
                                    >
                                    <h4 className="text-teal-950 dark:text-teal-50 text-lg font-bold">
                                        {getCurrency(revenue || 0)}
                                    </h4>
                                    <h6 className="text-teal-900 dark:text-teal-100 text-sm font-bold">
                                        {name}
                                    </h6>
                                </li>
                            ))
                        }
                    </ul>
                    <BarChart 
                        chartData={revenueData?.map( e => (e?.revenue / 100) || 0)}
                        labels={revenueData?.map( e => e?.name)}
                        text='Revenue Status'
                        bgColors={['#00968896','#ffc10770','#ff572287']}
                    />
                </div>
            }
        </section>
    )
}