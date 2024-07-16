"use client"
import { useContext } from "react";
import { FormInput } from "./FormInput";
import { newProductContext } from "../new/page";

const className = {
    li:'text-teal-900 cursor-pointer px-3 py-1 rounded-md hover:bg-gray-100 border-2 border-gray-200'
}


export const SelectSizes = ({i})=> {

    const {errors,category,productSizes,setProductSizes,setProductDetails} = useContext(newProductContext);

    const isShoes = category?.subName?.toLowerCase() === 'shoes';

    const sizesData = isShoes ? category?.shoesSizes : category?.sizes


    const isElementFound = (id)=> {
       let exsistingSize = false
        if(Array.isArray(productSizes[i])) {
            exsistingSize = productSizes[i]?.find(e=> e?.id === id);
        }

        return !!exsistingSize
        
    }

    const handleSize = (size,length)=> {

        const {shortName,name} = size;

        if(length === 0) {
            setProductDetails(prev=> {
                return {...prev,size:shortName}
            })
        }

        const exsistingSize = isElementFound(size?.id);

        if(!!exsistingSize) {
          const  newSizes = productSizes[i]?.filter(e => e?.id !== size?.id);

          setProductSizes(prev=> {
            
            prev[i] = newSizes;
                
            return [...prev]
          });
        } else {
            setProductSizes(prev=> {
                prev[i][length] = {shortName,name};
                
                return [...prev]
            })
        };


    };


    return (
        <div className="">
            <div className="">
                <h5 className="text-center p-4 ">place slesct avalbe sizes *</h5>
                <ul className="flex items-center justify-center  gap-3">
                    {
                        sizesData?.map(({name,shortName,id,quantity})=> (
                            <li 
                                key={id}
                                onClick={()=> handleSize({name,shortName,id,quantity},productSizes[i]?.length)}
                                className={`${className.li} ${isElementFound(id)  ? 'border-teal-300 scale-105 shadow-md' : 'border-gray-200'}`}
                                >
                                    {shortName}
                            </li>
                        ))
                    }
                </ul>

            </div>
            <div className="flex flex-wrap gap-5 mt-4">
                {
                    productSizes[i]?.length > 0 &&
                    productSizes[i]?.map(({shortName,id},index)=> (

                        <FormInput 
                            onClick={(e)=> {
                                setProductSizes(prev=> {
                                    prev[i][index].stackQuantity = +e.target.value
                                    return [...prev]
                                });
                            }
                            }
                            key={id}  
                            label={`${shortName} size quantity *`}
                            type='number'
                            placeHolder={`place enter ${shortName} quantity..`}
                            errors={errors}
                            />
                    ))
                }
            </div>
        </div>
    )
}