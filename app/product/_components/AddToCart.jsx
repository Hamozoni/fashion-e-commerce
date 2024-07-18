"use client";
// icons
import { MdOutlineDeleteOutline } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa6";
// redux store
import { useAppDispatch, useAppSelector } from "../../../store/store";
import {removeItemFromCart, addToCart } from "../../../store/features/cartSlice";
// component
import QuantityBtn from "../../../components/QuantityBtn";
import { ButtonWithIcon } from "../../../components/buttons";

function AddToCart({product}) {

    const {id,name,priceInHahala,category,subcategory,serialNumber,brand,color,size,imagePath} = product;
    const quantity = useAppSelector(state => state.cart.products?.find(e=> e.id === id && e.color === color && e.size === size)?.quantity);
    const dispatch = useAppDispatch();

    const incrementItem = ()=> {
        dispatch(addToCart({
            id,
            name,
            priceInHahala,
            category,
            subcategory,
            serialNumber,
            brand,
            imagePath,
            color,
            size,
        }));
    };


  return (
    <div className="flex items-stretch justify-center gap-2 w-full cursor-pointer relative">
        {
            quantity ? 
            <>
                <QuantityBtn 
                    id={id} 
                    color={color} 
                    size={size} 
                    />
                <ButtonWithIcon 
                    text='remove'
                    Icon={MdOutlineDeleteOutline}
                    type='delete'
                    onClick={()=> dispatch(removeItemFromCart({id,color,size}))}
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
    </div>
  )
}

export default AddToCart