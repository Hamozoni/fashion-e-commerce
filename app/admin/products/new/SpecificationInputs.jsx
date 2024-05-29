"use client"

import {  useEffect, useState } from "react";
import {specifZSchema} from '../../../../validationSchemas/newProductSchemas';


export default function SpecificationInputs({setData,className}) {

    const [specificationArr,setSpecification] = useState([{ key:'',value: ''}]);
    const [errors,setErrors] = useState(null)


    const addMore = ()=> {
        setSpecification(prev=> {
            return [...prev,{
                key:'',
                value: '',
            }]
        })
    };

    useEffect(()=> {

    const  test = specifZSchema.array().safeParse(specificationArr);

    if(test.success){
        setErrors(null)
        setData([...specificationArr])
    }else {
        setErrors(JSON.parse(test.error))
    }
    },[specificationArr]);

    const addKey = (e,i)=> {

       setSpecification(prev=> {
            prev[i].key = e.target.value;
            return [...prev]
           }
        )
 
    }

    const addValue =  (e,i)=> {
           setSpecification(prev=> {
                prev[i].value = e.target.value;
                return [...prev]
            })
                document.getElementById(`${'value-'+i}`).focus()

    };

    const deleteInput = (i)=> {
        setSpecification(prev=> {
            prev.length = i - 1
            return [...prev]
        })
    }

  return (
    <div className={className.inputsDev} >
        <div className="flex items-center justify-between">
            <h4 className={`${className.label} pb-3`} >Specifications </h4>
        </div>
        {
            specificationArr?.map((el,i)=> (
                el !== undefined &&

                <div key={`spec-${i}`}  className='md:flex align-middle gap-4'>
                    <div className="gap-3 md:w-1/2">
                        <label className={className.label} htmlFor={'key-'+i}>key:</label>
                        <input 
                            name='specificationKey'
                            value={el.key}
                            className={className.inputClass}
                            onChange={e=> addKey(e,i)}
                            type="text" 
                            required  
                            id={'key-'+i} 
                            placeholder="enter your specifications key" 
                            />

                           { (errors && errors.find((e=> e.path[0] === i )) !== undefined) ? 
                                    <p className={className.error}>{errors?.find((e=> e.path[1] === 'key'))?.message}</p>
                                :''
                            }

                    </div>
                    <div className="gap-3 md:w-1/2">
                        <label className={className.label} htmlFor={'value-'+i}>value:</label>
                        <input
                           name='specificationValue'
                            className={className.inputClass}
                            value={el.value}
                            onChange={e=> addValue(e,i)}
                            type="text" 
                            required  
                            id={'value-'+i} 
                            placeholder="enter your specifications value" 
                          />
                            { (errors && errors.find((e=> e.path[0] === i )) !== undefined) ? 
                                    <p className={className.error}>{errors?.find((e=> e.path[1] === 'value'))?.message}</p>
                                :''
                            }
                    </div>
                </div>
            ))
        }
        <div className="flex items-center gap-4 w-fit mx-auto text-center cursor-pointer py-3">
        
            <p className="font-bold px-4 py-1  rounded-lg border-slate-200 border hover:bg-slate-200 " onClick={addMore}>add more field</p>
            {
                specificationArr.length > 1 &&
              <p className="text-red-600 hover:font-bold" onClick={()=> deleteInput(specificationArr.length)}>delete field</p>
            }

        </div>
    </div>
  )
}
