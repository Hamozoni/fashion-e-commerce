"use client"

import {useContext, useEffect, useState } from "react";
import { fetchData } from "../../../../lip/fetchData";
import {LineChart} from "../_charts/line";
import Loading from "../loading";
import { Error } from "../../../../ui/components/error";
import {SummaryFilter} from "./summaryFilter";
import {ordersStatusFilterDates} from "../../../../data/filteringDates"

export const OrderStatus = () => {

    const [filteredBy,setFilteredBy] = useState(ordersStatusFilterDates[2]);
    const [ordersData,setOrdersData] = useState({});
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError] = useState(null);


    const handleFetchStatus = ()=> {
        setIsLoading(true);
        setError(null);
        fetchData(`admin/ordersStatus?date=${filteredBy?.date}`)
        .then((data)=> {
            console.log(data)
            setOrdersData(data);
        })
        .catch((error)=> {
            setError(error)
        })
        .finally(()=> {
            setIsLoading(false);
        })
    };

    useEffect(()=> {
        handleFetchStatus()
    },[filteredBy]);

    const ordersStatusSammary = [
        {
            name: 'pending',
            data: ordersData?.pending,
        },
        {
            name: 'prossing',
            data: ordersData?.processing
        },
        {
            name: 'compeletaed',
            data:  ordersData?.completed,
        },
        {
            name: 'canceled',
            data:  ordersData?.canceled
        },
    ]


    return (
        <section className="p-3 rounded-md bg-teal-50 dark:bg-stone-950 border border-teal-100 dark:border-stone-900">
            <SummaryFilter
               data={ordersStatusFilterDates}
               setFilteredBy={setFilteredBy}
               filteredBy={filteredBy}
               title='orders status'
             />
           { 
              isLoading ? 
                <div className="max-h-[300px]"><Loading /> </div>
                : error ? <Error onClick={handleFetchStatus}/> :
             <div className="">
                <ul className="flex items-center gap-3 capitalize my-4 overflow-x-auto">
                    {
                        ordersStatusSammary?.map(({name,data})=> (
                            <li 
                                className={`${name === 'canceled' ? 'bg-rose-200 text-rose-900' : name === 'pending' ? 'bg-yellow-100 text-yellow-900' : name === 'compeletaed' ? 'bg-green-100 text-green-900' : 'bg-blue-100 text-blue-900'} text-center text-lg font-bold flex-grow p-3 rounded-md cursor-pointer hover:scale-105`}
                                key={name}>
                                {data + " " + name}
                            </li>
                        ))
                    }
                </ul>
                <LineChart 
                labels={['pending','prossing','completed','canceled']}
                ChartData={[ordersData?.pending,ordersData?.processing,ordersData?.completed,ordersData?.canceled]}
                bgColors={['#00968896','#ffc10770','#ff572287']}
                text='Orders Status'
                 />
            </div>
          }
        </section>
    )
}