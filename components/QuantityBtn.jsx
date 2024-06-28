"use client";

import { FiMinus,FiPlus } from "react-icons/fi";
import { IoTrashOutline } from "react-icons/io5";

import { useAppDispatch, useAppSelector } from "../store/store";
import { decrementItemInCart, incrementItemInCart } from "../store/features/cartSlice";

function QuantityBtn({id,selectedColor,selectedSize}) {

    const quantity = useAppSelector(state => state.cart.products?.find(e=> e.id === id && e.selectedColor === selectedColor && e.selectedSize === selectedSize)?.quantity);
    const dispatch = useAppDispatch();

  return (
    <div className="flex items-center justify-center gap-2  border border-green-100 shadow-sm rounded-md p-2">
        {
            quantity === 1 ? 
            <IoTrashOutline 
                size={16}
                className="text-xl cursor-pointer" 
                onClick={()=> dispatch(decrementItemInCart({id,selectedColor,selectedSize}))} 
            />:
            <FiMinus
                size={16}
                className="text-xl cursor-pointer" 
                onClick={()=> dispatch(decrementItemInCart({id,selectedColor,selectedSize}))} 
            />
        }
        <h5 
            className="text-sm text-green-800  font-medium l border-x border-green-200 px-2" 
            >{quantity}
        </h5>
        <FiPlus
            size={16} 
            className="text-xl cursor-pointer" 
            onClick={()=> dispatch(incrementItemInCart({id,selectedColor,selectedSize}))}/>
    </div>
  )
}

export default QuantityBtn