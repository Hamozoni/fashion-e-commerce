"use client";

import { useAppSelector } from "../../../store/store";
import getCurrency from "../../_lip/getCurrency";



function CartSummary() {

    const cartItems = useAppSelector(state=> state.cart.cartItems);
    const totalPrice = cartItems?.reduce((total,curr)=> (total += curr?.product?.priceInCent * curr?.quantity),0)

  return (
    <div>{getCurrency(totalPrice)}</div>
  )
}

export default CartSummary