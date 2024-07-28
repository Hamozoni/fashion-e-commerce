"use client";
import { IoShieldCheckmark } from "react-icons/io5";
// components
import { ButtonWithIcon } from "../../../../ui/buttons/buttons";
import  {CartDetails}  from "../../../cart/_components/cartDetails";
import {UserField} from "./userField";
import { useElements, useStripe,PaymentElement } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";



export function Payment() {

    const stripe = useStripe();
    const elements = useElements();

    const [clientSecret,setClientSecret] = useState('');
    const [error,setError] = useState(null);
    const [isLoading,setIsLoading] = useState();

    useEffect(()=> {

        fetch("/api/paymentIntent",{
            method: "POST",
            headers: {
                "Content_Type": "application/json",
            },
            body: JSON.stringify({amount: 4525})
        })
        .then((res)=> res.json())
        .then((data)=> setClientSecret(data?.clientSecret))
        .catch((error)=> {
            console.log(error)
        })

    },[]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true);

        if(!stripe || !elements) return

        const {error: submitError} = await elements.submit();

        if(submitError) {
            setError(submitError?.message);
            setIsLoading(false);

            return
        }

        await stripe.confirmPayment({
            elements,
            clientSecret,
        }).then((data)=> {
            con
        })
        .catch(()=> {

        })
        .finally(()=> {
            setIsLoading(false);
        })

        console.log(data);
        if(data?.error){
        }


    }



  return (
    <div className="flex-1 lg:flex-2 bg-white dark:bg-stone-950 border border-teal-100 dark:border-stone-800 p-3 rounded-md shadow-md">
        <header>
            <div className="">
                <UserField name='name'/>
                <UserField name='email'/>
                <UserField name='address'/>
            </div>
            <h5 className="text-teal-950 dark:text-teal-50 font-bold text-lg sm:text-xl mb-3 capitalize">
                card details:
            </h5>
        </header>

        <form onSubmit={handleSubmit}>
            <CartDetails />
            <hr className="my-3"/>

           {clientSecret && <PaymentElement />}

            <ButtonWithIcon 
                text='pay now' 
                Icon={IoShieldCheckmark} 
                type='primary' 
                disabled={isLoading} 
                />
        </form>
    </div>
  )
};