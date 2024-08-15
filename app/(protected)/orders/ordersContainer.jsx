"use client";

import { useContext, useEffect, useState } from "react";
import {AppContext} from "../../contextProvider";
import {fetchData} from "@/lip/fetchData";
import Loading from "../../loading";
import { OrderCard } from "./orderCard";
import { useSearchParams } from "next/navigation";

export const OrdersContainer = ()=> {

    const [orders,setOrders] = useState([]);
    const [count,setCount] = useState(0);
    const [address,setAddress] = useState({});
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError] = useState(null);

    const searchParams = useSearchParams();
    const orderStatus = searchParams.get('status')

    const {currentUser: {id}} = useContext(AppContext);


    useEffect(()=> {
        setIsLoading(true);

        fetchData(`orders/customer?userId=${id}&status=${orderStatus || 'all'}`)
        .then((data)=> {

            console.log(data);
            setCount(data?.count)
            setAddress(data.address)
            setOrders(data.orders);
        })
        .catch((error)=> {

            setError(error);
            console.log(error)
        })
        .finally(()=> {
            setIsLoading(false)
        })
    },[id,orderStatus]);

    if(isLoading) return <Loading />

    if(error) return <p>error</p>

    return (
        <section className=" capitalize">
            <h5 className="text-gray-400 mb-2 font-bold text-sm">
               all resuls {count}
            </h5>
            <div className="">
                {
                orders?.map((order) => (
                    <OrderCard id={order?.id} order={order} address={address}/>
                ))  
                }

            </div>   
        </section>
    )
}