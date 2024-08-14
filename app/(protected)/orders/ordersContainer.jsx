"use client";

import { useContext, useEffect, useState } from "react";
import {AppContext} from "../../contextProvider";
import {fetchData} from "@/lip/fetchData";
import Loading from "../../loading";
import { OrderCard } from "./orderCard";

export const OrdersContainer = ()=> {

    const [orders,setOrders] = useState([]);
    const [address,setAddress] = useState({});
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError] = useState(null);

    const {currentUser: {id}} = useContext(AppContext);


    useEffect(()=> {
        setIsLoading(true);

        fetchData(`orders/customer?userId=${id}`)
        .then((data)=> {

            console.log(data);
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
    },[id]);

    if(isLoading) return <Loading />

    if(error) return <p>error</p>

    return (
        <div className="">
            {
              orders?.map((order) => (
                <OrderCard id={order?.id} order={order} address={address}/>
              ))  
            }
             
        </div>
    )
}