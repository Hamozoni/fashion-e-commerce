"use client";

import { useAppSelector } from "../../../store/store";
import getCurrency from "../../_lip/getCurrency";
import { MdOutlineLocalShipping } from "react-icons/md";


function CartSummary() {

    const cartItems = useAppSelector(state=> state.cart.cartItems);
    const totalPrice = cartItems?.reduce((total,curr)=> (total += curr?.product?.priceInCent * curr?.quantity),0)
    const subtotal = cartItems?.reduce((total,curr)=> (total += curr?.quantity),0);

    const deliveryFree = totalPrice > 14999 ? 0 : 1700;


  return (
    <div className="flex-1">
        <header>
            <div className="">
                <MdOutlineLocalShipping />
                <h4>free shipping</h4>
                <p>on orders over SAR 150 </p>
            </div>
        </header>
        <div className="flex items-center justify-between">
            <h5>{`subtotal (${subtotal} items):`}</h5>
            <h5> {totalPrice} </h5>
        </div>
        <div className="flex items-center justify-between">
            <h5>shipping fee</h5>
            <h5> {deliveryFree > 0 ? getCurrency(deliveryFree): "free"} </h5>
        </div>
        <div className="flex items-center justify-between">
            <h5>total: </h5>
            <h5> {getCurrency(totalPrice + deliveryFree)} </h5>
        </div>
        <button className="w-full rounded-md py-2 bg-green-200 uppercase text-green-900 hover:bg-green-100">
             checkout
        </button>
    </div>
  )
}

export default CartSummary