import CartSummary from "../../cart/_components/CartSummary";
import Payment from "./_components/payment.jsx"

const checkoutPage = ()=>  {

  return (
    <div className="p-3 lg:px-8">
        <h4>payments</h4>
        <div className="flex gap-3 justify-between">
            <Payment />
            <CartSummary />
        </div>
    </div>
  )
}

export default checkoutPage