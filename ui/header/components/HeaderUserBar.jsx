"use client"
import { PiShoppingCart } from "react-icons/pi";
import { useAppSelector } from "../../../store/store";
import Link from "next/link";
import {useCurrentUser} from "../../../hooks/useCurrentUser"
import { FaUserLarge } from "react-icons/fa6";
import Image from "next/image";


function HeaderUserBar() {

    const currentUser = useCurrentUser();

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
            <div className="cursor-pointer">
                {
                    currentUser ? 
                    <div className="">
                        {
                            currentUser?.image ?
                            <Image src={currentUser?.image} width={30} height={30} className="rounded-full" />
                            :<FaUserLarge />
                        }
                    </div>
                    :
                    <Link 
                        href="/auth/login" 
                        className={className.title}
                        >sign in
                    </Link>
                }
            </div>
        </div>
        {/* <div className="">
            <Link 
                href="/orders" 
                className={className.title}
                >orders
            </Link>
        </div> */}
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
    </section>
  )
}

export default HeaderUserBar