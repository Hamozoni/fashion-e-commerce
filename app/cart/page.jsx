"use client"

import Image from "next/image";
import { useAppSelector } from "../../store/store";
import Link from "next/link";
import CartItemsCard from "./_components/CartItemsCard"

function page() {

    const cartItems = useAppSelector(state=> state.cart.cartItems);

    console.log(cartItems)
    const className = {
        startShopping: 'border border-green-200 px-4 py-1 text-green-900 uppercase bg-green-100 hover:bg-green-50 rounded-md absolute bottom-[20px] left-[50%] translate-x-[-50%]'
    }

 const cartCard = cartItems?.map((product)=> <CartItemsCard product={product}/>)

  return (
    <div className="p-4 lg:px-8">
        {
            cartItems?.length ? cartCard :
            <div className="relative max-w-fit mx-auto">
                <Image src='/cart/emtyCart.png' width={404}  height={316} alt='emty cart'/>
                <Link className={className.startShopping} href='/' >
                    start shopping
                </Link>
            </div>
        }
        
    </div>
  )
}

export default page