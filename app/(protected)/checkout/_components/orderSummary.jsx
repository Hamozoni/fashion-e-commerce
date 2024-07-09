
"use client";
import {useAppSelector} from "../../../../store/store";
import CartItemCard from "../../../cart/_components/CartItemsCard"
const OrderSummary = ()=> {

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

export default OrderSummary