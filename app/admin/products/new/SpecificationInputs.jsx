"use client"

import {  useEffect, useState } from "react"


export default function SpecificationInputs({id,setData,className}) {



    const [specificationArr,setSpecification] = useState([{ key:'',value: '',productId: id,}]);

    console.log(specificationArr)

    const addMore = ()=> {
        setSpecification(prev=> {
            return [...prev,{
                key:'',
                value: '',
                productId: id
            }]
        })
    };

    useEffect(()=> {
        setData(prev => [...prev,specificationArr])
    },[specificationArr]);

    const addKey = (e,i)=> {

       setSpecification(prev=> {
            prev[i].key = e.target.value;
            prev[i].productId = id
            return [...prev]
           }
        )

     document.getElementById(`${'key-'+i}`).focus()
        
    }

    const addValue =  (e,i)=> {
           setSpecification(prev=> {
                prev[i].value = e.target.value;
                prev[i].productId  = id
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
                            value={el.key}
                            className={className.inputClass}
                            onChange={e=> addKey(e,i)}
                            type="text" 
                            required  
                            id={'key-'+i} 
                            placeholder="enter your specifications key" 
                            />

                    </div>
                    <div className="gap-3 md:w-1/2">
                        <label className={className.label} htmlFor={'value-'+i}>value:</label>
                        <input
                            className={className.inputClass}
                            value={el.value}
                            onChange={e=> addValue(e,i)}
                            type="text" 
                            required  
                            id={'value-'+i} 
                            placeholder="enter your specifications value" 
                          />
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
