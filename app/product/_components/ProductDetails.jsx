"use client"
import { BsCashCoin } from "react-icons/bs";
import { TbArrowBackUp } from "react-icons/tb";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdOutlineLockPerson } from "react-icons/md";
import getCurrency from "../../_lip/getCurrency";
import SelectImage from "./SelectImage";
import SelectSize from "./SelectSize";

import { useEffect, useRef, useState } from "react";


function ProductDetails({product,selectedColor}) {

    const [selectedSize,setSelectedSize] = useState('')

    const about = useRef();

    useEffect(()=> {
        about.current.innerText = product?.aboutThisItem
    },[]);

    const className = {
        infoLi: 'flex items-center text-center bg-gray-100 rounded-lg p-2  flex-col text-sm font-medium text-green-800  max-w-[160px]',
        infoLiIcon:'text-[30px] bg-gray-100  p-2 rounded-full'
    }



  return (
    <div>
        <div className="pb-2">
            <h4 className="text-lg font-bold text-green-900">{product?.brand}</h4>
            <h5 className="text-lg text-green-800">{product?.name}</h5>
        </div>
        <div className="flex items-center  text-green-900 gap-3">
          <h4 className='text-lg font-extrabold'>{getCurrency(+product.priceInCent)}</h4>
          <p className="text-green-800 text-sm">Inclusive of VAT</p>
        </div>
        <div className="py-4 border-b border-gray-100">
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
        <SelectSize sizes={product?.sizes} />
        <SelectImage images={product?.images} />
        <Specifications specifications={product.specifications} />
        <section className="py-4">
            <h4 className="pb-2 text-lg font-bold text-green-900">about this items</h4>
            <aside className="text-green-800" ref={about} ></aside>
        </section>
    </div>
  )
}

export default ProductDetails;