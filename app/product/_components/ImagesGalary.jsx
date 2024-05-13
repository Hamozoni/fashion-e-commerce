"use client"
import Image from "next/image";
import { useState } from "react";


function ImagesGalary({productImages,selectedColor}) {

    const [selectedImage,setSelectedImage] = useState(productImages[0].imagePath);


  return (
    <div className="pb-6 border-b border-gray-200">
        <div className="flex items-center gap-3 sticky top-[80px] left-0">
            <div className="flex items-center justify-center gap-2 flex-col">
                {
                    productImages?.map((img)=> (
                        img.color === selectedColor ? 
                        <Image 
                            className={`rounded-md mb-2 min-w-[60px] max-w-[60px] ${selectedImage === img.imagePath && 'border border-green-900'} cursor-pointer`}
                            onClick={()=> setSelectedImage(img.imagePath)} 
                            key={img.id} 
                            src={img.imagePath.replace("public","")} 
                            width={60} height={60} 
                            />
                            :''

                    ))
                }
            </div>
            <div className="">
                <Image 
                    className="rounded-md"
                    src={selectedImage.replace("public","")} 
                    width={500} height={800}
                    alt="product image"
                    />
            </div>
        </div>


    </div>
  )
}

export default ImagesGalary