
import {Payment} from "./_components/payment";
import {OrderSummary} from "./_components/orderSummary";

const checkoutPage = ()=>  {

  return (
    <div className="p-3 lg:px-8">
       <div className="md:flex gap-8 capitalize">
         <section className="basis-[45%]">
              <h4 className="text-xl font-bold text-teal-950 mb-4">your order summary:</h4>
              <OrderSummary/>
          </section>
          <section className="basis-[55%]">
              <h4 className="text-green-900 text-xl font-bold capitalize mb-4">payments</h4>
              <Payment />
          </section>
       </div>
    </div>
  )
}

export default checkoutPage