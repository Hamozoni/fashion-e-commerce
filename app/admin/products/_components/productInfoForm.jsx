"use client";

import { useContext } from "react";
import { FormTextera,FormInput } from "./FormInput";
import {SelectCategory} from "./selectCategory";
import { newProductContext } from "../new/page";

export const ProductInfoForm = ()=> {

    const {errors,setProductDetails} = useContext(newProductContext);

    return (
        <>
            <div className="flex  gap-5 flex-wrap">
                    <FormInput
                        onClick={e => setProductDetails(prev=> {
                            return {...prev,name: e.target.value}
                        })}
                        label='name'
                        type='text'
                        errors={errors}
                        placeHolder='the name of the product...'
                    />
                    <FormInput
                        onClick={e => setProductDetails(prev=> {
                            return {...prev,brand:e.target.value}
                        })}
                        label='brand' 
                        type='text'
                        errors={errors}
                        placeHolder='the brand of your product...'
                    />
                    <FormInput
                        onClick={e => setProductDetails(prev=> {
                            return {...prev,serialNumber: e.target.value}
                        })}
                        label='serial number'
                        type='text'
                        errors={errors}
                        placeHolder='ASIN shold be 10'
                />
            <SelectCategory />
        </div>
        <div >
        <FormTextera 
            onClick={e => setProductDetails(prev=> {
                return {...prev,describtion: e.target.value}
            })}
            label='describtion'
            placeHolder='product describtion...' 
            errors={errors}
            />

        </div>
        </>
    )
}