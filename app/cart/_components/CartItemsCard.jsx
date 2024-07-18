import Image from "next/image";
import getCurrency from "../../../lip/getCurrency";
import QuantityBtn from "../../../components/QuantityBtn";
import { removeItemFromCart } from "../../../store/features/cartSlice";
import { useAppDispatch } from "../../../store/store";
import { MdOutlineDeleteOutline } from "react-icons/md";
import Link from "next/link";
import { ButtonWithIcon } from "../../../components/buttons";
import { AppContext } from "../../contextProvider";
import { useContext } from "react";

const CartItemsCard = ({product,isCheckout = false})=> {

    const dispatch = useAppDispatch();

    const {innerWidth} = useContext(AppContext)

    const removeItem = ()=> {
        dispatch(removeItemFromCart({
            id: product.id,
            color: product.color,
            size: product.size
        }))
    }

    const className = {
        tableBodyRow :'p-3 border border-gray-100'
    }

  return (
    <div className="p-3 mb-8 border-l-2 border-l-teal-400 border-t-2 border-t-teal-400 rounded-md shadow-md border border-gray-100 w-full">
         <Link href={`/product/${product?.id}`}>
            <h4 
                className="text-md sm:text-xl font-bold text-teal-950 text-center hover:text-teal-800"
                >{product?.name}
            </h4>
       </Link>
        <div className={`${isCheckout ? '':'flex'} gap-3 items-center`}>
            {
                isCheckout ? null :
                <Link 
                    href={`/product/${product?.id}`}
                    className="flex items-center justify-center mb-3 sm:mb-0">
                    <Image
                        className={`${innerWidth > 550 ? 'max-h-[200px]' :'max-h-[150px]'}`}
                        src={product?.imagePath}
                        width={innerWidth > 550 ? 150 : 100}
                        height={innerWidth > 550 ? 200 : 150}
                        alt='product image'
                        />
                </Link>
            }
            <section>
                <div className="sm:flex justify-between gap-3">
                    <table className="rounded-md overflow-hidden mx-auto sm:mx-0">

                        <thead className="pb-3">
                            <tr className="text-teal-950 text-md sm:text-lg font-bold">
                                <th className={className?.tableBodyRow}>color </th>
                                <th className={className?.tableBodyRow}>size</th>
                                <th className={className?.tableBodyRow}>price</th>
                                <th className={className?.tableBodyRow}>total</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr className="text-teal-900 text-sm sm:text-md font-bold">
                                <td className={className?.tableBodyRow}> 
                                    <p 
                                        style={{backgroundColor: product?.color}}
                                        className="w-[35px] h-[10px] rounded-full"
                                        >
                                    </p> 
                                </td>
                                <td className={className?.tableBodyRow}>{product?.size}</td>
                                <td className={className?.tableBodyRow}>{getCurrency(product?.priceInHalala)}</td>
                                <td className={className?.tableBodyRow}>{getCurrency(product?.priceInHalala * product?.quantity)}</td>

                            </tr>
                        </tbody>
                    </table>
                    <div className="flex sm:flex-col justify-between pt-3 lg-pt-0">
                        <QuantityBtn 
                            id={product.id} 
                            color={product.color} 
                            size={product.size} 
                            />
                        <div className="max-w-24">
                            <ButtonWithIcon 
                                text='reove'
                                type='delete'
                                Icon={MdOutlineDeleteOutline}
                                onClick={removeItem}
                                />
                        </div>
                    </div>
                </div>
            </section>
        </div>

    </div>
  )
};

export default CartItemsCard
