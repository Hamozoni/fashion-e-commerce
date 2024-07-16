"use client"

import {  useContext } from "react";
import { FormInput } from "./FormInput";
import { ButtonWithIcon } from "../../../../components/buttons";

import { IoIosAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import { newProductContext } from "../new/page";

export function SpecificationInputs() {

    const {errors,productSpecifications,setProductSpecifications} = useContext(newProductContext);

    const addMore = ()=> {
        setProductSpecifications(prev=> {
            return [...prev,{}]
        })
    };

    const deleteInput = (length)=> {
        setProductSpecifications(prev=> {
            prev.length = length;

            return [...prev]
        })
    }

  return (
    <section className="">
        <header
             className="flex items-center justify-between my-3">
             <h4 
                className="text-center text-lg text-teal-900 py-3 font-bold"
                > specifications
            </h4>
            <div className="flex items-center gap-5">
                {
                    productSpecifications?.length > 1 ? 
                        <div className="w-[70px]">
                            <ButtonWithIcon 
                                text='' 
                                Icon={FiMinus} 
                                type='delete' 
                                disabled={false} 
                                onClick={() => deleteInput(productSpecifications?.length - 1)}
                                />
                        </div>
                        : null
                    }
                    <div className="w-[70px]">
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
                productSpecifications?.map((_,index)=> (
                    <div key={index} className="flex items-center gap-3 mb-5 flex-wrap bg-gray-50 p-2 border border-gray-200 rounded-md">
                        <FormInput
                            onClick={e => setProductSpecifications(prev => {
                                prev[index].name =  e.target.value
                                return [...prev]
                            })}
                            label={`name ${index + 1}`}
                            type='text'
                            placeHolder='specification key...'
                            errors={errors}
                            />
                        <FormInput
                            onClick={e => setProductSpecifications(prev => {
                                prev[index].value = e.target.value
                                return prev
                            })} 
                            label={`value ${index + 1}`}
                            type='text'
                            placeHolder='specification value...'
                            errors={errors}
                            />
                    </div>
                ))
            }
        </div>
    </section>
  )
}
