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
            {
              orders?.map(order => (
                <div key={order.id} className="">
                    <header>
                       <h4>order id : {order.id}</h4>
                       <div className="">
                            <h6> order date : <time datetime={order.createdAt}></time></h6>
                            <h6>stimated dilevry : {Date(order.createdAt + 1000 * 60 * 60 * 60 * 24 * 3)}</h6>
                       </div>
                       <div className="">
                           {
                               order.products.map((item)=> (
                                  <OrderCard key={item.cartId} />
                               ))
                           }
                       </div>
                    </header>

                </div>
              ))  
            }
             
        </div>
    )
}