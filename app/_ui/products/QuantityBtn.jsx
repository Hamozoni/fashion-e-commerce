"use client";

import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";

import { useAppDispatch, useAppSelector } from "../../../store/store";
import { decrementItemInCart, incrementItemInCart } from "../../../features/cartSlice";

function QuantityBtn({id}) {

    const quantity = useAppSelector(state => state.cart.products?.find(e=> e.id === id)?.quantity);
    const dispatch = useAppDispatch();

  return (
    <div className="flex items-center justify-center gap-2  border border-green-300 rounded-md p-3 py-2">
        <FiMinus 
            className="text-xl cursor-pointer" 
            onClick={()=> dispatch(decrementItemInCart(id))} 
        />
        <h5 className="text-xl border-x border-green-200 px-2" >{quantity}</h5>
        <FiPlus 
            className="text-xl cursor-pointer" 
            onClick={()=> dispatch(incrementItemInCart(id))}/>
    </div>
  )
}

export default QuantityBtn