import Image from "next/image";
import getCurrency from "../../_lip/getCurrency";

// import { RiStarSLine } from "react-icons/ri";
import { RiStarSFill } from "react-icons/ri";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import { IoMdHeartEmpty } from "react-icons/io";

function productCard({product}) {

   const className = {
        card: 'w-[200px] rounded-lg overflow-hidden border border-zinc-700 bg-gray-100',
        image: 'w-[200px] h-[300px]',
        heart: 'absolute top-5 right-5'
   }
  return (
    <div className={className.card}>
        <div className="relative">
            <Image 
                className={className.image} 
                src={product.images.imagePath.images[0]} 
                alt={product.name}
               />
            <div className={className.heart}>
               <IoMdHeartEmpty/>
            </div>
        </div>
        <div className="">
            <div className="">
                <h4>{product.name}</h4>
            </div>
            <div className="">
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
            </div>
            <div className="">
                <p>{getCurrency(product?.priceInCent)}</p>
            </div>
            <div className="">
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

export default productCard