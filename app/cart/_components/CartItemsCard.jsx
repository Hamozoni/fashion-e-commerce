import Image from "next/image";
import getCurrency from "../../../lip/getCurrency";
import QuantityBtn from "../../../components/QuantityBtn";
import { removeItemFromCart } from "../../../store/features/cartSlice";
import { useAppDispatch } from "../../../store/store";
import { MdOutlineDeleteOutline } from "react-icons/md";
import Link from "next/link";
import { ButtonWithIcon } from "../../../components/buttons";

function CartItemsCard({product}) {
    const dispatch = useAppDispatch();

    const removeItem = ()=> {
        dispatch(removeItemFromCart({
            id: product.id,
            selectedColor: product.selectedColor,
            selectedSize: product.selectedSize
        }))
    }

  return (
    <div className="sm:flex gap-3 items-center p-3 mb-5 rounded-md shadow-sm border border-gray-50 w-full">
        <Link 
            href={`/product/${product?.id}`}
            className="flex items-center justify-center mb-3 sm:mb-0">
            <Image
                className="" 
                src={product?.image?.replace("public","")}
                width={150}
                height={150}
                alt='product image'
                 />
        </Link>
        <section>
            <Link href={`/product/${product?.id}`}>
                <h4 
                    className="pb-2 font-bold text-green-900 text-center hover:text-green-800"
                    >{product?.name}
                </h4>
            </Link>
            <div className="flex gap-5 items-center flex-wrap justify-center">
                <div className="border-r px-2 border-green-100">
                    <h6 className="flex items-center gap-2"> color: 
                        <p 
                            style={{backgroundColor: product?.selectedColor}}
                            className="w-[35px] h-[15px] rounded-full"
                            >
                        </p>
                    </h6>
                    <h6 className="flex items-center gap-2"> size: 
                        <p 
                            className="w-[35px] h-[35px] rounded-full"
                            >
                                {product?.selectedSize}
                        </p>
                    </h6>
                </div>
                <div className="border-r px-2 border-green-100">
                    <h6>price</h6>
                    <h4>{getCurrency(product?.priceInCent)}</h4>
                </div>
                <QuantityBtn 
                    id={product.id} 
                    selectedColor={product.selectedColor} 
                    selectedSize={product.selectedSize} 
                    />
                <div className="border-r px-2 border-green-100">
                    <h6>total price</h6>
                    <h4>{getCurrency(product?.priceInCent * product?.quantity)}</h4>
                </div>
                <ButtonWithIcon 
                    text='reove'
                    type='delete'
                    Icon={MdOutlineDeleteOutline}
                    onClick={removeItem}
                    />
            </div>
        </section>
    </div>
  )
}

export default CartItemsCard