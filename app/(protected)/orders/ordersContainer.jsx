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

    return (
        <div className="">
            {
              orders?.map(({id,createdAt,products, deliveryFree,totalPaidInCent}) => (
                <div key={id} className="">
                    <header className="capitalize">
                       <h4 className="text-teal-900 dark:text-teal-100 text-lg font-bold" 
                           >order ID : <small>{id}</small>
                        </h4>
                       <div className=" flex items-center gap-8">
                            <h6 className="text-sm font-bold text-teal-900 dark:text-teal-100"
                                > order date : 
                                <time datetime={createdAt}>{new Date(createdAt).toDateString()}</time>
                            </h6>
                            <h6 className="text-sm font-bold text-teal-900 dark:text-teal-100">stimated dilevry : 
                                {new Date(new Date(createdAt).setDate(new Date(createdAt).getDate() + 3)).toDateString()}</h6>
                       </div>
                       <h6 className="text-lg font-bold text-teal-900 dark:text-teal-100"
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
                        <div className="">
                            <div className="">
                                <h5>delivery </h5>
                                <div className="">
                                    <p> address:  {address?.neighborhood}</p>
                                    <address>{address?.formatedAddress}</address>
                                </div>
                                <p>delivery fee: {deliveryFree === 0 ? 'free': getCurrency(deliveryFree)}</p>
                            </div>
                            <div className="">
                                <h5>order summary</h5>
                                <div className="">
                                    <div className="">
                                        <h6>subtotal:</h6>
                                        <h5>{getCurrency(totalPaidInCent - (totalPaidInCent / 100) * 15)}</h5>
                                    </div>
                                    <div className="">
                                        <h6>delivery fee:</h6>
                                        <h5>{deliveryFree === 0 ? 'free': getCurrency(deliveryFree)}</h5>
                                    </div>
                                    <div className="">
                                        <h6>tax:</h6>
                                        <h5>{getCurrency((totalPaidInCent / 100) * 15)}</h5>
                                    </div>
                                    <div className="">
                                        <h6>totla:</h6>
                                        <h5>{getCurrency(totalPaidInCent)}</h5>
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