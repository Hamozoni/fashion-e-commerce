"use client"
import { AppContext } from "@/app/contextProvider";
import {Payment} from "./_components/payment";

const className = {
   titleText: 'text-xl font-bold text-teal-950 dark:text-teal-50 mb-4 capitalize'
};

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useContext } from "react";
import {useRouter } from "next/navigation";
import { useAppSelector } from "@/store/store";
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);

const checkoutPage = ()=>  {

  const {currentUser} = useContext(AppContext);
  const totalPaidInCent = useAppSelector(state=> state.cart.totalPaid)

  const router = useRouter()

  if(!currentUser) {
    return router.push(`/auth/login?callback=/checkout`);
  }

  return (
    <div className="p-3 lg:px-8">
       <div className="flex justify-center items-center gap-8 capitalize">
          <section className="max-w-full w-[500px]">
              <h4 className={className.titleText}>
                payments
              </h4>
              <Elements 
                  stripe={stripePromise}
                  options={
                      {
                          mode: 'payment',
                          amount: totalPaidInCent,
                          currency: 'sar'
                      }
                  }
                  >
                  <Payment />

              </Elements>
          </section>
       </div>
    </div>
  )
}

export default checkoutPage;