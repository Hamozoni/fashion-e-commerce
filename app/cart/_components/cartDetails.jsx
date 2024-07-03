"use client";
import { useAppSelector } from "../../../store/store";
import getCurrency from "../../../lip/getCurrency";
const cartDetails = () => {
    const totalPrice = useAppSelector(state=> state.cart.totalPaid)
    const subtotal = useAppSelector(state=> state.cart.totalQuantity)

    const deliveryFree = useAppSelector(state=> state.cart.deliveryFree);

    const className = {
        section : 'border border-gray-50 mb-3 p-3 rounded-md shadow-md capitalize',
        parts: 'flex items-center justify-between py-2 border-b border-gray-50',
        money: 'text-green-950 text-lg font-bold'
    }

  return (
    <div className={className.section}>
        <div className={className.parts}>
            <h5>{`subtotal (${subtotal} items):`}</h5>
            <h6 className={className.money}> {getCurrency(totalPrice)} </h6>
        </div>
        <div className={className.parts}>
            <h5>shipping fee</h5>
            <h6 className={className.money}> 
                {deliveryFree > 0 ? getCurrency(deliveryFree): "free"} 
            </h6>
        </div>
        <div className={className.parts}>
            <h5>total: </h5>
            <h6 className={className.money}> 
                {getCurrency(totalPrice + deliveryFree)} 
            </h6>
        </div>
    </div>
  )
}

export default cartDetails