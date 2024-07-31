"use client";

import { useContext, useEffect, useState } from "react";
import {useAppSelector} from "../../../../store/store";
import {PostData} from "../../../../lip/fetchData";
import {Loading} from "../../../../ui/models/Loading"
import { useSearchParams } from "next/navigation";
import {AppContext} from "../../../contextProvider"
 
 const successfulPayment = () => {

    const [error,setError] = useState(null);
    const [isLoading,setIsLoading] = useState();

    const totalPaidInCent = useAppSelector(state=> state.cart.totalPaid)
    const totalProductsQuantity = useAppSelector(state=> state.cart.totalQuantity)
    const deliveryFree = useAppSelector(state=> state.cart.deliveryFree);
    const products = useAppSelector(state=> state.cart.products);
    const {currentUser} = useContext(AppContext);

    console.log(products);

    const searchParams = useSearchParams();

    const {payment_intent,payment_intent_client_secret} = Object.fromEntries(searchParams.entries());

    console.log(payment_intent,payment_intent_client_secret)


    useEffect(()=> {


    },[]);

    const handleOrder = ()=> {
        
        setIsLoading(true);
        const formData = new FormData();



        formData.set('clientSecret',payment_intent_client_secret);
        formData.set('paymentId',payment_intent);
        formData.set('products',JSON.stringify(products));
        formData.set('deliveryFree',+deliveryFree);
        formData.set('totalProductsQuantity',totalProductsQuantity);
        formData.set('userId', currentUser.id);
        formData.set('totalPaidInCent',totalPaidInCent);

        PostData('payments/confirmPayment',formData)
        .then((data)=> {
            console.log(data)
        })
        .catch((error)=> {
            console.log(error);
            setError(error);
        })
        .finally(()=> {
            setIsLoading(false)
        });
    }

    if(isLoading) {
        return <Loading />
    }
    if(error) {
        return <p>something went wrong</p>
    }

    return (
        <div className="" onClick={handleOrder}>
            <p>454</p>
        </div>
    )

};

export default successfulPayment;