"use client"

import {useEffect, useState } from "react";
import { fetchData } from "../../../../lip/fetchData";
import {OrdersStatusChart} from "./ordersStatusChart";
import Loading from "../loading";
import { Error } from "../../../../ui/components/error";

const now = new Date();
const orderSummaryNav = [
    {
        name: 'week',
        date: new Date(now.getFullYear(),now.getMonth(),now.getDay() - 7)
    },
    {
        name: 'month',
        date: new Date(now.getFullYear(),now.getMonth() - 1,now.getDay())
    },
    {
        name: 'year',
        date: new Date(now.getFullYear() - 1,now.getMonth(),now.getDay())
    }
];

export const OrderStatus = () => {

    const [filteredBy,setFilteredBy] = useState({...orderSummaryNav[2]});
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


    if(isLoading) return <Loading />

    if(error) return <Error onClick={handleFetchStatus}/>



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
        <section className="mt-5">
            <header className=" capitalize flex items-center justify-between" >
               <h4 className=" text-lg font-bold text-teal-950 dark:text-teal-50">
                    orders summary
                </h4>
               <nav>
                   <ul className="flex items-center gap-1 bg-gray-100 dark:bg-stone-900 p-1 rounded-md">
                      {
                        orderSummaryNav?.map(({name,date})=> (
                            <li 
                                 key={name}
                                onClick={()=> setFilteredBy({name,date})}
                                className={`${filteredBy?.name == name ? 'bg-white dark:bg-black' :'hover:bg-gray-50 dark:hover:bg-stone-950'} text-sm font-bold text-teal-900 dark:text-teal-100 px-4 cursor-pointer py-1 rounded-md`}>
                                {name}
                            </li>
                        ))
                    }
                   </ul>
               </nav>
            </header>
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
        </section>
    )
}