"use client"
import Image from "next/image";
import { useContext } from "react";
import { ProductDetailsContext } from "./ProductDetails";
import {arrayGroupBykey} from "../../../lip/arrayGroupBykey"


function SelectImage() {

const {product:{images},selectedColor,setSelectedColor} = useContext(ProductDetailsContext);

const productImages = arrayGroupBykey(images,'color');

  return (

    <section className="py-4">
        <h5 className="flex capitalize items-center gap-3 pb-2 text-lg font-bold text-green-950"> 
            colors :
        </h5>
        <section className="">
            <div className="flex items-center gap-3">
                {
                    Object.entries(productImages)?.map(([color,image])=> (
                        <Image 
                            onClick={()=> setSelectedColor(color)}
                            className={`max-h-[60px] min-h-[60px] max-w-[60px] rounded-md border border-gray-100 shadow-md cursor-pointer ${color === selectedColor ? 'border-2 border-teal-600' : ''}`}
                            key={image[0].id} 
                            src={image[0]?.imagePath.replace("public","")}
                            width={60} 
                            height={60}
                            />
                    ))
                    
                }

            </div>
        </section>
    </section>
  )
}

export default SelectImage;