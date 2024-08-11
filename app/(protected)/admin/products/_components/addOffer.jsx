"use client";
import { useState } from "react";
import { FaMinus } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import { CardHeader } from "./productCard";
import { ProductColors } from "./productColors";
import {NewOfferForm} from "./newOfferForm";


export const AddOffer = ({product,setProducts})=> {

    const [isOfferModel,setIsOfferModel] = useState(false);
    const [selectedItem,setSelectedItem] = useState(null);

    return (
        <>
            <div className="absolute -top-6 right-2 ">
                <button 
                     onClick={()=> setIsOfferModel(true)} 
                     className="capitalize max-w-[150px] flex items-center gap-2 hover:scale-95  rounded-md text-xs font-bold bg-stone-200 text-teal-900 p-2">
                    {isOfferModel ? <FaMinus /> : <IoMdAdd/>}
                    {isOfferModel ? 'open':'create offer' }
                </button>
            </div>
            {
                isOfferModel ? 
                <div className=" capitalize">
                    <div onClick={()=> setIsOfferModel(false)} className="z-[100] fixed top-0 left-0 h-screen w-screen dark:bg-white bg-black opacity-35">
                    </div>
                    <div className="fixed z-[102] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-fit w-fit min-w-[300px] sm:min-w-[600px] lg:min-w-[900px] max-w-full p-5 rounded-md bg-gray-100 dark:bg-black">
                        <h5 className="text-teal-950 dark:text-teal-50 font-bold text-lg mb-5">
                            adding offer to 
                        </h5>
                        <CardHeader product={product}/>
                        <div className="">
                            <h6 className='my-3 text-teal-950 font-bold dark:text-teal-50 text-sm'>
                                pleace select a color : 
                            </h6>
                            <div className="flex items-center  gap-3 flex-wrap max-h-[320px] overflow-y-auto">
                                {
                                    product?.colors?.map((color)=> (
                                        <div 
                                            onClick={()=> setSelectedItem(color)}
                                            key={color?.id} 
                                            className={`${color?.id === selectedItem?.id ? 'border-teal-300' : 'border-white dark:border-black'} border-2 rounded-md cursor-pointer flex-grow`}
                                             >
                                            <ProductColors color={color} sizes={product?.sizes} />
                                        </div>
                                    ))
                                }
                            </div>
                            {
                                selectedItem ?
                                <NewOfferForm 
                                    item={selectedItem}
                                    product={product}
                                    setIsOfferModel={setIsOfferModel}
                                    setProducts={setProducts}
                                     />
                                : null
                            }
                        </div>
                    </div>
                </div>
                : null

            }
        </>
    )
};
