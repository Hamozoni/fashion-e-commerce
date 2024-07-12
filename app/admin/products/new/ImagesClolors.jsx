"use client"

import {  useState } from "react";
import { FormInput } from "./FormInput";
import { ButtonWithIcon } from "../../../../components/buttons";
// import {specifZSchema} from '../../../../validationSchemas/newProductSchemas';


import { IoIosAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";

const data = {
    image: 'images',
    color: 'color',
    colorName :'color name'
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
        <h4 
            className="text-center text-lg text-teal-900 py-3 font-bold"
            > color details
        </h4>
        <form >

            {
                imagesColor?.map(({image,color,colorName},index)=> (
                    <div key={`${image}_${index}`} className="flex items-center gap-3 mb-3 flex-wrap bg-gray-50 p-2 border border-gray-200 rounded-md">
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
                    </div>
                ))
            }
        </form>

        <footer className="flex items-center justify-center gap-5 my-3">
            <div className="w-[100px]">
                <ButtonWithIcon 
                text='' 
                Icon={IoIosAdd} 
                type='save' 
                disabled={false} 
                onClick={addMore}
                />
            </div>
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

        </footer>
    </section>
  )
}
