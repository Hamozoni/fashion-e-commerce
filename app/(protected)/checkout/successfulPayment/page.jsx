"use client";

import { useCallback, useContext, useEffect, useState } from "react";
import {useAppSelector} from "@/store/store";
import {PostData} from "@/lip/fetchData";
import { useRouter, useSearchParams } from "next/navigation";
import {AppContext} from "../../../contextProvider"
import { OrderSummary } from "../../orders/orderSummary";
import {Error} from "@/ui/components/error";

import { IoCheckmark } from "react-icons/io5";
import { ClimbingBoxLoader } from "react-spinners";
import { clearAllItemsFromCart } from "@/store/features/cartSlice";
import {useAppDispatch} from "@/store/store";

 
 const SuccessfulPayment = () => {

     const {currentUser} = useContext(AppContext);
    if(!currentUser) {
         router.push(`/auth/login`);
      }

    const [error,setError] = useState(null);
    const [isLoading,setIsLoading] = useState();
    const [order,setOrder] = useState({})

    const totalPaidInCent = useAppSelector(state=> state.cart.totalPaid)
    const totalProductsQuantity = useAppSelector(state=> state.cart.totalQuantity)
    const deliveryFree = useAppSelector(state=> state.cart.deliveryFree);
    const products = useAppSelector(state=> state.cart.products);
    const dispatch = useAppDispatch();

    const router = useRouter()
    const searchParams = useSearchParams();


    const {payment_intent,payment_intent_client_secret} = Object.fromEntries(searchParams.entries());

    const handlePlacingOrder = useCallback(()=> {
        setError(null);
        setIsLoading(true);
        const formData = new FormData();
        formData.set('clientSecret',payment_intent_client_secret);
        formData.set('paymentId',payment_intent);
        formData.set('products',JSON.stringify(products));
        formData.set('deliveryFree',+deliveryFree);
        formData.set('totalProductsQuantity',totalProductsQuantity);
        formData.set('userId', currentUser.id);
        formData.set('userImail', currentUser.email);
        formData.set('totalPaidInCent',totalPaidInCent);

        PostData('payments/confirmPayment',formData)
        .then((data)=> {
            setOrder(data)
            dispatch(clearAllItemsFromCart());
        })
        .catch((error)=> {

            const {response} = error
            setError(response?.data?.error);
        })
        .finally(()=> {
            setIsLoading(false)
        });
    },[])


    useEffect(()=>{
        handlePlacingOrder()
    },[handlePlacingOrder]);



    if(isLoading) {
        return (
            <div className="h-screen flex items-center justify-center capitalize">
                <ClimbingBoxLoader color="#0d9488" size={60} />
            </div>
        )
    }
    if(!!error) return <Error onClick={()=> router.refresh()} />

    return (
        <div className="p-3 md:px-8 max-w-[700px] mx-auto" >
            <header className="mb-6">
                <div className="mx-auto w-[200px] h-[200px] rounded-full bg-teal-100 text-teal-700 flex items-center justify-center mb-4">
                    <IoCheckmark size={160}/>
                </div>
                <h2 className="text-center text-2xl capitalize text-teal-950 dark:text-teal-50 font-bold "
                     >successeded
                </h2>
            </header>
            <OrderSummary 
                address={currentUser?.address} 
                data={{
                    deliveryFree: order?.deliveryFree,
                    totalPaidInCent:order?.totalPaidInCent
                    }}
                />
        </div>
    )

};

export default SuccessfulPayment;