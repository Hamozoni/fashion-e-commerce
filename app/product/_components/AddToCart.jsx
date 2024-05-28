"use client";

import { FaHeart } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import {removeItemFromCart, addToCart } from "../../../store/features/cartSlice";
import { BiMessageAltError } from "react-icons/bi";

import QuantityBtn from "../../_ui/products/QuantityBtn";
import { useState } from "react";
import Overlay from "../../../components/Overlay";

function AddToCart({product,selectedColor,selectedSize}) {

    const quantity = useAppSelector(state => state.cart.products?.find(e=> e.id === product.id && e.selectedColor === selectedColor && e.selectedSize === selectedSize)?.quantity);

    const dispatch = useAppDispatch();
    const [errorMessege,setErrorMessege] = useState(null);

    const incrementItem = ()=> {

        if(!selectedSize && !selectedColor){
            setErrorMessege('place select product color and size')
        }else if (!selectedColor){
            setErrorMessege('place select product color')
        } else if (!selectedSize){
            setErrorMessege('place select product size')
        }else {
            setErrorMessege(null);
            dispatch(addToCart({
                id: product.id,
                name: product.name,
                priceInCent: product.priceInCent,
                category: product.category,
                subCategory: product.subCategory,
                serialNumber: product.serialNumber,
                brand: product.brand,
                image: product.images.find(e=> e.color === selectedColor).imagePath,
                selectedColor,
                selectedSize,
            }))
        }
    }

    const className = {
        addBtn : 'bg-green-900 text-green-100 hover:bg-green-700 flex-1 flex items-center justify-center border border-green-300 rounded-md p-5 py-2 text-md font-bold'
    }

  return (
    <div className="flex items-stretch justify-center gap-2 pt-5 w-full cursor-pointer relative">
        {
            quantity ? 
            <>
                <QuantityBtn id={product.id} selectedColor={selectedColor} selectedSize={selectedSize} />
                <botton 
                    onClick={()=> dispatch(removeItemFromCart({id: product.id,selectedColor,selectedSize}))}
                    className={`${className.addBtn} bg-rose-600 hover:bg-rose-700`}>
                        remove <MdOutlineDeleteOutline size={16} />
                </botton>
            </>
            :
            <botton 
                onClick={incrementItem}
                className={className.addBtn}>
                add to cart
            </botton>
        }
        <div className="flex items-center justify-center border border-green-300 rounded-md p-3 py-2 text-xl">
            <FaHeart className="text-rose-500" />
        </div>
        {   errorMessege !== null &&
            <>
                <Overlay onClick={()=> setErrorMessege(null)} />
                <div className="absolute z-50 top-0 left-0 w-full translate-y-[-100%] bg-green-200 text-green-900 flex items-center gap-2 rounded-md p-3">
                   <BiMessageAltError size={22} /> {errorMessege}
                </div>
            </>
        }
    </div>
  )
}

export default AddToCart