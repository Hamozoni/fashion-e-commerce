"use client"

import {  useState } from "react";
import { FormInput } from "./FormInput";
import { ButtonWithIcon } from "../../../../components/buttons";
// import {specifZSchema} from '../../../../validationSchemas/newProductSchemas';


import { IoIosAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";

const data = {
    name : 'specificaton key',
    value : 'product specificaton value',
}

export function SpecificationInputs() {

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
        <form >

            {
                specification?.map(({name,value},index)=> (
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
                    </div>
                ))
            }
        </form>

        <footer className="flex items-center justify-center gap-5 my-3">
        {
            specification?.length > 1 ? 
                <div className="w-[70px]">
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
            <div className="w-[70px]">
                <ButtonWithIcon 
                text='' 
                Icon={IoIosAdd} 
                type='save' 
                disabled={false} 
                onClick={addMore}
                />
            </div>
        </footer>
    </section>
  )
}
