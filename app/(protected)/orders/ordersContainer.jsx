"use client";

import { useContext, useEffect, useState } from "react";
import {AppContext} from "../../contextProvider";
import {fetchData} from "../../../lip/fetchData";
import Loading from "../../loading";
import { CartItemsCard } from "../../../ui/cards/cartItemsCard";

export const OrdersContainer = ()=> {

    const [orders,setOrders] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError] = useState(null);

    const {currentUser: {id}} = useContext(AppContext);


    useEffect(()=> {
        setIsLoading(true);

        fetchData(`orders?userId=${id}`)
        .then((data)=> {

            console.log(data);
            setOrders(data);
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
              orders?.map(({id,createdAt,products}) => (
                <div key={id} className="">
                    <header>
                       <h4>order id : {id}</h4>
                       <div className="">
                            <h6> order date : <time datetime={createdAt}>{createdAt}</time></h6>
                            <h6>stimated dilevry : {Date(createdAt + 1000 * 60 * 60 * 60 * 24 * 3)}</h6>
                       </div>
                       <h6>items: {products?.length}</h6>
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
                    </header>

                </div>
              ))  
            }
             
        </div>
    )
}