"use client";
import { IoShieldCheckmark } from "react-icons/io5";
// components
import { ButtonWithIcon } from "../../../../ui/buttons/buttons";
import  {CartDetails}  from "../../../cart/_components/cartDetails";
import {UserField} from "./userField";
import { useElements, useStripe,PaymentElement } from "@stripe/react-stripe-js";
import { useContext, useState } from "react";
import { useAppSelector } from "../../../../store/store";
import { AppContext } from "../../../contextProvider";



export function Payment() {

    const stripe = useStripe();
    const elements = useElements();

    const [paymentIntentId,setPaymentIntentId] = useState('');
    const [error,setError] = useState(null);
    const [isLoading,setIsLoading] = useState();

    const totalPaidInCent = useAppSelector(state=> state.cart.totalPaid)
    const totalProductsQuantity = useAppSelector(state=> state.cart.totalQuantity)
    const deliveryFree = useAppSelector(state=> state.cart.deliveryFree);
    const products = useAppSelector(state=> state.cart.products);

    const {currentUser} = useContext(AppContext);


    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true);

        if(!stripe || !elements) return

        
        try{
            const {error: submitError} = await elements.submit();
    
            if(submitError) {
                setError(submitError?.message);
                setIsLoading(false);
    
                return
            }

            const {error,paymetIntent} =  await stripe.createPayment({
                   amount: totalPaidInCent,
                   currency: 'sar'
              })
      
              if(error){
                  setError(submitError?.message);
                  return
              }

              setPaymentIntentId(paymetIntent.id);

              fetch('/api/confirmPayment',{
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({
                    paymentId: paymentIntentId,
                    products,
                    deliveryFree,
                    totalProductsQuantity,
                    userId: currentUser,
                    totalPaidInCent
                })
              })


        }
        catch (eror) {
            setError(error.message)
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

           <PaymentElement />

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