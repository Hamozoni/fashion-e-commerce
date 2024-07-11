"use client";

import { useEffect, useState, useTransition } from "react";
import FormInput from "./FormInput";
import SpecificationInputs from "./SpecificationInputs";
import Images from "./Images";
import Sizes from "./Sizes";
import axios from "axios";
import { useRouter } from "next/navigation";
// import {postNewProductAction} from "../../../../actions/products/postNewProduct"

import Loading from "./Loading";

import {productZSchema} from "../../../../validationSchemas/newProductSchemas";
import ZodError from "../../../../components/zodError";

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

        const test = productZSchema.safeParse(data);

        const formData = new FormData();

        if(test.success) {

            startTransition(async()=> {
                const config = {
                    headers: { 'content-type': 'multipart/form-data' }
                  }
    
                await axios.post('/api/products/new',formData, config)
                    .then(response => {
    
                    router.push('/admin/products');
                      console.log(response);
                    })
                    .catch(error => {
                        console.log(error);
                    })
            })

        }else {

            console.log(JSON.parse(test.error))
            setErrors(JSON.parse(test.error))
        }

    }

    
    const className = {
        inputsDev: 'pb-4 mb-3  border-b border-slate-100',
        inputClass : 'w-full max-w-full  text-teal-900 border-gray-200 border-2  focus:border-teal-400 rounded-lg p-2 my-2',
        label: 'text-lg font-bold text-teal-900',
        sumBtn: 'w-full max-w-full  rounded-lg p-2 my-2 border-slate-200 border font-bold text-xl text-slate-700 bg-slate-100 uppercase hover:shadow-md ',
        error: 'w-fit my-auto mb-3 text-red-600 text-center text-xs'
    };

  return (
    <div className="p-4 lg:p-10 w-full max-w-full capitalize ">
        {
            isPendding ? <Loading /> : ''
        }
        <h3 
            className="pb-4 font-bold text-2xl text-teal-950"
            >adding new product form
        </h3>
        <form 
            onSubmit={handleSubmit} 
            className="w-full max-w-full  border border-slate-100 p-4 rounded-md shadow-lg"
             >
            <div className="flex items-center gap-5 flex-wrap">
                {
                    inputsInfo.map(input=> (
                        <div key={input.name} className="w-[300px] max-w-full flex-grow">
                            <FormInput 
                                name={input.name} 
                                label={input.label} 
                                type={input.type}
                                errors={errors}
                                placeHolder={input.place}
                            />
                        </div>
                    ))
                }

            </div>
            <div className={className.inputsDev}>
                <label className={className.label}  htmlFor="description">description : </label>
                <textarea 
                    name='description'  
                    className={`${className.inputClass} h-20 min-h-16`}  
                    id="description" 
                    placeholder="the description of the product..." 
                    required
                    >
                    
                </textarea>
                <ZodError error={errors} field='description' />
            </div>
            <button disabled={isPendding} type="submit" className={className.sumBtn}>{isPendding ? 'loading...' : 'save'}</button>
        </form>
    </div>
  )
}

export default NewProducts