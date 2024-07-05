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
import { useRouter } from "next/navigation";


function ProductCard({product}) {

    const {id,name,priceInCent,images,sizes} = product;

    const productImages = arrayGroupBykey(images,'color');

    
    const [selectedColor,setSelectedColor] = useState(images[0]?.color);
    const [selectedSize,setSelectedSize] = useState(sizes[0]?.name);
    const [imagesIndex,setImagesIndex] = useState(0)
    const router = useRouter()

    const className = {
            card: 'w-[344px] rounded-lg border border-teal-100 cursor-pointer hover:border-teal-200 relative p-3 bg-teal-50',
            image: 'w-fit flex-1 min-w-[320px] max-h-[370px] max-w-[320px]',
            heart: 'absolute top-4 right-4',
            iamgebaginationBtn: 'bg-green-50 text-green-900 absolute top-1/2 hover:scale-125 -translate-y-1/2 w-8 h-10 flex items-center justify-center'
    }


    const handleNext = ()=> {
        if(imagesIndex < productImages[selectedColor]?.length - 1) {
            console.log('clicked me')
            setImagesIndex(prev=> prev + 1)
        }
    };

    const handlePrev = ()=> {
        if(imagesIndex > 0) {
            setImagesIndex(prev=> prev - 1)
        }
    }

    useEffect(()=> {
        setImagesIndex(0)
    },[selectedColor])

   return (
    <div className={className.card}>
        <div  className=" w-[320px] overflow-hidden relative group">
            <div
                onClick={()=> router.push(`/product/${id}`)}
                className="flex items-center" 
                style={{transform: `translateX(-${imagesIndex * 100}%)`}}
                >
                {   
                    productImages[selectedColor]?.map(({imagePath,id})=> (
                        <div key={id}
                           className={className.image}>
                            <Image 
                                className="rounded-md"
                                src={imagePath.replace("public",'')}
                                alt='product image'
                                width={320}
                                height={370}
                            />

                        </div>
                        
                    ))
                    
                }
            </div>
            {
                (imagesIndex === productImages[selectedColor]?.length - 1) ? null :
                <button
                    onClick={handleNext} 
                    className={`${className.iamgebaginationBtn} right-0 translate-x-full group-hover:translate-x-0`}>
                <IoIosArrowForward sizes={20} />
                </button>
            }
            {
                imagesIndex === 0 ? null :
                <button
                    onClick={handlePrev} 
                    className={`${className.iamgebaginationBtn} left-0 -translate-x-full group-hover:translate-x-0`}>
                <IoIosArrowBack sizes={20}/>
                </button>
            }
                    <ul className=" absolute left-0 bottom-0 w-full translate-y-full group-hover:translate-y-0 flex items-center justify-center gap-2 py-3">
                {
                    productImages[selectedColor]?.map(({id,color},index)=> (
                        <li 
                            onClick={()=> setImagesIndex(index)}
                            key={id} 
                            className=" w-4 h-4 rounded-full border border-teal-500 hover:scale-125 shadow-md" 
                            style={ index === imagesIndex ? { backgroundColor: color,width: '24px',height: '24px'}: {}}
                            >
                        </li>

                    ))
                }
        </ul>
        </div>
        <div className={className.heart}>
            <AddToListBtn product={product} />
        </div>
        <div className="p-3">
            <div className="pb-2">
                <h2 className="text-lg font-bold text-green-950 text-center ">
                    {getCurrency(priceInCent)}
                </h2>
                <Link
                    href={`/product/${id}`}
                    className="text-md font-medium text-green-800 hover:text-green-700"
                    >{name}
                </Link>
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