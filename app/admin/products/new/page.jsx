"use client";

import {useState, useTransition } from "react";
import   {FormInput,FormTextera} from "./FormInput";
import {SpecificationInputs}from "./SpecificationInputs";
import axios from "axios";
import { useRouter } from "next/navigation";
// import {postNewProductAction} from "../../../../actions/products/postNewProduct"


import { ButtonWithIcon } from "../../../../components/buttons";

import { IoArrowBackOutline,IoArrowForwardSharp } from "react-icons/io5";
import Loading from "./Loading"

const inputsInfo = [
    {
       name : 'name',
       label: 'name',
       type: 'text',
       place:'the name of the product...'
    },
    {
        name : 'priceInCent',
        label: 'price',
        type: 'number',
        place:'the price of the product in cent...'
     },
     {
        name : 'category',
        label: 'category',
        type: 'text',
        place:'the category of your product...'
     },
     {
        name : 'brand',
        label: 'brand',
        type: 'text',
        place:'the brand of your product...'
     },
     {
        name : 'subCategory',
        label: 'subcategory',
        type: 'text',
        place:'the subcategory of your product...'
     },
     {
        name : 'serialNumber',
        label: 'serial number',
        type: 'text',
        place:'ASIN shold be 10 '
     },
]

const NewProducts = () => {

    const [errors,setErrors] = useState(null);
    const [isPendding,startTransition] = useTransition();

    const router = useRouter();

    const handleSubmit =  (event)=> {
        event.preventDefault();
        const formData = new FormData(event.target);
        console.log(Object.fromEntries(formData.entries()))
        // const test = productZSchema.safeParse(data);

    }

  return (
    <div className="p-4 lg:p-10 w-full max-w-full capitalize ">
        {
            isPendding ? <Loading /> : ''
        }
        <h3 
            className="pb-4 font-bold text-2xl text-teal-950"
            >adding new product form
        </h3>
        <div className="w-full max-w-full  border border-slate-100 p-4 rounded-md shadow-lg">
            <div className="">
                <form 
                    onSubmit={handleSubmit} 
                    >
                    <div className="flex items-center gap-5 flex-wrap">
                        {
                            inputsInfo.map(input=> (
                                    <FormInput 
                                         key={input.name}
                                        name={input.name} 
                                        label={input.label} 
                                        type={input.type}
                                        errors={errors}
                                        placeHolder={input.place}
                                    />
                            ))
                        }

                    </div>
                    <div >
                        <FormTextera 
                            label='describtion'
                            name='describtion'
                            placeHolder='product describtion...' 
                            errors={errors}
                            />

                    </div>
                </form>
                <SpecificationInputs 
                    title='product specifications' 
                    data={{
                        name : 'specificaton key',
                        value : 'product specificaton value',
                        stack: 'stack quantity'
                    }} 
                />
                <SpecificationInputs 
                    title='sizes' 
                    data={{
                        name : 'size name',
                        value : 'size describection',
                        stack: 'stack quantity'
                    }} 
                />
            </div>
            <div className="flex items-center justify-between mt-3">
                <div className="w-[100px]">
                    <ButtonWithIcon
                       text='back'
                       Icon={IoArrowBackOutline}
                       type='delete'
                       disabled={false}
                     />
                </div>
                <div className="w-[100px]">
                    <ButtonWithIcon
                       text='next'
                       Icon={IoArrowForwardSharp}
                       type='save'
                       disabled={false}
                     />
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewProducts