"use client"

import {  useState } from "react";
import { FormInput } from "./FormInput";
// import {specifZSchema} from '../../../../validationSchemas/newProductSchemas';


export function SpecificationInputs({className}) {

    const [errors,setErrors] = useState(null);

    const [specificationArr,setSpecification] = useState([
        {
            name : 'key',
            value : 'value'
        }
    ]);


    // const addMore = ()=> {
    //     setSpecification(prev=> {
    //         return [...prev, {
    //             name : 'key',
    //             value : 'value'
    //         }]
    //     })
    // };

    // const deleteInput = (i)=> {
    //     setSpecification(prev=> {
    //         prev.length = i - 1
    //         return [...prev]
    //     })
    // }

  return (
    <div className="">
        <h4>product specifications</h4>
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
    </div>
  )
}
