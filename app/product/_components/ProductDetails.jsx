"use client"
import { BsCashCoin } from "react-icons/bs";
import { TbArrowBackUp } from "react-icons/tb";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdOutlineLockPerson } from "react-icons/md";
import getCurrency from "../../_lip/getCurrency"
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
let imageColor = [];

function ProductDetails({product,selectedColor}) {

    const [selectedSize,setSelectedSize] = useState('')

    const about = useRef();

    useEffect(()=> {
        about.current.innerText = product?.aboutThisItem
    },[]);

    const className = {
        infoLi: 'flex items-center text-center bg-gray-100 rounded-lg p-2  flex-col text-sm font-medium text-green-950 max-w-[160px]',
        infoLiIcon:'text-[30px] bg-gray-100  p-2 rounded-full'
    }



  return (
    <div>
        <div className="pb-2">
            <h4 className="text-lg font-bold text-green-950">{product?.brand}</h4>
            <h5 className="text-lg font-medium text-green-950">{product?.name}</h5>
        </div>
        <div className="flex items-center  text-green-950 gap-3">
          <h4 className='text-lg font-bold'>{getCurrency(+product.priceInCent)}</h4>
          <p>Inclusive of VAT</p>

        </div>
        <div className="py-4 border-b border-gray-200">
            <ul className="flex items-center gap-3 flex-wrap">
                <li className={className.infoLi}>
                    <BsCashCoin className={className.infoLiIcon} size={40}/>
                    <span>cash on delivery</span>
                </li>
                <li className={className.infoLi}>
                    <TbArrowBackUp className={className.infoLiIcon} size={40}/>
                    <span>7 days returnable</span>
                </li>
                <li className={className.infoLi}>
                    <CiDeliveryTruck className={className.infoLiIcon} size={40}/>
                    <span>delivered by system</span>
                </li>
                <li className={className.infoLi}>
                    <MdOutlineLockPerson className={className.infoLiIcon} size={40}/>
                    <span>secure transaction</span>
                </li>
            </ul>
        </div>
        <section className="py-4 border-b border-gray-200">
           <h5 className="pb-2 text-lg font-medium text-green-950">sizes : </h5>
           <ul className="flex items-center gap-1">
               {
                 product?.sizes?.map((size)=> (
                    <li 
                        className={`${selectedSize === size?.name ? " border-green-600 font-medium bg-gray-100": ""} hover:bg-gray-100 border rounded-lg p-3 py-1 cursor-pointer`}
                        onClick={()=> setSelectedSize(size?.name )}
                        key={size.id}
                        >
                        { size?.name }
                    </li>

                 ))
               }
           </ul>
        </section>
        <section className=" py-4 border-b border-gray-200">
           <h5 className="flex items-center gap-3 pb-2 text-lg font-medium text-green-950"> 
               colors : 
              <p 
                style={{backgroundColor:selectedColor}} 
                className="w-[20px] h-[20px] rounded-full border-green-800 border"
               >

                </p>
            </h5>
           <section className="flex items-center gap-3">
               {
                 product?.images?.map((image)=> {

                    if(!imageColor.includes(image.color)){
                        imageColor.push(image.color);
                        return (
                        <Image 
                            className={`max-h-[50px] min-h-[50px] max-w-[50px] cursor-pointer ${image.color === selectedColor ? 'border border-green-600 rounded-md' : ''}`}
                            key={image.id} 
                            src={image?.imagePath.replace("public","")}
                            width={50} 
                            height={50}
                            />
    
                     )

                    }
                })
                    
               }
           </section>
        </section>
        <section className="py-4 border-b border-gray-200">
            <h4  className="pb-2 text-lg font-bold text-green-950">product specifications</h4>
            <ul>
                {
                    product?.specifications?.map((specif)=> (

                        <li 
                            className="flex items-center gap-4"
                            key={specif?.id}
                            >
                            <span className="font-medium text-md">{specif?.key}</span>
                            <span className="text-sm">{specif?.value}</span>
                        </li>

                    ))
                }
            </ul>
        </section>
        <section className="py-4 border-b border-gray-200">
            <h4 className="pb-2 text-lg font-bold text-green-950">about this items</h4>
            <aside ref={about} ></aside>
        </section>
    </div>
  )
}

export default ProductDetails