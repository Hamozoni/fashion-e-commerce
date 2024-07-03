
import Image from "next/image";
import Payment from "./_components/payment.jsx";

import secure_payment from "../../../public/cart/securePayment.png"

const checkoutPage = ()=>  {

  return (
    <div className="p-3 lg:px-8 max-w-[1100px] mx-auto">
          <h4 className="text-green-900 text-xl font-bold capitalize mb-4">payments</h4>
       <div className="md:flex gap-3">
          <div className="md:flex gap-3 justify-between">
              <Payment />
          </div>
          <div>
              <Image src={secure_payment} width={800} alt='secure payment'/>
          </div>

       </div>
    </div>
  )
}

export default checkoutPage