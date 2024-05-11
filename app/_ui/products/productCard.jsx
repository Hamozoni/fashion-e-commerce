import Image from "next/image";
import getCurrency from "../../_lip/getCurrency";

// import { RiStarSLine } from "react-icons/ri";
import { RiStarSFill } from "react-icons/ri";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import { IoMdHeartEmpty } from "react-icons/io";

import imagePath from "../../../public/products/1a392cce-01bd-41f8-8cd9-3688080faae6-61vj2VbUKNL._AC_SY500_.jpg"
import Link from "next/link";

function ProductCard({product}) {

   const className = {
        card: 'w-[280px] rounded-lg overflow-hidden border border-green-100 cursor-pointer hover:border-green-300 ',
        image: 'w-[280px] h-[280px]',
        heart: 'absolute top-5 right-5'
   }

  return (
    <div className={className.card}>
        <Link href={`/product/${product.id}`} className="relative">
            <Image 
                className={className.image} 
                src={ imagePath} 
                alt={product.name}
                width={230}
                height={230}
               />
            <div className={className.heart}>
               <IoMdHeartEmpty size={30}/>
            </div>
        </Link>
        <div className="p-3">
            <ul className="flex justify-center gap-2 overflow-auto">
                {
                    product?.images?.map((color)=> (
                        <li 
                            style={{backgroundColor: color.color }} 
                            key={color.color}
                            className="w-[35px] h-[35px] rounded-full border border-green-900"
                            >

                        </li>
                    ))
                }
            </ul>
            <div className="text-center">
                <h3 className="text-xl font-bold text-green-950">{product?.brand}</h3>
                <h4 className="text-md font-bold text-green-950">{product.name}</h4>
            </div>

            <div className="flex items-center justify-between">
                <h5 className="text-md font-medium text-green-950">
                    {getCurrency(product?.priceInCent)}
                </h5>
                <div className="flex items-center py-2 text-yellow-400">
                    <RiStarSFill size={22} />
                    <RiStarSFill size={22} />
                    <RiStarSFill size={22} />
                    <RiStarSFill size={22} />
                    <RiStarSFill size={22} />
                </div>
            </div>
        
            <div className="text-green-900 rounded-lg flex items-center justify-center py-2 border border-green-200 hover:bg-green-950 hover:text-green-100">
                <MdOutlineShoppingCart size={20} />
            </div>
            
        </div>
    </div>
  )
}

export default ProductCard