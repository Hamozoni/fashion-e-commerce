"use client";

import { useEffect, useState } from "react";
import {useAppSelector} from "../../../../store/store";
import {PostData} from "../../../../lip/fetchData";
import {Loading} from "../../../../ui/models/Loading"
import { useSearchParams } from "next/navigation";
 
export default successfulPayment = () => {

    const [error,setError] = useState(null);
    const [isLoading,setIsLoading] = useState();

    const totalPaidInCent = useAppSelector(state=> state.cart.totalPaid)
    const totalProductsQuantity = useAppSelector(state=> state.cart.totalQuantity)
    const deliveryFree = useAppSelector(state=> state.cart.deliveryFree);
    const products = useAppSelector(state=> state.cart.products);

    const searchParams = useSearchParams();

    const paymentInfo = Object.fromEntries(searchParams.entries());

    console.log(paymentInfo);

    // useEffect(()=> {

    //     setIsLoading(true);
    //     const formData = new FormData();
        
    //     // formData.set('paymentId',paymetIntent);
    //     formData.set('products',JSON.stringify(products));
    //     formData.set('deliveryFree',deliveryFree);
    //     formData.set('totalProductsQuantity',totalProductsQuantity);
    //     formData.set('userId', currentUser.id);
    //     formData.set('totalPaidInCent',totalPaidInCent);

    //     PostData('payments/confirmPayment',formData)
    //     .then((data)=> {
    //         console.log(data)
    //     })
    //     .catch((error)=> {
    //         console.log(error);
    //         setError(error);
    //     })
    //     .finally(()=> {
    //         setIsLoading(false)
    //     });

    // },[]);

    if(isLoading) {
        return <Loading />
    }
    if(error) {
        return <p>something went wrong</p>
    }

    return (
        <div className="">

        </div>
    )

}