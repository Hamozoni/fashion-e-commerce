"use client"
import Image from "next/image";
import { useEffect, useState } from "react";


function ImagesGalary({productImages,selectedColor}) {

    const [selectedImage,setSelectedImage] = useState(productImages[selectedColor][0]?.imagePath);

    useEffect(()=> {

        setSelectedImage(productImages[selectedColor][0]?.imagePath);

    },[selectedColor])


  return (
    <div className="p-6 mb-3 flex-1 shadow-md rounded-md">
        <div className="flex items-center gap-3 sticky top-[80px] left-0">
            <div className="flex items-center justify-center gap-2 flex-col ">
                {
                    productImages[selectedColor]?.map((img)=> (
                        img.color === selectedColor ? 
                        <Image 
                            className={`rounded-md border border-gray-100 shadow-md mb-2 min-w-[60px] max-w-[60px]  min-h-[60px] max-h-[60px] ${selectedImage === img?.imagePath && 'border border-green-900'} cursor-pointer`}
                            onClick={()=> setSelectedImage(img.imagePath)} 
                            key={img.id} 
                            src={img?.imagePath?.replace("public","")} 
                            width={60} height={60} 
                            />
                            :''

                    ))
                }
            </div>
            <div className="min-h-[500px] max-h-[500px] flex items-center justify-center rounded-md border border-gray-100 shadow-md">
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