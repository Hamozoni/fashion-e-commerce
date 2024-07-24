
"use client";
import {useAppSelector} from "../../../../store/store";
import {CartItemsCard} from "../../../../ui/cards/cartItemsCard";

const OrderSummary = ()=> {

    const orderItems = useAppSelector( state => state.cart.products);

    return (
        <div className="capitalize">
            {
                orderItems?.map(product=> (
                    <CartItemsCard 
                        key={product.id} 
                        product={product} 
                        isCheckout={true}
                    />
                )) 
            }
        </div>
    )
}

export default OrderSummary