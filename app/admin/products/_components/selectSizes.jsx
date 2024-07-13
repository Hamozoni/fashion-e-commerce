"use client"

import { useEffect, useState } from "react";
import {categoriesData} from "../../../../data/categoriesData";
import { FormInput } from "./FormInput";

const className = {
    li:'text-teal-900 cursor-pointer px-3 py-1 rounded-md hover:bg-gray-100 border-2 border-gray-200'
}


export const SelectSizes = ({i,formData,category,sizes,setSizes})=> {

    const isShoes = category?.subName?.toLowerCase() === 'shoes';

    const sizesData = isShoes ? category?.shoesSizes : category?.sizes


      

    const handleSize = (size)=> {

        const exsistingSize = sizes[i]?.find(e=> e?.id === size?.id);

        if(!!exsistingSize) {
          const  newSizes = sizes[i]?.filter(e => e?.id !== size?.id);

          setSizes(newSizes);
        } else {
            setSizes(prev=> {
                prev[i] = prev[i]?.length > 0 ?  [...prev[i],size] : [size];
                
                return [...prev]
            })
        };

        console.log(sizes)

    };

    useEffect(()=> {
        formData.set(`size ${i}`,sizes)
    },[sizes]);

    useEffect(()=> {
        const sizesLentg = new Array(i + 1).fill([])
        setSizes(sizesLentg);
        formData.delete(`size ${i}`);
    },[category]);


    return (
        <div className="">
            <div className="">
                <h5 className="text-center p-4 ">place slesct avalbe sizes *</h5>
                <ul className="flex items-center justify-center  gap-3">
                    {
                        sizesData?.map(({name,shortName,id,quantity})=> (
                            <li 
                                key={id}
                                onClick={()=> handleSize({name,shortName,id,quantity})}
                                className={`${className.li} ${sizes[i]?.find(e=> e?.id === id)  ? 'border-teal-300 scale-105 shadow-md' : 'border-gray-200'}`}
                                >
                                    {shortName}
                            </li>
                        ))
                    }
                </ul>

            </div>
            {/* <div className="flex flex-wrap gap-5 mt-4">
                {
                    sizes[i]?.map(({shortName,id})=> (

                                <FormInput 
                                    key={id}  
                                    name={`quantity ${shortName} ${i}`}
                                    label={`${shortName} size quantity *`}
                                    type='number'
                                    placeHolder={`place enter ${shortName} quantity..`}
                                    errors={null}
                                    />
                    ))
                }
            </div> */}
        </div>
    )
}