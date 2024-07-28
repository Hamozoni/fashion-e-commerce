"use client"
import {Payment} from "./_components/payment";

const className = {
   titleText: 'text-xl font-bold text-teal-950 dark:text-teal-50 mb-4 capitalize'
};

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
console.log(process.env.NEXT_PUBLIC_STRIPE_KEY)
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);

const checkoutPage = ()=>  {

  return (
    <div className="p-3 lg:px-8">
       <div className="md:flex gap-8 capitalize">
          <section className="basis-[55%]">
              <h4 className={className.titleText}>
                your order summary:
              </h4>
          </section>
          <section className="basis-[45%]">
              <h4 className={className.titleText}>
                payments
              </h4>
              <Elements 
                  stripe={stripePromise}
                  options={
                      {
                          mode: 'payment',
                          amount: 4555,
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