import Image from "next/image";
import { useContext } from "react";
import Link from "next/link";
// components
import{ QuantityBtn} from "../buttons/quantityBtn";
import { ButtonWithIcon } from "../buttons/buttons";
// redux store
import { useAppDispatch } from "../../store/store";
import { removeItemFromCart } from "../../store/features/cartSlice";
// app context
import { AppContext } from "../../app/contextProvider";
// lip
import {getCurrency} from "../../lip/getCurrency";
// icons
import { MdOutlineDeleteOutline } from "react-icons/md";

export const CartItemsCard = ({product,isOrdered = false})=> {

    console.log(product)

    const dispatch = useAppDispatch();

    const {innerWidth} = useContext(AppContext);
    const {name,id,color,colorName,size,imagePath,priceInHalala,quantity,offerPriceInHalala} = product;

    const linkHref = {
        pathname : `/product/${id}`,
        query: {colorName,size}
     };

     const className = {
        text: 'text-xm sm:text-sm text-teal-900 dark:text-teal-100'
     }


  return (
    <div className="p-3 rounded-md shadow-md border border-gray-100 dark:border-stone-900 w-full">
        <div className={`flex gap-3`}>
            <Link 
                href={linkHref}
                className="flex items-center justify-center sm:mb-0">
                <Image
                    className={`${innerWidth > 550 ? 'max-h-[200px] min-h-[200px] max-w-[150px] min-w-[150px]' :'max-h-[150px] min-h-[150px] max-w-[100px] min-w-[100px]'} bg-white object-contain rounded-md`}
                    src={imagePath}
                    width={innerWidth > 550 ? 150 : 100}
                    height={innerWidth > 550 ? 200 : 150}
                    alt='product image'
                    />
            </Link>
            <section className="w-full">
                <Link href={linkHref}>
                    <h4 
                        className="text-sm sm:text-lg font-bold text-teal-950 dark:text-teal-50 hover:opacity-95 line-clamp-3"
                        >{name}
                    </h4>
                </Link>
                <div className="flex justify-between items-center mt-3 w-full">
                    <div className="">
                        <div className="lg-pt-0">
                            <h5 className={`${className.text} ${offerPriceInHalala ? 'line-through text-[10px] sm:text-[10px]' : ''}`}>
                                {getCurrency(priceInHalala)} × {quantity}
                            </h5>
                            {
                                offerPriceInHalala ? 
                                <h5 className={className.text}>
                                {getCurrency(offerPriceInHalala)} × {quantity}
                            </h5>
                                :null
                            }
                        </div>
                        <div className="">
                            <h5 className={className.text}>
                                color:  <small>{colorName}</small> 
                            </h5>
                            <h5 className={className.text}>
                                size:  <small>{size}</small>
                            </h5>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between gap-2">
                        {
                            isOrdered ? null :
                            <QuantityBtn 
                                id={id} 
                                color={color} 
                                size={size} 
                                />
                        }
                            {
                                (quantity > 1 && !isOrdered )?
                                <div className="">
                                    <ButtonWithIcon 
                                        text='' 
                                        Icon={MdOutlineDeleteOutline} 
                                        type='delete'
                                        onClick={()=> dispatch(removeItemFromCart({id,color,size}))}
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
