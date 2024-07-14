"use client";

import { FormTextera,FormInput } from "./FormInput";
import {SelectCategory} from "./selectCategory";

const inputsInfo = [
    {
       name : 'name',
       label: 'name',
       type: 'text',
       place:'the name of the product...'
    },
     {
        name : 'brand',
        label: 'brand',
        type: 'text',
        place:'the brand of your product...'
     },
     {
        name : 'serialNumber',
        label: 'serial number',
        type: 'text',
        place:'ASIN shold be 10 '
     },
];

export const ProductInfoForm = ()=> {
    return (
        <>
            <div className="flex  gap-5 flex-wrap">
            {
                inputsInfo.map( input => (
                        <FormInput 
                            key={input.name}
                            name={input.name} 
                            label={input.label} 
                            type={input.type}
                            errors={null}
                            placeHolder={input.place}
                        />
                ))
            }

            <SelectCategory />
        </div>
        <div >
        <FormTextera 
            label='describtion'
            name='describtion'
            placeHolder='product describtion...' 
            errors={null}
            />

        </div>
        </>
    )
}