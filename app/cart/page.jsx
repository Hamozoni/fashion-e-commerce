"use client"

import Image from "next/image";
import { useAppSelector } from "../../store/store";
import Link from "next/link";
import CartItemsCard from "./_components/CartItemsCard";
import CartSummary from "./_components/CartSummary";

function page() {

    const cartItems = useAppSelector(state=> state.cart.products);
    const totalItemsOnCart = useAppSelector((state)=> state.cart.totalQuantity);

    console.log(cartItems)
    const className = {
        startShopping: 'border border-green-200 px-4 py-1 text-green-900 uppercase bg-green-100 hover:bg-green-50 rounded-md absolute bottom-[20px] left-[50%] translate-x-[-50%]',
        sectionTitle: 'text-green-900 font-bold text-lg mb-3 pb-3 border-b border-gray-100'
    }

 const cartCard = cartItems?.map((product)=> <CartItemsCard key={product.id} product={product}/>)

  return (
    <div className="p-4 lg:px-8">
        {
            cartItems?.length ?
            <div className="p-4 lg:px-8 flex gap-3">
                <section>
                    <h4 className={className.sectionTitle}>cart items {totalItemsOnCart}</h4>
                    <div className="flex-1">
                        {cartCard}
                    </div> 
                </section>
                <section>
                    <h4 className={className.sectionTitle}>cart summary</h4>
                    <CartSummary/>
                </section>
              
            </div>  :
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