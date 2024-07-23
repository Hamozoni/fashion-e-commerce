import Image from "next/image";
import { useContext } from "react";
import Link from "next/link";
// components
import{ QuantityBtn} from "../buttons/quantityBtn";
import { ButtonWithIcon } from "../../../components/buttons";
// redux store
import { useAppDispatch } from "../../store/store";
import { removeItemFromCart } from "../../store/features/cartSlice";
// app context
import { AppContext } from "../../app/contextProvider";
// lip
import {getCurrency} from "../../lip/getCurrency";
// icons
import { MdOutlineDeleteOutline } from "react-icons/md";

export const CartItemsCard = ({product,isCheckout = false})=> {

    const dispatch = useAppDispatch();

    const {innerWidth} = useContext(AppContext);
    const {name,id,color,colorName,size,imagePath,priceInHalala,quantity} = product;

    const linkHref = {
        pathname : `/product/${id}`,
        query: {color,colorName,size,imagePath,priceInHalala}
     };


  return (
    <div className="p-3 mb-8 sm:border-l-2 sm:border-l-teal-400 sm:border-t-2 sm:border-t-teal-400 rounded-md shadow-md border border-gray-100 w-full">
        <div className={`${isCheckout ? '':'flex'} gap-3`}>
            {
                isCheckout ? null :
                <Link 
                    href={linkHref}
                    className="flex items-center justify-center mb-3 sm:mb-0">
                    <Image
                        className={`${innerWidth > 550 ? 'max-h-[200px]' :'max-h-[150px]'}`}
                        src={imagePath}
                        width={innerWidth > 550 ? 150 : 100}
                        height={innerWidth > 550 ? 200 : 150}
                        alt='product image'
                        />
                </Link>
            }
            <section>
                <Link href={linkHref}>
                        <h4 
                            className="text-lg sm:text-xl font-bold text-teal-950 hover:text-teal-800"
                            >{name}
                        </h4>
                </Link>
                <div className="flex justify-between items-center mt-3">
                    <div className="">
                        <div className="flex gap-3 items-center lg-pt-0">
                            <h5 className="text-lg text-teal-900">
                                {getCurrency(priceInHalala)} × {quantity}
                            </h5>
                        </div>
                        <div className="">
                            <h5 className="text-lg text-teal-900">
                                color:  <small>{colorName}</small> 
                            </h5>
                            <h5 className="text-lg text-teal-900">
                                size:  <small>{size}</small>
                            </h5>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between gap-2">
                        <QuantityBtn 
                            id={id} 
                            color={color} 
                            size={size} 
                            />
                            {
                                quantity > 1 ?
                                <div className="">
                                    <ButtonWithIcon 
                                        text='' 
                                        Icon={MdOutlineDeleteOutline} 
                                        type='delete'
                                        onClick={()=> dispatch(removeItemFromCart(id,color,size))}
                                    />
                                </div>
                                : null
                            }
                    </div>
                </div>
            </section>
        </div>

    </div>
  )
};
