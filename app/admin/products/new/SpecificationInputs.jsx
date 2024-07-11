"use client"

import {  useState } from "react";
import { FormInput } from "./FormInput";
import { ButtonWithIcon } from "../../../../components/buttons";
// import {specifZSchema} from '../../../../validationSchemas/newProductSchemas';


import { IoIosAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";

export function SpecificationInputs({className}) {

    const [errors,setErrors] = useState(null);

    const [specificationArr,setSpecification] = useState([
        {
            name : 'key',
            value : 'value'
        }
    ]);


    const addMore = ()=> {
        setSpecification(prev=> {
            return [...prev, {
                name : 'key',
                value : 'value'
            }]
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
        <h4 className="text-center text-lg text-teal-900 py-3 font-bold">product specifications</h4>
        <form >

            {
                specificationArr?.map(({name,value},index)=> (
                    <div key={`${name}_${index}`} className="flex items-center gap-3 mb-3 flex-wrap">
                        <FormInput 
                            name={`${name}_${index}`} 
                            label={`${name} ${index + 1}`}
                            type='text'
                            placeHolder='specification key...'
                            errors={errors}
                            />
                        <FormInput 
                            name={`${value}_${index}`} 
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
                specificationArr?.length > 1 ? 
                <div className="w-[100px]">
                    <ButtonWithIcon 
                        text='' 
                        Icon={FiMinus} 
                        type='delete' 
                        disabled={false} 
                        onClick={() => deleteInput(specificationArr?.length - 1)}
                        />
                </div>
                : null
            }

        </footer>
    </section>
  )
}
