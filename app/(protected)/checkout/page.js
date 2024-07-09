
import Payment from "./_components/payment.jsx";

import {OrderSummary} from "./_components/orderSummary.jsx"
const checkoutPage = ()=>  {

  return (
    <div className="p-3 lg:px-8 max-w-[600px] mx-auto">
          <h4 className="text-green-900 text-xl font-bold capitalize mb-4">payments</h4>
       <div className="md:flex gap-3">
          <div className="md:flex gap-3 justify-between">
              <Payment />
          </div>
          <div className="bg-amber-100">
              <OrderSummary/>
          </div>

       </div>
    </div>
  )
}

export default checkoutPage