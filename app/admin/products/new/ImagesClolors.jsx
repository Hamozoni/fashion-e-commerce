"use client"

import {  useState } from "react";
import { FormInput } from "./FormInput";
import { ButtonWithIcon } from "../../../../components/buttons";
// import {specifZSchema} from '../../../../validationSchemas/newProductSchemas';


import { IoIosAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";

export function ImagesColor() {

    const [errors,setErrors] = useState(null);

    const [specification,setSpecification] = useState([data]);


    const addMore = ()=> {
        setSpecification(prev=> {
            return [...prev,data]
        })
    };

    const deleteInput = (length)=> {
        setSpecification(prev=> {
            prev.length = length;

            return [...prev]
        })
    }

  return (
    <section className="">
        <h4 
            className="text-center text-lg text-teal-900 py-3 font-bold"
            >{title}
        </h4>
        <form >

            {
                specification?.map(({name,value,stack},index)=> (
                    <div key={`${name}_${index}`} className="flex items-center gap-3 mb-3 flex-wrap bg-gray-50 p-2 border border-gray-200 rounded-md">
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
                        <FormInput 
                            name={`${stack} ${index}`} 
                            label={`${stack} ${index + 1}`}
                            type='number'
                            placeHolder='stack quantity...'
                            errors={errors}
                            />
                    </div>
                ))
            }
        </form>

        <footer className="flex items-center justify-center gap-5 my-3">
            <div className="w-[100px]">
                <ButtonWithIcon 
                text='' 
                Icon={IoIosAdd} 
                type='save' 
                disabled={false} 
                onClick={addMore}
                />
            </div>
            {
                specification?.length > 1 ? 
                <div className="w-[100px]">
                    <ButtonWithIcon 
                        text='' 
                        Icon={FiMinus} 
                        type='delete' 
                        disabled={false} 
                        onClick={() => deleteInput(specification?.length - 1)}
                        />
                </div>
                : null
            }

        </footer>
    </section>
  )
}
