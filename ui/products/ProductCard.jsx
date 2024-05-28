
import Image from "next/image";
import getCurrency from "../../lip/getCurrency";

// import { RiStarSLine } from "react-icons/ri";
import { RiStarSFill } from "react-icons/ri";
// import { FiMinus } from "react-icons/fi";
// import { GoPlus } from "react-icons/go";
import { IoMdHeartEmpty } from "react-icons/io";

import Link from "next/link";

function ProductCard({product}) {


   const className = {
        card: 'w-[280px] rounded-lg overflow-hidden border border-green-100 cursor-pointer hover:border-green-300 ',
        image: 'w-[280px] max-h-[280px] max-w-[280px]',
        heart: 'absolute top-5 right-5',
   }

 let imagesPath = []

  return (
    <div className={className.card}>
        <Link href={`/product/${product.id}`} className="relative">
            <Image 
                className={className.image} 
                src={product.images[1].imagePath.replace("public",'')}
                alt={product.name}
                width={280}
                height={280}
               />
            <div className={className.heart}>
               <IoMdHeartEmpty size={30}/>
            </div>
        </Link>
        <div className="p-3">
            <ul className="flex justify-center gap-2 overflow-auto">
                {
                    product?.images?.map((color)=> {
                        
                        if(!imagesPath.includes(color.color)){
                            imagesPath.push(color.color)
                            return (
                                <li 
                                    style={{backgroundColor: color.color }} 
                                    key={color.color}
                                    className="w-[25px] h-[25px] rounded-full border border-green-900"
                                    >
    
                                </li>
                            )
                        }

                    })
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
        </div>
    </div>
  )
}

export default ProductCard