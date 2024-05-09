import Image from "next/image";
import getCurrency from "../../_lip/getCurrency";

// import { RiStarSLine } from "react-icons/ri";
import { RiStarSFill } from "react-icons/ri";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import { IoMdHeartEmpty } from "react-icons/io";

import imagePath from "../../../public/products/1a392cce-01bd-41f8-8cd9-3688080faae6-61vj2VbUKNL._AC_SY500_.jpg"

function ProductCard({product}) {

   const className = {
        card: 'w-[280px] rounded-lg overflow-hidden border border-zinc-700 bg-gray-100',
        image: 'w-[280px] h-[280px]',
        heart: 'absolute top-5 right-5'
   }

  return (
    <div className={className.card}>
        <div className="relative">
            <Image 
                className={className.image} 
                src={ imagePath} 
                alt={product.name}
                width={230}
                height={230}
               />
            <div className={className.heart}>
               <IoMdHeartEmpty/>
            </div>
        </div>
        <div className="p-3">
            <div className="">
                <h4>{product.name}</h4>
            </div>
            <div className="flex items-center gap-2">
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
            </div>
            <div className="">
                <p>{getCurrency(product?.priceInCent)}</p>
            </div>
            <div className="flex items-center gap-3">
                <div className="">
                    <MdOutlineShoppingCart />
                </div>
                <div className="">
                    <FiMinus />
                </div>
                <div className="">
                    1
                </div>
                <div className="">
                    <GoPlus />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCard