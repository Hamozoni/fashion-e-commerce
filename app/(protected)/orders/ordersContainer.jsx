"use client";

import { useContext, useEffect, useState } from "react";
import {AppContext} from "../../contextProvider";
import {fetchData} from "../../../lip/fetchData";
import Loading from "../../loading";

export const OrdersContainer = ()=> {

    const [orders,setOrders] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError] = useState(null);

    const {currentUser: {id}} = useContext(AppContext);


    useEffect(()=> {
        setIsLoading(true);

        fetchData(`orders?userId=${id}`)
        .then((data)=> {

            console.log(data)
        })
        .catch((error)=> {
            console.log(error)
        })
        .finally(()=> {
            setIsLoading(false)
        })
    },[id]);

    if(isLoading) return <Loading />

    return (
        <div className="">
             
        </div>
    )
}