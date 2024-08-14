"use client";
import { useAppSelector } from "@/store/store";
import {getCurrency }from "@/lip/getCurrency";


export const CartDetails = () => {

    const totalPrice = useAppSelector(state=> state.cart.totalPaid)
    const subtotal = useAppSelector(state=> state.cart.totalQuantity)
    const deliveryFree = useAppSelector(state=> state.cart.deliveryFree);

    const className = {
        section : 'border border-gray-50 dark:border-stone-900 mb-3 p-3 rounded-md shadow-md capitalize',
        parts: 'flex items-center justify-between py-2 border-b border-gray-50 dark:border-stone-900 ',
        money: 'text-teal-900 dark:text-teal-100 text-sm font-bold',
        title:'text-teal-950 dark:text-teal-50 text-sm font-bold'
    }

  return (
    <div className={className.section}>
        <div className={className.parts}>
            <h5 className={className.title}>{`subtotal (${subtotal} items):`}</h5>
            <h6 className={className.money}> {getCurrency(totalPrice)} </h6>
        </div>
        <div className={className.parts}>
            <h5 className={className.title}>shipping fee</h5>
            <h6 className={className.money}> 
                {deliveryFree > 0 ? getCurrency(deliveryFree): "free"} 
            </h6>
        </div>
        <div className={className.parts}>
            <h5 className={className.title}>total: </h5>
            <h6 className={className.money}> 
                {getCurrency(totalPrice + deliveryFree)} 
            </h6>
        </div>
    </div>
  )
}