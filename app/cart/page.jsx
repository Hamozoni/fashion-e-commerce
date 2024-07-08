"use client"

import Image from "next/image";
import { useAppSelector } from "../../store/store";
import Link from "next/link";
import CartItemsCard from "./_components/CartItemsCard";
import CartSummary from "./_components/CartSummary";

function cartPage() {

    const cartItems = useAppSelector(state=> state.cart.products);
    const totalItemsOnCart = useAppSelector((state)=> state.cart.totalQuantity);

    console.log(cartItems)
    const className = {
        startShopping: 'border border-teal-200  py-2 px-6 text-teal-950 capitalize bg-teal-50 hover:bg-teal-100 rounded-full absolute bottom-[20px] left-[50%] translate-x-[-50%]',
        sectionTitle: 'text-teal-900 font-bold text-center sm:text-left text-xl w-full py-5  lg:px-0'
    }

 const cartCard = cartItems?.map((product)=> (
     <CartItemsCard 
        key={`${product.id}${product.selectedColor}${product.selectedSize}`} 
        product={product}
        />
    ))

  return (
    <div className="">
        {
            cartItems?.length ?
            <div className="lg:px-8 lg:flex gap-8 capitalize">
                <section className="basis-[60%]">
                    <h4 className={className.sectionTitle}>
                       my cart items {totalItemsOnCart}
                    </h4>
                    <div >
                        {cartCard}
                    </div> 
                </section>
                <section className="basis-[40%]">
                    <h4 className={className.sectionTitle}>cart summary</h4>
                    <CartSummary/>
                </section>
              
            </div>  :
            <div className="relative w-full flex justify-center p-5 bg-gray-50">
                <Image src='/cart/emtyCart.png' width={400}  height={800} alt='emty cart'/>
                <Link className={className.startShopping} href='/' >
                    start shopping
                </Link>
            </div>
        }
       
        
    </div>
  )
}

export default cartPage;