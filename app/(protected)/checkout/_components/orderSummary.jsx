
"use client";
import {useAppSelector} from "../../../../store/store";
import {CartItemCard} from "../../../../ui/cards/cartItemsCard";

export const OrderSummary = ()=> {
    const orderItems = useAppSelector( state => state.cart.products);
    return (
        <div className="capitalize">
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
    )
};