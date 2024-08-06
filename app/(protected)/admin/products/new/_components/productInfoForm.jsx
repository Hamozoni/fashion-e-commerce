"use client";

import { useContext } from "react";
import { FormTextera,FormInput } from "./FormInput";
import {SelectCategory} from "./selectCategory";
import { newProductContext } from "../page";

export const ProductInfoForm = ()=> {

    const {detValidError,setProductDetails} = useContext(newProductContext);

    return (
        <>
            <div className="flex  gap-5 flex-wrap">
                    <FormInput
                        onClick={e => setProductDetails(prev=> {
                            return {...prev,name: e.target.value.toLowerCase()}
                        })}
                        name={['name']}
                        label='name'
                        type='text'
                        errors={detValidError}
                        placeHolder='the name of the product...'
                    />
                    <FormInput
                        onClick={e => setProductDetails(prev=> {
                            return {...prev,brand:e.target.value.toLowerCase()}
                        })}
                        name={['brand']}
                        label='brand' 
                        type='text'
                        errors={detValidError}
                        placeHolder='the brand of your product...'
                    />
                    <FormInput
                        onClick={e => setProductDetails(prev=> {
                            return {...prev,serialNumber: e.target.value}
                        })}
                        name={['serialNumber']}
                        label='serial number'
                        type='text'
                        errors={detValidError}
                        placeHolder='ASIN shold be 10'
                />
            <SelectCategory />
        </div>
        <div >
        <FormTextera 
            onClick={e => setProductDetails(prev=> {
                return {...prev,describtion: e.target.value}
            })}
            name={['describtion']}
            label='describtion'
            placeHolder='product describtion...' 
            errors={detValidError}
            />

        </div>
        </>
    )
}