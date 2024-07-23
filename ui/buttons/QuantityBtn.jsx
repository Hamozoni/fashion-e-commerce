"use client";
// icons
import { FiMinus,FiPlus } from "react-icons/fi";
import { IoTrashOutline } from "react-icons/io5";
// redux store
import { useAppDispatch, useAppSelector } from "../../store/store";
import { decrementItemInCart, incrementItemInCart } from "../../store/features/cartSlice";

export function QuantityBtn({id,color,size}) {

    const quantity = useAppSelector(state => state.cart.products?.find(e=> e.id === id && e.color === color && e.size === size)?.quantity);
    const dispatch = useAppDispatch();

  return (
    <div className="flex items-center justify-center gap-2  border border-green-100 shadow-sm rounded-full p-2">
        {
            quantity === 1 ? 
            <IoTrashOutline 
                size={15}
                className="text-xl cursor-pointer text-rose-700" 
                onClick={()=> dispatch(decrementItemInCart({id,color,size}))} 
            />:
            <FiMinus
                size={16}
                className="text-xl cursor-pointer" 
                onClick={()=> dispatch(decrementItemInCart({id,color,size}))} 
            />
        }
        <h5 
            className="text-sm text-green-800  font-medium l border-x border-green-200 px-2" 
            >{quantity}
        </h5>
        <FiPlus
            size={16} 
            className="text-xl cursor-pointer" 
            onClick={()=> dispatch(incrementItemInCart({id,color,size}))}/>
    </div>
  )
};