"use client";

import { useAppSelector } from "../../../store/store";
import getCurrency from "../../_lip/getCurrency";
import { MdOutlineLocalShipping } from "react-icons/md";


function CartSummary() {

    const cartItems = useAppSelector(state=> state.cart.cartItems);
    const totalPrice = getCurrency(cartItems?.reduce((total,curr)=> (total += curr?.product?.priceInCent * curr?.quantity),0));
    const subtotal = cartItems?.reduce((total,curr)=> (total += curr?.quantity),0);

  return (
    <div>
        <header>
            <div className="">
                <MdOutlineLocalShipping />
                <h4>free shipping</h4>
                <p>on orders over SAR 150 </p>
            </div>
        </header>
        <div className="">
            <h5>{`subtotal (${subtotal} items): ${totalPrice} `}</h5>
        </div>
    </div>
  )
}

export default CartSummary