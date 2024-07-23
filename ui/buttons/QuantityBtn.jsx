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
    <div className="flex items-center justify-center gap-2  border border-teal-100 dark:border-teal-950 shadow-sm rounded-full p-2">
        {
            quantity === 1 ? 
            <IoTrashOutline 
                size={15}
                className="text-xl cursor-pointer text-rose-700" 
                onClick={()=> dispatch(decrementItemInCart({id,color,size}))} 
            />:
            <FiMinus
                size={16}
                className="text-xl text-teal-950 dark:text-teal-100 cursor-pointer" 
                onClick={()=> dispatch(decrementItemInCart({id,color,size}))} 
            />
        }
        <h5 
            className="text-sm text-teal-950 dark:text-teal-100 font-medium l border-x border-green-100 dark:border-teal-950 px-2" 
            >{quantity}
        </h5>
        <FiPlus
            size={16} 
            className="text-xl text-teal-950 dark:text-teal-100 cursor-pointer" 
            onClick={()=> dispatch(incrementItemInCart({id,color,size}))}/>
    </div>
  )
};