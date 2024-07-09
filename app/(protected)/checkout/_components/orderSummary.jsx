
"use client";
import {useAppSelector} from "../../../../store/store";
import {CartItemCard} from "../../../cart/_components/CartItemsCard"

export const OrderSummary = ()=> {

    const orderItems = useAppSelector( state => state.cart.products);
    return (
        <section className="">
            <h4>your order summary:</h4>
            <div className="">
                <div className="">
                    {
                       orderItems?.map(product=> (
                         <CartItemCard 
                           key={product.id} 
                           product={product} 
                           isCheckout={true}
                           />
                       )) 
                    }
                </div>
            </div>
        </section>
    )
}