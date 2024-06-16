"use client"
import Link from "next/link"
import { PiShoppingCart } from "react-icons/pi";
import { useAppSelector } from "../../../store/store";

function headerCart() {

    const totalItemsOnCart = useAppSelector((state)=> state.cart.totalQuantity);

    const className = {
        cartNumb: "absolute left-1/3 bottom-3 animate-pingOnce bg-green-800 text-slate-100 rounded-full w-5 h-5 flex items-center justify-center p-1  "
    };

  return (
    <div>
        <Link href='/cart'  
              className="relative cursor-pointer">
            {
                totalItemsOnCart ?
                <span
                    className={className.cartNumb}
                    >
                        {totalItemsOnCart > 9 ? "9+" : totalItemsOnCart}
                </span>
                :''
            }
            <PiShoppingCart size={28}/>
        </Link>
    </div>
  )
}

export default headerCart