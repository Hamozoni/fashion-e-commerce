"use client"

import {  useContext, useState } from "react";
import { FormInput } from "./FormInput";
import { ButtonWithIcon } from "../../../../components/buttons";

import { IoIosAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import { newProductContext } from "../new/page";

const data = {
    name : 'specificaton key',
    value : 'specificaton value',
}

export function SpecificationInputs() {

    const {errors} = useContext(newProductContext);

    const [specifications,setSpecifications] = useState([{
        name : 'specificaton key',
        value : 'specificaton value',
    }]);

    const addMore = ()=> {
        setSpecifications(prev=> {
            return [...prev,data]
        })
    };

    const deleteInput = (length)=> {
        setSpecifications(prev=> {
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
                    specifications?.length > 1 ? 
                        <div className="w-[70px]">
                            <ButtonWithIcon 
                                text='' 
                                Icon={FiMinus} 
                                type='delete' 
                                disabled={false} 
                                onClick={() => deleteInput(specifications?.length - 1)}
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
                specifications?.map(({name,value},index)=> (
                    <div key={`${name}_${index}`} className="flex items-center gap-3 mb-5 flex-wrap bg-gray-50 p-2 border border-gray-200 rounded-md">
                        <FormInput 
                            name={`${name} ${index}`} 
                            label={`${name} ${index + 1}`}
                            type='text'
                            placeHolder='specification key...'
                            errors={errors}
                            />
                        <FormInput 
                            name={`${value} ${index}`} 
                            label={`${value} ${index + 1}`}
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
