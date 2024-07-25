"use client"

import {  useContext, useEffect} from "react";
import { FormInput } from "./FormInput";
import { ButtonWithIcon } from "../../../../ui/buttons/buttons";
// import {specifZSchema} from '../../../../validationSchemas/newProductSchemas';

import { IoIosAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import {SelectSizes} from "./selectSizes";
import { newProductContext } from "../new/page";

export function ImagesColor() {

    const {
        productColors,
        setProductColors,
        setProductSizes,
        category,
        colValidError
    } = useContext(newProductContext);

    const addMore = ()=> {
        setProductSizes(prev=> [...prev,[]])
        setProductColors(prev=> {
            return [...prev,{}]
        })
    };

    const deleteInput = (length)=> {

        setProductSizes(prev=> {
            prev.length = length
            return [...prev]
        })
        setProductColors(prev=> {
            prev.length = length;

            return [...prev]
        })
    };

    useEffect(()=> {
        const sizesLength = new Array(productColors.length).fill([]);
        setProductSizes(sizesLength)
    },[category]);

    const className = {
        addRemovBtn : 'w-[70px] cursor-pointer hover:scale-105 rounded-full flex items-center justify-center border-2'
    }

  return (
    <section className="mb-10 pb-10 border-b border-teal-100 dark:border-stone-800">

        <header className="my-3">
            <h4 
                className="text-center text-lg text-teal-900 dark:text-teal-100 py-3 font-bold"
                > color details
            </h4>
        </header>
        <div >
                {
                    productColors?.map((_,index)=> (
                        <div className="p-2 border-2 border-gray-200 dark:border-stone-800 rounded-md mb-5 shadow-sm ">
                            <div key={index} className="flex items-center gap-3 mb-3 flex-wrap">
                            <FormInput
                                    onClick={(e)=> setProductColors((prev)=> {
                                            prev[index].colorName = e.target.value;

                                            return [...prev]
                                        })
                                   }
                                    name={[index,"colorName"]} 
                                    label={`color name ${index + 1}`}
                                    type='text'
                                    placeHolder='your color name...'
                                    errors={colValidError}
                                    />
                                 <FormInput
                                    onClick={(e)=>  setProductColors((prev)=>{
                                            prev[index].priceInHalala = +e.target.value;

                                            return [...prev]
                                        
                                        })

                                    } 
                                    name={[index,'priceInHalala']}
                                    label={`price in halala ${index + 1}`}
                                    type='number'
                                    placeHolder='price in halala...'
                                    errors={colValidError}
                                    />
                                    <div className="flex flex-col gap-4 mb-5">
                                        <label 
                                             className="text-lg font-bold text-gray-500 dark:text-stone-300"
                                             htmlFor="images"
                                             >images *
                                        </label>
                                        <input 
                                            id='images'
                                            type="file"
                                            name={`images_${index}`}
                                            required
                                            multiple
                                            accept="image/*"
                                            />

                                    </div>
                                <FormInput 
                                    onClick={(e)=> setProductColors((prev)=>{
                                            prev[index].color = e.target.value;
                                            return [...prev]
                                        })}
                                    name={[index,"color"]}
                                    label={`color ${index + 1}`}
                                    type='color'
                                    errors={colValidError}
                                    />
                            </div>
                            <SelectSizes  i={index} />
                        </div>
                    ))
                }

               <div 
                     
                    className="flex items-center justify-center gap-5">
                {
                    productColors?.length > 1 ? 
                    <div
                        onClick={() => deleteInput(productColors?.length - 1)}
                        className={`${className.addRemovBtn} text-rose-600 border-rose-600`}>
                        <FiMinus size={24} />
                    </div>
                    : null
                }
                <div  onClick={addMore} className={`${className.addRemovBtn} text-teal-300 border-teal-300`}>
                    <IoIosAdd size={24}/>
                </div>

            </div>

        </div>
    </section>
  )
}
