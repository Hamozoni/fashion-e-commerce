"use client"
import { PiShoppingCart } from "react-icons/pi";
import { useAppSelector } from "../../../store/store";
import Link from "next/link";


function HeaderUserBar() {

    const totalItemsOnCart = useAppSelector((state)=> state.cart.totalQuantity);
    
    const className = {
        flex:  `flex items-center gap-4`,
        title: 'text-md font-medium text-emerald-900 capitalize cursor-pointer',
        cartNumb: "absolute left-1/3 bottom-3 animate-pingOnce bg-green-800 text-slate-100 rounded-full w-5 h-5 flex items-center justify-center p-1  "
    };
    
  return (
    <section className={className.flex} >
        <div className="">
            <h5 className={className.title}>en</h5>
            <ul>
                <li></li>
            </ul>
        </div>
        <div className="">
            <div className="">
                <h5 className={className.title}>sign in</h5>
            </div>
        </div>
        <div className="">
            <button className={className.title}>orders</button>
        </div>
        <Link href='/cart'  className="relative cursor-pointer">
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
    </section>
  )
}

export default HeaderUserBar