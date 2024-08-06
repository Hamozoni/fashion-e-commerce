"use client"

import {useEffect, useState } from "react";
import { fetchData } from "../../../../lip/fetchData";
import {OrdersStatusChart} from "./ordersStatusChart";
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
            data: ordersData?.pendingOrders,
        },
        {
            name: 'prossing',
            data: ordersData?.processingOrders
        },
        {
            name: 'compeletaed',
            data:  ordersData?.completedOrders,
        },
        {
            name: 'canceled',
            data:  ordersData?.canceledOrders
        },
    ]


    return (
        <section className="flex-1">
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
                <OrdersStatusChart ordersData={ordersData}  />
            </div>
          }
        </section>
    )
}