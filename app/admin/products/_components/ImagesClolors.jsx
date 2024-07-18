"use client"

import {  useContext, useEffect, useState } from "react";
import { FormInput } from "./FormInput";
import { ButtonWithIcon } from "../../../../components/buttons";
// import {specifZSchema} from '../../../../validationSchemas/newProductSchemas';

import { IoIosAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import {SelectSizes} from "./selectSizes";
import { newProductContext } from "../new/page";

const data = {
    color: '',
    colorName :'',
    priceInHalala: 0
}

export function ImagesColor() {

    const {
        productColors,
        setProductColors,
        setProductSizes,
        setProductDetails,
        category,
        colValidError
    } = useContext(newProductContext);

    const addMore = ()=> {
        setProductSizes(prev=> [...prev,[]])
        setProductColors(prev=> {
            return [...prev,data]
        })
    };

    const deleteInput = (length)=> {

        setProductSizes(prev=> {
            prev.length = length
            return [...prev]
        })
        setProductColors(prev=> {
            prev.length = length;

            return [...prev]
        })
    };

    useEffect(()=> {
        const sizesLength = new Array(productColors.length).fill([]);
        setProductSizes(sizesLength)
    },[category]);

  return (
    <section className="">

        <header className="flex items-center justify-between my-3">
            
            <h4 
                className="text-center text-lg text-teal-900 py-3 font-bold"
                > color details
            </h4>
            <div className="flex items-center gap-5">
                {
                    productColors?.length > 1 ? 
                    <div className="w-[100px]">
                        <ButtonWithIcon 
                            text='' 
                            Icon={FiMinus}
                            type='delete' 
                            disabled={false} 
                            onClick={() => deleteInput(productColors?.length - 1)}
                            />
                    </div>
                    : null
                }
                <div className="w-[100px]">
                    <ButtonWithIcon 
                    text='' 
                    Icon={IoIosAdd} 
                    type='save' 
                    disabled={false} 
                    onClick={addMore}
                    />
                </div>

            </div>

        </header>
        <div >
                {
                    productColors?.map((_,index)=> (
                        <div className="p-2 border-2 border-gray-200 rounded-md mb-5 shadow-sm ">
                            <div key={index} className="flex items-center gap-3 mb-3 flex-wrap">
                                <input 
                                    type="file"
                                    name={`images_${index}`}
                                    required
                                    multiple
                                    accept="image/*"
                                     />
                                <FormInput 
                                    onClick={(e)=> {
                                        setProductColors(prev=> {
                                            prev[index].color = e.target.value;
                                            return [...prev]
                                        });

                                        if(index === 0) {
                                            setProductDetails(prev=> {
                                                return {...prev,color:e.target.value}
                                            })
                                        }
                                   }}
                                    name={[index,"color"]}
                                    label={`color ${index + 1}`}
                                    type='color'
                                    errors={colValidError}
                                    />
                                <FormInput
                                    onClick={(e)=> {
                                        setProductColors(prev=> {
                                            prev[index].colorName = e.target.value;
                                            return [...prev]
                                        });

                                        if(index === 0) {
                                            setProductDetails(prev=> {
                                                return {...prev,colorName:e.target.value}
                                            })
                                        };
                                   }}
                                    name={[index,"colorName"]} 
                                    label={`color name ${index + 1}`}
                                    type='text'
                                    placeHolder='your color name...'
                                    errors={colValidError}
                                    />
                                 <FormInput
                                    onClick={(e)=> {
                                        setProductColors(prev=> {
                                            prev[index].priceInHalala = +e.target.value;
                                            return [...prev];
                                        });

                                        if(index === 0) {
                                            setProductDetails(prev=> {
                                                return {...prev,priceInHalala: +e.target.value}
                                            })
                                        };
                                    }} 
                                    name={[index,'priceInHalala']}
                                    label={`price in halala ${index + 1}`}
                                    type='number'
                                    placeHolder='price in halala...'
                                    errors={colValidError}
                                    />
                            </div>
                            <SelectSizes  i={index} />
                        </div>
                    ))
                }

        </div>
    </section>
  )
}
