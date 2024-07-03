
import Payment from "./_components/payment.jsx"

const checkoutPage = ()=>  {

  return (
    <div className="p-3 lg:px-8 max-[580px]">
        <h4 className="text-green-900 text-xl font-bold capitalize mb-4">payments</h4>
        <div className="md:flex gap-3 justify-between">
            <Payment />
        </div>
    </div>
  )
}

export default checkoutPage