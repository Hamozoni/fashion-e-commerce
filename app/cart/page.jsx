"use client"
import Link from "next/link";
import Image from "next/image";
// components
import {CartItemsCard} from "@/ui/cards/cartItemsCard";
import {CartSummary} from "./_components/CartSummary";
// redux store
import { useAppSelector } from "@/store/store";
import { useAppDispatch } from "@/store/store";
import {clearAllItemsFromCart} from "@/store/features/cartSlice"

function CartPage() {

    const cartItems = useAppSelector(state=> state.cart.products);
    const totalItemsOnCart = useAppSelector((state)=> state.cart.totalQuantity);

    const className = {
        startShopping: 'border border-teal-200 dark:border-stone-900  py-2 px-6 text-teal-950 dark:text-teal-50 capitalize bg-teal-50 dark:bg-stone-700 rounded-full absolute bottom-[20px] left-[50%] translate-x-[-50%]',
        sectionTitle: 'text-teal-900 dark:text-teal-100 font-bold text-center lg:text-left text-lg w-full py-5  lg:px-0'
    };

    const cartCard = cartItems?.map((product)=> (
        <CartItemsCard 
            key={`${product.id}${product.color}${product.size}`} 
            product={product}
            />
    ));

    const dispatch = useAppDispatch()

  return (
    <div className="p-3 lg:px-8 ">
        {
            cartItems?.length ?
            <div className="lg:flex gap-8 capitalize">
                <section className="basis-[60%]">
                    <header className="flex items-center justify-between">

                        <h4 className={`${className.sectionTitle} flex items-center gap-3`}>
                            my cart items {totalItemsOnCart}
                        </h4>
                        <p 
                            onClick={()=> dispatch(clearAllItemsFromCart())}
                            className="text-red-500 text-sm font-bold cursor-pointer min-w-fit">
                                delete all
                            </p>
                    </header>
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

export default CartPage;