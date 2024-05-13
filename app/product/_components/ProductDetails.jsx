"use client"
import { BsCashCoin } from "react-icons/bs";
import { TbArrowBackUp } from "react-icons/tb";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdOutlineLockPerson } from "react-icons/md";
import getCurrency from "../../_lip/getCurrency"
import Image from "next/image";
import { useEffect, useRef } from "react";


function ProductDetails({product,selectedColor}) {
    let imageColor = [];

    const about = useRef();

    useEffect(()=> {
        about.current.innerText = product?.aboutThisItem
    },[]);



  return (
    <div>
        <div className="">
            <h4>{product?.brand}</h4>
            <h5>{product?.name}</h5>
        </div>
        <div className="">
          <h4>{getCurrency(+product.priceInCent)}</h4>
          <p>Inclusive of VAT</p>

        </div>
        <div className="">
            <ul className="flex items-center justify-center gap-3">
                <li>
                    <BsCashCoin />
                    <span>cash on delivery</span>
                </li>
                <li>
                    <TbArrowBackUp />
                    <span>7 days returnable</span>
                </li>
                <li>
                    <CiDeliveryTruck />
                    <span>delivered by system</span>
                </li>
                <li>
                    <MdOutlineLockPerson />
                    <span>secure</span>
                </li>
            </ul>
        </div>
        <section className="">
           <h5>sizes : </h5>
           <ul className="flex items-center gap-3">
               {
                 product?.sizes?.map((size)=> (
                    <li key={size.id}>
                        {
                            size?.name
                        }
                    </li>

                 ))
               }
           </ul>
        </section>
        <section className="">
           <h5 className="flex items-center gap-3"> 
               colors : 
              <p 
                style={{backgroundColor:selectedColor}} 
                className="w-[25px] h-[25px] rounded-full border-green-800 border"
               >

                </p>
            </h5>
           <div className="flex items-center gap-3">
               {
                 product?.images?.map((image)=> {

                    if(!imageColor.includes(image.color)){
                        imageColor.push(image.color)
                        return (
    
                        <Image 
                            className={`max-h-[40px] min-h-[40px] max-w-[60px] cursor-pointer ${image.color === selectedColor ? 'border border-green-600 rounded-md' : ''}`}
                            key={image.id} 
                            src={image?.imagePath.replace("public","")}
                            width={60} 
                            height={40}
                            />
    
                     )

                    }
                })
                    
               }
           </div>
        </section>
        <section>
            <h4>product specifications</h4>
            <ul>
                {
                    product?.specifications?.map((specif)=> (

                        <li key={specif?.id}>
                            <span>{specif?.key}</span>
                            <span>{specif?.value}</span>
                        </li>

                    ))
                }
            </ul>
        </section>
        <section>
            <h4>about this items</h4>
            <aside ref={about} ></aside>
        </section>
    </div>
  )
}

export default ProductDetails