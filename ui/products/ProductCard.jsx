"use client";
import Link from "next/link";
import Image from "next/image";
// component
import AddToListBtn from "../../components/addToListBtn";
// lip
import getCurrency from "../../lip/getCurrency";
import { arrayGroupBykey } from "../../lip/arrayGroupBykey";
import { useState } from "react";
// icons
import { IoMdArrowDropdown } from "react-icons/io";

function ProductCard({product}) {

    const {id,name,priceInCent,images} = product;

    const productImages = arrayGroupBykey(images,'color');

    const [selectedColor,setSelectedColor] = useState(images[0]?.color);
    const [selectedSize,setSelectedSize] = useState(null);

    const className = {
            card: 'w-[220px] rounded-lg overflow-hidden border border-green-100 cursor-pointer hover:border-green-300 relative',
            image: 'w-[220px] max-h-[220px] max-w-[220px]',
            heart: 'absolute top-2 right-2',
    }

   return (
    <div className={className.card}>
        <Link href={`/product/${id}`}>
            <Image 
                className={className.image} 
                src={images[1].imagePath.replace("public",'')}
                alt={name}
                width={220}
                height={200}
               />
        </Link>
        <div className={className.heart}>
            <AddToListBtn product={product} />
        </div>
        <div className="p-3">
            <div className="text-center">
                <h2 className="text-lg font-bold text-green-950">
                    {getCurrency(priceInCent)}
                </h2>
                {/* <h3 
                    className="text-sl font-bold text-green-800"
                    > brand: <small> {brand}</small>
                </h3> */}
                <h4 
                    className="text-md font-medium text-green-800 pb-2"
                    >{name}
                </h4>
            </div>
            <div className="flex items-center justify-between">
                <div className="">
                    <div className="flex items-center gap-3 p-1 border border-green-100 rounded-md">
                        <h6 className={`${selectedColor ? 'w-5 h-5 rounded-md' :''}`} 
                            style={selectedColor?{backgroundColor: selectedColor} : ''}
                            >
                            {selectedColor ? '' :'color: '}
                        </h6>
                        <IoMdArrowDropdown />
                    </div>
                    <ul className="p-2 bg-green-50 rounded-md">
                        {
                            Object.entries(productImages)?.map(([color,image])=> (
                                <li 
                                    className="mb-1"
                                    key={color} 
                                    onClick={()=> setSelectedColor(color)}
                                    >
                                    <Image 
                                       src={image[0]?.imagePath.replace("public","")}
                                       width={40}
                                       height={40}
                                     />
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="">
                    <h6>{selectedSize ? '' :'size: '}</h6>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCard