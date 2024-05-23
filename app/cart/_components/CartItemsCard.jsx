import Image from "next/image"

function CartItemsCard({product}) {
  return (
    <div>
        <div className="">
            <Image src={product.img.replace("public","")} />
        </div>
        <div className="">
            <h4>{product.product.name}</h4>
            <h6> color: 
                <span 
                    style={{background: product.color}}
                    className="w-[35px] h-[35px] rounded-full"
                    >
                </span>
            </h6>
            <h6> size: 
                <span 
                    className="w-[35px] h-[35px] rounded-full"
                    >
                        {product.size}
                </span>
            </h6>
        </div>
        <div className=""></div>
        <div className=""></div>
    </div>
  )
}

export default CartItemsCard