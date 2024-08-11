"use client"

import {  useContext, useEffect} from "react";
import { FormInput } from "./FormInput";

import { IoIosAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import {SelectSizes} from "./selectSizes";
import { newProductContext } from "../page";

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
        addRemovBtn : 'w-[70px] cursor-pointer hover:scale-105 rounded-full flex items-center justify-center border-2',
        inputClass : 'w-full text-sm max-w-full text-teal-950 dark:text-teal-50 bg-whitw dark:bg-stone-950 outline-none border-b-gray-200 dark:border-b-stone-700 border-b-2 rounded-tl-md rounded-tr-md  focus:border-teal-400 dark:focus:border-teal-400 p-2 my-1',
        label: 'text-sm font-bold text-gray-500 dark:text-stone-300 group-hover:text-teal-500',
    }

  return (
    <section className="mb-10 p-3 border border-gray-200 rounded-md bg-gray-50 dark:bg-stone-950 dark:border-stone-900">
        <div >
                {
                    productColors?.map((_,index)=> (
                        <div key={index}  className="">
                            <header className="mb-3">
                                <h4 
                                    className="text-center text-lg text-teal-900 dark:text-teal-100 font-bold"
                                    > color {index + 1}
                                </h4>
                            </header>
                            <div className="flex items-center gap-2 flex-wrap">
                                <FormInput
                                    onClick={(e)=> setProductColors((prev)=> {
                                            prev[index].colorName = e.target.value;

                                            return [...prev]
                                        })
                                   }
                                    name={"colorName"} 
                                    label={`color name ${index + 1}`}
                                    type='text'
                                    placeHolder='your color name...'
                                    errors={colValidError}
                                    />
                                 <FormInput
                                    onClick={(e)=>  setProductColors((prev)=>{
                                            prev[index].priceInHalala = +e.target.value;
                                            return [...prev]
                                        }) } 
                                    name={'priceInHalala'}
                                    label={`price in halala ${index + 1}`}
                                    type='number'
                                    placeHolder='price in halala...'
                                    errors={colValidError}
                                    />
                                    <div className="flex flex-col gap-0">
                                        <label 
                                             className={className.label}
                                             htmlFor="images"
                                             >images *
                                        </label>
                                        <input 
                                            className={`${className.inputClass} p-[5px] bg-white`}
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
                                    name={"color"}
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
