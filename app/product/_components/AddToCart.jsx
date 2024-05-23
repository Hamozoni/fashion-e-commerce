"use client"

import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { decrementItemInCart, incrementItemInCart,removeItemFromCart, productQuantitySelector, totalCartItemsQSelector } from "../../../features/cartSlice";

function AddToCart({product}) {

    const quantity = useAppSelector(state => productQuantitySelector(state,product.id));
    const dispatch = useAppDispatch();

    const cartItemsTotal = useAppSelector(totalCartItemsQSelector);

    console.log(cartItemsTotal)

    const className = {
        addBtn : 'bg-green-900 text-green-100 hover:bg-green-700 flex-1 flex items-center justify-center border border-green-300 rounded-md p-5 py-2 text-md font-bold'
    }

  return (
    <div className="flex items-stretch justify-center gap-2 pt-5 w-full cursor-pointer">
        {
            quantity ? 
            <>
                <div className="flex items-center justify-center gap-2  border border-green-300 rounded-md p-3 py-2">
                    <FiMinus className="text-xl" onClick={()=> dispatch(decrementItemInCart(product))} />
                    <h5 className="text-xl border-x border-green-200 px-2" >{quantity}</h5>
                    <FiPlus className="text-xl " onClick={()=> dispatch(incrementItemInCart(product))}/>
                </div>
                <botton 
                    onClick={()=> dispatch(removeItemFromCart(product))}
                    className={`${className.addBtn} bg-rose-600 hover:bg-rose-700`}>
                    
                        remove <MdOutlineDeleteOutline size={16} />
                    
                    
                </botton>
            </>
            :
            <botton 
                onClick={()=> dispatch(incrementItemInCart(product))}
                className={className.addBtn}>
                add to cart
                
                
            </botton>
        }
        <div className="flex items-center justify-center  border border-green-300 rounded-md p-3 py-2 text-xl">
            <FaHeart className="text-rose-500" />
        </div>
    </div>
  )
}

export default AddToCart