
import {Payment} from "./_components/payment";
import OrderSummary from "./_components/orderSummary";

const className = {
   titleText: 'text-xl font-bold text-teal-950 dark:text-teal-50 mb-4 capitalize'
}
const checkoutPage = ()=>  {

  return (
    <div className="p-3 lg:px-8">
       <div className="md:flex gap-8 capitalize">
          <section className="basis-[55%]">
              <h4 className={className.titleText}>
                your order summary:
              </h4>
              <OrderSummary/>
          </section>
          <section className="basis-[45%]">
              <h4 className={className.titleText}>
                payments
              </h4>
              <Payment />
          </section>
       </div>
    </div>
  )
}

export default checkoutPage;