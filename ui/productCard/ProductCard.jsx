"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
// component
import AddToListBtn from "../../components/addToListBtn";
import ProductSelectColor from "./productSelectColor";
import ProductSelectSize from "./productSelectSize"
import AddToCart from "../../app/product/_components/AddToCart";
// lip
import getCurrency from "../../lip/getCurrency";
import { arrayGroupBykey } from "../../lip/arrayGroupBykey";
// icons
import { IoIosArrowForward,IoIosArrowBack} from "react-icons/io";


function ProductCard({product}) {

    const {id,name,priceInCent,images,sizes} = product;

    const productImages = arrayGroupBykey(images,'color');

    
    const [selectedColor,setSelectedColor] = useState(images[0]?.color);
    const [selectedSize,setSelectedSize] = useState(null);
    const [imagesIndex,setImagesIndex] = useState(0)
    console.log(productImages[selectedColor])

    const className = {
            card: 'w-[220px] rounded-lg border border-green-100 cursor-pointer hover:border-green-300 relative',
            image: 'w-[220px] max-h-[220px] max-w-[220px]',
            heart: 'absolute top-2 right-2',
            iamgebaginationBtn: 'bg-green-100 text-green-900 absolute top-1/2 hover:scale-125 -translate-y-1/2 w-6 h-6 rounded-full flex items-center justify-center'
    }
    // href={`/product/${id}`}

    const handleNext = ()=> {
        if(imagesIndex < productImages[selectedColor]?.length - 1) {
            console.log('clicked me')
            setImagesIndex(prev=> prev + 1)
        }
    };

    useEffect(()=> {
        setImagesIndex(0)
    },[selectedColor])

   return (
    <div className={className.card}>
        <div  className="h-[220px] max-h-[220px] overflow-hidden relative">
            <div className="" style={{transform: `translateY(-${imagesIndex * 220}px)`}}>
                {   
                    productImages[selectedColor]?.map(({imagePath,id})=> (
                        <Image 
                            key={id}
                            className={className.image} 
                            src={imagePath.replace("public",'')}
                            alt='product image'
                            width={220}
                            height={200}
                        />
                        
                    ))
                    
                }
            </div>
            <button
                onClick={handleNext} 
                className={`${className.iamgebaginationBtn} right-2`}>
              <IoIosArrowForward sizes={16} />
            </button>
            <button
                onClick={handleNext} 
                className={`${className.iamgebaginationBtn} left-2`}>
              <IoIosArrowBack sizes={16}/>
            </button>
        </div>
        <div className={className.heart}>
            <AddToListBtn product={product} />
        </div>
        <div className="p-3">
            <div className="text-center pb-2">
                <h2 className="text-lg font-bold text-green-950">
                    {getCurrency(priceInCent)}
                </h2>
                <h4 
                    className="text-md font-medium text-green-800 "
                    >{name}
                </h4>
            </div>
            <div className="flex justify-between gap-3 pb-2">
                <ProductSelectColor
                   productImages={productImages}
                   selectedColor={selectedColor}
                   setSelectedColor={setSelectedColor}
                />
                <ProductSelectSize
                sizes={sizes}
                selectedSize={selectedSize}
                setSelectedSize={setSelectedSize}
                 />
            </div>
            <AddToCart 
                product={product} 
                selectedColor={selectedColor}
                selectedSize={selectedSize} 
                />
        </div>
    </div>
  )
}

export default ProductCard