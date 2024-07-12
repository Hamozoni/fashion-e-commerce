"use client"

import {  useState } from "react";
import { FormInput } from "./FormInput";
import { ButtonWithIcon } from "../../../../components/buttons";
// import {specifZSchema} from '../../../../validationSchemas/newProductSchemas';

import { categoriesData } from "../../../../data/categoriesData";
import { IoIosAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import {SelectSizes} from "./selectSizes";

const data = {
    image: 'images',
    color: 'color',
    colorName :'color name',
    priceInHalala: 'price in halala'
}

export function ImagesColor() {

    const [errors,setErrors] = useState(null);

    const [imagesColor,setImagesColor] = useState([data]);


    const addMore = ()=> {
        setImagesColor(prev=> {
            return [...prev,data]
        })
    };

    const deleteInput = (length)=> {
        setImagesColor(prev=> {
            prev.length = length;

            return [...prev]
        })
    }

  return (
    <section className="">

        <header className="flex items-center justify-between my-3">
            
            <h4 
                className="text-center text-lg text-teal-900 py-3 font-bold"
                > color details
            </h4>
            <div className="flex items-center gap-5">
                {
                    imagesColor?.length > 1 ? 
                    <div className="w-[100px]">
                        <ButtonWithIcon 
                            text='' 
                            Icon={FiMinus} 
                            type='delete' 
                            disabled={false} 
                            onClick={() => deleteInput(imagesColor?.length - 1)}
                            />
                    </div>
                    : null
                }
                <div className="w-[100px]">
                    <ButtonWithIcon 
                    text='' 
                    Icon={IoIosAdd} 
                    type='save' 
                    disabled={false} 
                    onClick={addMore}
                    />
                </div>

            </div>

        </header>
        <form >
                {
                    imagesColor?.map(({image,color,colorName,priceInHalala},index)=> (
                        <div className="p-2 border-2 border-gray-200 rounded-md mb-5 shadow-sm ">
                            <div key={`${image}_${index}`} className="flex items-center gap-3 mb-3 flex-wrap">
                                <FormInput 
                                    name={`${image} ${index}`} 
                                    label={`${image} ${index + 1}`}
                                    type='file'
                                    errors={errors}
                                    />
                                <FormInput 
                                    name={`${color} ${index}`} 
                                    label={`${color} ${index + 1}`}
                                    type='color'
                                    errors={errors}
                                    />
                                <FormInput 
                                    name={`${colorName} ${index}`} 
                                    label={`${colorName} ${index + 1}`}
                                    type='text'
                                    placeHolder='your color name...'
                                    errors={errors}
                                    />
                                 <FormInput 
                                    name={`${priceInHalala} ${index}`} 
                                    label={`${priceInHalala} ${index + 1}`}
                                    type='number'
                                    placeHolder='price in halala...'
                                    errors={errors}
                                    />
                            </div>
                            <SelectSizes />

                        </div>
                    ))
                }

        </form>
    </section>
  )
}
