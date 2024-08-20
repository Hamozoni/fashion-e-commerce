"use client"

import {  useContext } from "react";
import { FormInput } from "./formInput";

import { IoIosAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import { newProductContext } from "../page";

export function SpecificationInputs() {

    const {speciValidError,productSpecifications,setProductSpecifications} = useContext(newProductContext);

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
    };

    const className = {
        addRemovBtn : 'w-[70px] cursor-pointer hover:scale-105 rounded-full flex items-center justify-center border-2'
    }

  return (
    <section className="flex-1 p-3 rounded-md border-b border-gray-200 dark:border-stone-800 bg-gray-50 dark:bg-stone-950 border ">
        <header
             className="mb-3">
             <h4 
                className="text-center text-lg text-teal-900 dark:text-teal-100 font-bold"
                > specifications
            </h4>
        </header>
        <div >

            {
                productSpecifications?.map((_,index)=> (
                    <div key={index} className="flex items-center gap-2  flex-wrap dark:bg-black">
                        <FormInput
                            onClick={e => setProductSpecifications(prev => {
                                prev[index].name =  e.target.value
                                return [...prev]
                            })}
                            name={'name'}
                            label={`name ${index + 1}`}
                            type='text'
                            placeHolder='specification key...'
                            errors={speciValidError}
                            />
                        <FormInput
                            onClick={e => setProductSpecifications(prev => {
                                prev[index].value = e.target.value
                                return prev
                            })}
                            name={'value'}
                            label={`value ${index + 1}`}
                            type='text'
                            placeHolder='specification value...'
                            errors={speciValidError}
                            />
                    </div>
                ))
            }
            <div className="flex items-center justify-center gap-5">
                {
                    productSpecifications?.length > 1 ? 
                        <div 
                            onClick={() => deleteInput(productSpecifications?.length - 1)}
                            className={`${className.addRemovBtn} border-rose-600 text-rose-600`}>
                          <FiMinus size={24}/>
                        </div>
                        : null
                    }
                    <div 
                        onClick={addMore} 
                        className={`${className.addRemovBtn} border-teal-300 text-teal-300`}>
                       <IoIosAdd size={24}/>
                    </div>

            </div>
        </div>
    </section>
  )
}
