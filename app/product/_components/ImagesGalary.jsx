"use client"
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { ProductDetailsContext } from "./ProductDetails";

import {arrayGroupBykey} from "../../../lip/arrayGroupBykey";
function ImagesGalary() {

    const {product:{images},selectedColor} = useContext(ProductDetailsContext);

    const productImages = arrayGroupBykey(images,'color');
    const [selectedImage,setSelectedImage] = useState(productImages[selectedColor][0]?.imagePath);

    useEffect(()=> {

        setSelectedImage(productImages[selectedColor][0]?.imagePath);

    },[selectedColor])


  return (
    <div className="p-6 mb-3 flex-1">
        <div className="flex items-center gap-3 sticky top-[80px] left-0">
            <div className="flex items-center justify-center gap-2 flex-col ">
                {
                    productImages[selectedColor]?.map((img)=> (
                        img.color === selectedColor ? 
                        <Image 
                            className={`shadow-md rounded-md mb-2 min-w-[100px] max-w-[100px]  min-h-[100px] max-h-[100px] ${selectedImage === img?.imagePath && 'border-2 border-teal-400 scale-110'} hover:scale-105 cursor-pointer`}
                            onClick={()=> setSelectedImage(img.imagePath)} 
                            key={img.id} 
                            src={img?.imagePath?.replace("public","")} 
                            width={60} height={60} 
                            />
                            :''

                    ))
                }
            </div>
            <div className="min-h-[500px] max-h-[500px] flex items-center justify-center">
                <Image 
                    className="rounded-md min-h-[500px] max-h-[500px] bg-white"
                    src={selectedImage?.replace("public","")} 
                    width={500} height={500}
                    alt="product image"
                    />
            </div>
        </div>


    </div>
  )
}

export default ImagesGalary