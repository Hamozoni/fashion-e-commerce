"use client";
import { useAppSelector } from "../../../store/store";
import getCurrency from "../../../lip/getCurrency";
const cartDetails = () => {
    const totalPrice = useAppSelector(state=> state.cart.totalPaid)
    const subtotal = useAppSelector(state=> state.cart.totalQuantity)

    const deliveryFree = useAppSelector(state=> state.cart.deliveryFree);

    const className = {
        section : 'border border-gray-50 mb-3 p-3 rounded-md shadow-md',
        parts: 'flex items-center justify-between py-3 border-b border-gray-50'
    }

  return (
    <div className={className.section}>
        <div className={className.parts}>
            <h5>{`subtotal (${subtotal} items):`}</h5>
            <h5> {getCurrency(totalPrice)} </h5>
        </div>
        <div className={className.parts}>
            <h5>shipping fee</h5>
            <h5> {deliveryFree > 0 ? getCurrency(deliveryFree): "free"} </h5>
        </div>
        <div className={className.parts}>
            <h5>total: </h5>
            <h5> {getCurrency(totalPrice + deliveryFree)} </h5>
        </div>
    </div>
  )
}

export default cartDetails