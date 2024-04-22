"use client"

import { useState } from "react"



export default function SpecificationInputs({id,setData}) {


    const specificationObj = {
        key :'',
        value: '',
        id: id
    };

    const [specificationArr,setSpecification] = useState([specificationObj]);
    const [add,setAdd] = useState('add');

    const addMore = ()=> {
        setData(prev=> {
            return [...prev,['specifications'] = [...specificationArr]]
        })
    }

    const addSpice = ()=> {
        setData(prev=> [...prev,specificationObj])
        setAdd('added')
    }

  return (
    <div>
        <div className="flex items-center justify-between">
            <h4>Specifications :</h4>
            <p onClick={addMore}>add more</p>
        </div>
        {
            specificationArr?.map((_,i)=> (

                <div key={Math.random().toString(16).slice(2)} className="">
                    <div className="">
                        <label htmlFor={'key-'+i}>key</label>
                        <input 
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
                    <div className="">
                        <label htmlFor={'value-'+i}>value</label>
                        <input
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

        <button onClick={addSpice}>{add}</button>

    </div>
  )
}
