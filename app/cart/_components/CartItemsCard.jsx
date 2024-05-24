import Image from "next/image";
import getCurrency from "../../_lip/getCurrency";

function CartItemsCard({product}) {

//   const className = {

//   }
  return (
    <div className="flex gap-3 p-3 border-b border-green-100 flex-shrink-0">
        <div className="">
            <Image 
                src={product?.image?.replace("public","")}
                width={150}
                height={150}
                alt='product image'
                 />
        </div>
        <div className="">
            <h4>{product?.name}</h4>
            <h6> color: 
                <span 
                    style={{background: product?.selectedColor}}
                    className="w-[35px] h-[35px] rounded-full"
                    >
                </span>
            </h6>
            <h6> size: 
                <span 
                    className="w-[35px] h-[35px] rounded-full"
                    >
                        {product?.selectedSize}
                </span>
            </h6>
        </div>
        <div className="">
            <h6>price</h6>
            <h4>{getCurrency(product?.priceInCent)}</h4>
        </div>
        <div className="">
            <h6>quantity</h6>
            <h4>{product?.quantity}</h4>
        </div>
        <div className="">
            <h6>total price</h6>
            <h4>{getCurrency(product?.priceInCent * product?.quantity)}</h4>
        </div>
    </div>
  )
}

export default CartItemsCard