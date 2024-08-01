"use client";

import { useContext, useEffect, useState } from "react";
import {AppContext} from "../../contextProvider";
import {fetchData} from "../../../lip/fetchData";
import Loading from "../../loading";
import { CartItemsCard } from "../../../ui/cards/cartItemsCard";
import { getCurrency } from "../../../lip/getCurrency";

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
        title_1: "text-teal-950 dark:text-teal-50 text-lg font-bold",
        title_2: "text-teal-900 dark:text-teal-100 text-sm font-bold",
    }

    return (
        <div className="">
            {
              orders?.map(({id,createdAt,products, deliveryFree,totalPaidInCent}) => (
                <div key={id} className="">
                    <header className="capitalize">
                       <h4 className={className.title_1}
                           >order ID : <small>{id}</small>
                        </h4>
                       <div className=" flex items-center gap-8">
                            <h6 className={className.title_2}
                                > order date : 
                                <time datetime={createdAt}>{new Date(createdAt).toDateString()}</time>
                            </h6>
                            <h6 className={className.title_2}>stimated dilevry : 
                                {new Date(new Date(createdAt).setDate(new Date(createdAt).getDate() + 3)).toDateString()}
                            </h6>
                       </div>
                       <h6 className={className.title_1}
                            >items: {products?.length}
                        </h6>
                       <div className="">
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
                        <div className=" capitalize">
                            <div className="">
                                <h5 className={className.title_1} >delivery </h5>
                                <div className="">
                                    <p className={className.title_2}> 
                                        address:  <small>{address?.neighborhood}</small>
                                    </p>
                                    <address>{address?.formatedAddress}</address>
                                </div>
                                <p className={className.title_2}
                                    >delivery fee: {deliveryFree === 0 ? 'free': getCurrency(deliveryFree)}
                                </p>
                            </div>
                            <div className="">
                                <h5 className={className.title_1}>order summary</h5>
                                <div className="">
                                    <div className="flex items-center justify-between">
                                        <h6 className={className.title_2}>subtotal:</h6>
                                        <h5 className={className.title_2}>
                                            {getCurrency(totalPaidInCent - (totalPaidInCent / 100) * 15)}
                                        </h5>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <h6 className={className.title_2}>delivery fee:</h6>
                                        <h5 className={className.title_2}>
                                            {deliveryFree === 0 ? 'free': getCurrency(deliveryFree)}
                                        </h5>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <h6 className={className.title_2}>tax:</h6>
                                        <h5 className={className.title_2}>{getCurrency((totalPaidInCent / 100) * 15)}</h5>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <h6 className={className.title_1}>totla:</h6>
                                        <h5 className={className.title_1}>{getCurrency(totalPaidInCent)}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                       </div>
                    </header>

                </div>
              ))  
            }
             
        </div>
    )
}