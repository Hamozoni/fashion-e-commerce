"use client";
import Image from "next/image";
import { useContext} from "react";

import { ProductDetailsContext } from "./poductDetails";

export function ImagesGalary() {

    const {product:{images,imagePath,colorName,color},setProduct} = useContext(ProductDetailsContext)

  return (
    <div className="mb-3 flex-1">
        <div className="flex items-center gap-2 sm:gap-5 sticky top-[80px] left-0">
            <div className="overflow-y-auto md:min-w-fit max-h-[500px]">
                <div className="flex items-center justify-center gap-2 flex-col min-w-fit p-2">
                    {
                        images?.map((img)=> (
                            img.colorName === colorName ? 
                            <Image 
                                className={`shadow-md rounded-md mb-2 md:min-w-[100px] md:max-w-[100px] bg-white md:min-h-[100px] md:max-h-[100px] ${imagePath === img?.imagePath && 'border-4 contrast-50'} hover:scale-105 cursor-pointer`}
                                style={{borderColor: color}}
                                onClick={()=> setProduct(prev=> {
                                    const imagePath = img?.imagePath;

                                    return {...prev,imagePath}
                                })} 
                                key={img.id} 
                                src={img?.imagePath} 
                                width={60} height={60} 
                                alt='product image'
                                />
                                : null

                        ))
                    }
                </div>
            </div>
            <div className="min-h-[500px] max-h-[500px] flex items-center justify-center flex-1">
                <Image 
                    className="rounded-md min-h-[500px] max-h-[500px] bg-white"
                    src={imagePath} 
                    width={500} height={500}
                    alt="product image"
                    />
            </div>
        </div>


    </div>
  )
};
