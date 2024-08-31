"use client";
import { IoShieldCheckmark } from "react-icons/io5";
// components
import { ButtonWithIcon } from "@/ui/buttons/buttons";
import  {CartDetails}  from "../../../cart/_components/cartDetails";
import {UserField} from "./userField";
import { useElements, useStripe,PaymentElement } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { useAppSelector } from "@/store/store";
import { AppContext } from "../../../contextProvider";
import { getCurrency } from "@/lip/getCurrency";
import {PostData } from "@/lip/fetchData";



export function Payment() {

    const stripe = useStripe();
    const elements = useElements();

    const [clientSecret,setClientSecret] = useState('');
    const [error,setError] = useState(null);
    const [isLoading,setIsLoading] = useState();

    const totalPaidInCent = useAppSelector(state=> state.cart.totalPaid)
    const {currentUser} = useContext(AppContext);

    useEffect(()=> {

        const formData = new FormData();

        formData.set('amount',totalPaidInCent);
        setIsLoading(true);
        PostData('payments/paymentIntent',formData)
        .then((data)=> {
            setClientSecret(data?.clientSecret);
        })
        .catch((error)=> {
            console.log(error)
        })
        .finally(()=> {
            setIsLoading(false)
        });
    },[totalPaidInCent]);


    const handleSubmit = async (e) => {

        e.preventDefault();
        setIsLoading(true);

        const {error : submitError} = await elements.submit();
        if(submitError) {
            setError(error?.message);
            setIsLoading(false);
            return
        };

       const {error}  =  await stripe.confirmPayment({
                elements,
                clientSecret,
                confirmParams: {
                    receipt_email: currentUser.email,
                    return_url: `${process.env.NEXT_PUBLIC_URL}/checkout/successfulPayment`
                }
            });

            if(error) {
                setIsLoading(false);
                setError(error?.message);
                return

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

        <form onSubmit={handleSubmit}  >
            <div className="bg-gray-50 mb-3 p-3 rounded-md">
                <PaymentElement />
                
            </div>
            <CartDetails />
            <hr className="my-3"/>

            <ButtonWithIcon 
                text={`pay ${getCurrency(totalPaidInCent)}`} 
                Icon={IoShieldCheckmark} 
                type='primary' 
                disabled={isLoading} 
                />
        </form>
    </div>
  )
}