"use client"
import Image from "next/image";
import { useContext } from "react";
import { ProductDetailsContext } from "./ProductDetails";


function SelectImage() {

const {product:images,selectedColor,setSelectedColor} = useContext(ProductDetailsContext);

const productImages = arrayGroupBykey(images,'color');

  return (

    <section className="flex gap-3 items-start py-4 border-b border-gray-100">
        <h5 className="flex capitalize items-center gap-3 pb-2 text-lg font-bold text-green-950"> 
            colors :
        </h5>
        <section className="">
            <h6 
                style={{backgroundColor:selectedColor}} 
                className="w-full mb-2 h-[15px] rounded-full border-green-800 border"
                >
            </h6>
            <div className="flex items-center gap-3">
                {
                    Object.entries(productImages)?.map(([color,image])=> (
                        <Image 
                            onClick={()=> setSelectedColor(color)}
                            className={`max-h-[60px] min-h-[60px] max-w-[60px] rounded-md border border-gray-100 shadow-md cursor-pointer ${color === selectedColor ? 'border border-green-600 rounded-md' : ''}`}
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