"use client";
// icons
import { MdOutlineDeleteOutline } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
// redux store
import { useAppDispatch, useAppSelector } from "../../store/store";
import {removeItemFromCart, addToCart } from "../../store/features/cartSlice";
// component
import {QuantityBtn} from "./quantityBtn";
import { ButtonWithIcon } from "./buttons";
import { useState } from "react";

export function AddToCartBtn({product,isFromCard=false}) {

    const {id,name,priceInHalala,offerPriceInHalala,category,subcategory,colorName,serialNumber,brand,color,size,imagePath,sizes} = product;
    const quantity = useAppSelector(state => state.cart.products?.find(e=> e.id === id && e.color === color && e.size === size)?.quantity);
    const dispatch = useAppDispatch();
    
    const [isError,setIsErroe] = useState(false)
    const incrementItem = ()=> {
        
        const isAvailbeSize = sizes?.find(e => (e.shortName === size && e.colorName === colorName));

        if(!!isAvailbeSize){
            setIsErroe(false);
            const uniqueId = crypto.randomUUID()
            dispatch(addToCart({
                id,
                name,
                priceInHalala: +priceInHalala,
                offerPriceInHalala,
                category,
                subcategory,
                serialNumber: `${uniqueId}${serialNumber}`,
                brand,
                imagePath,
                color,
                colorName,
                size,
            }));
        }else {
            console.log('yesssssssssssssssss')
            setIsErroe(true);
        }
    };


  return (
    <div className="flex items-stretch justify-center gap-2 w-full cursor-pointer relative capitalize">
        {
            isError ? 
            <div 
                onClick={()=> setIsErroe(false)}
                 className="flex items-center justify-between gap-3 dark:text-teal-950 text-teal-50  cursor-pointer absolute right-0 -top-full -translate-y-1/2 w-full minw-full p-3 rounded-md dark:bg-white bg-stone-950 z-[99]">
                <h6 className="font-bold text-sm">place select size </h6>
                <RxCross2 size={22}/>
            </div>
            : null
        }
        {
            quantity ? 
            <>
                <QuantityBtn 
                    id={id} 
                    color={color} 
                    size={size} 
                    />
                    {
                        isFromCard ? null :
                        <ButtonWithIcon 
                            text='remove'
                            Icon={MdOutlineDeleteOutline}
                            type='delete'
                            onClick={()=> dispatch(removeItemFromCart({id,color,size}))}
                            />
                    }
            </>
            :
            <ButtonWithIcon 
                text={isFromCard ? '' : ' add to cart'}
                Icon={FaCartPlus}
                type={isFromCard ?'save' :'primary'}
                onClick={incrementItem}
               />
        }
    </div>
  )
};