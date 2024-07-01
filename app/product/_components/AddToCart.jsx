"use client";
import { useState } from "react";
// icons
import { MdOutlineDeleteOutline } from "react-icons/md";
import { BiMessageAltError } from "react-icons/bi";
import { FaCartPlus } from "react-icons/fa6";
// redux store
import { useAppDispatch, useAppSelector } from "../../../store/store";
import {removeItemFromCart, addToCart } from "../../../store/features/cartSlice";
// component
import QuantityBtn from "../../../components/QuantityBtn";
import Overlay from "../../../components/Overlay";
import { ButtonWithIcon } from "../../../components/buttons";
import AddToListBtn from "../../../components/addToListBtn";
import { ProductDetailsContext } from "./ProductDetails";

function AddToCart() {

    const {product,selectedColor,selectedSize} = useContext(ProductDetailsContext);
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
    };


  return (
    <div className="flex items-stretch justify-center gap-2 pt-5 w-full cursor-pointer relative">
        {
            quantity ? 
            <>
                <QuantityBtn 
                    id={product.id} 
                    selectedColor={selectedColor} 
                    selectedSize={selectedSize} 
                    />
                <ButtonWithIcon 
                    text='remove'
                    Icon={MdOutlineDeleteOutline}
                    type='delete'
                    onClick={()=> dispatch(removeItemFromCart({id: product.id,selectedColor,selectedSize}))}
                    />
            </>
            :
            <ButtonWithIcon 
                text=' add to cart'
                Icon={FaCartPlus}
                type='primary'
                onClick={incrementItem}
               />
        }
        <AddToListBtn />
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