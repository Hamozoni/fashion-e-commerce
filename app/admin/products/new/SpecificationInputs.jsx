"use client"

import { useEffect, useState } from "react"



export default function SpecificationInputs({id,setData,className}) {


    const specificationObj = {
        key :'',
        value: '',
        id: id
    };

    const [specificationArr,setSpecification] = useState([specificationObj]);

    const addMore = ()=> {
        setSpecification(prev=> {
            return [...prev,specificationObj]
        })
    };

    useEffect(()=> {
        setData(prev => {
          return  [prev,prev.specifications = specificationArr]
        })
    },[specificationArr])


  return (
    <div className={className.inputsDev} >
        <div className="flex items-center justify-between">
            <h4 className={className.label} >Specifications :</h4>
        </div>
        {
            specificationArr?.map((_,i)=> (

                <div key={Math.random().toString(16).slice(2)} className="flex align-middle gap-4">
                    <div className="flex items-center gap-3 w-1/2">
                        <label className={className.label} htmlFor={'key-'+i}>key:</label>
                        <input 
                            className={className.inputClass}
                            onChange={e=> setSpecification(prev=> {
                                return [...prev,
                                    prev[i].key = e.target.value 
                                ]
                            })}
                            type="text" 
                            required  
                            id={'key-'+i} 
                            placeholder="enter your specifications key" 
                            />

                    </div>
                    <div className="flex items-center gap-3 w-1/2">
                        <label className={className.label} htmlFor={'value-'+i}>value:</label>
                        <input
                            className={className.inputClass}
                            onChange={e=> setSpecification(prev=> {
                                return [...prev,
                                    prev[i].value = e.target.value 
                                ]
                            })}
                            type="text" 
                            required  
                            id={'value-'+i} 
                            placeholder="enter your specifications value" 
                          />
                    </div>
                </div>
            ))
        }
        <p onClick={addMore}>add more</p>
    </div>
  )
}
