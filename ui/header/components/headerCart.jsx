"use client"
import Link from "next/link"
import { PiShoppingCart } from "react-icons/pi";
import { useAppSelector } from "../../../store/store";

function headerCart() {

    const totalItemsOnCart = useAppSelector((state)=> state.cart.totalQuantity);

    const className = {
        cartNumb: "absolute left-3 top-[-10px] w-[20px] h-[20px] rounded-full bg-teal-700 text-teal-500 flex justify-center items-center text-sm"
    };

  return (
    <div>
        <Link href='/cart'  
              className="relative cursor-pointer">
            {
                totalItemsOnCart ?
                <div
                    className={className.cartNumb}
                    >
                        {totalItemsOnCart > 9 ? "9+" : totalItemsOnCart}
                </div>
                :''
            }
            <PiShoppingCart size={28}/>
        </Link>
    </div>
  )
}

export default headerCart