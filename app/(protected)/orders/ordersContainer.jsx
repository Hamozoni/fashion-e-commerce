"use client";

import { useContext, useEffect, useState } from "react";
import {AppContext} from "../../contextProvider";
import {fetchData} from "../../../lip/fetchData";
import Loading from "../../loading";
import { CartItemsCard } from "../../../ui/cards/cartItemsCard";

import { OrderSummary } from "./orderSummary";

export const OrdersContainer = ()=> {

    const [orders,setOrders] = useState([]);
    const [address,setAddress] = useState({});
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError] = useState(null);

    const {currentUser: {id}} = useContext(AppContext);


    useEffect(()=> {
        setIsLoading(true);

        fetchData(`orders?userId=${id}`)
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

    const className = {
        title_1: "text-teal-950 dark:text-teal-50 text-lg font-bold mb-2",
        title_2: "text-teal-900 dark:text-teal-100 text-sm font-bold mb-2",
    }

    return (
        <div className="">
            {
              orders?.map(({id,createdAt,products, deliveryFree,totalPaidInCent}) => (
                <div key={id} className=" capitalize mb-5">
                    <header className="md:flex items-center justify-between">
                       <h4 className={className.title_2}
                           >order ID : <small>{id}</small>
                        </h4>
                        <div className=" flex items-center gap-4">
                                <h6 className={className.title_2}
                                    > order date :  
                                    <small>{ "  " + new Date(createdAt).toDateString()}</small>
                                </h6>
                                <h6 className={className.title_2}>stimated dilevry : 
                                   <small>
                                        {new Date(new Date(createdAt).setDate(new Date(createdAt).getDate() + 3)).toDateString()}
                                    </small>
                                </h6>
                        </div>
                       </header>
                       <h6 className={className.title_1}
                            >items: {products?.length}
                        </h6>
                       <div className="md:flex items-start gap-5">
                            <div className="">
                                {
                                    products.map((product)=> (
                                        <CartItemsCard 
                                                key={product.cartId} 
                                                product={product} 
                                                isOrdered={true} 
                                                />
                                    ))
                                }
                            </div>
                            <OrderSummary 
                                address={address} 
                                data={{deliveryFree,totalPaidInCent}} 
                                />
                       </div>
                </div>
              ))  
            }
             
        </div>
    )
}