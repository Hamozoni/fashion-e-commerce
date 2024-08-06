"use client"
import { useContext } from "react";
import { FormInput } from "./FormInput";
import { newProductContext } from "../page";

const className = {
    li:'text-teal-900 dark:text-teal-100 cursor-pointer px-3 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-stone-900 border-2 border-gray-200'
}


export const SelectSizes = ({i})=> {

    const {
        category,
        productSizes,
        productColors,
        sizeValidError,
        setProductSizes,
        setProductDetails,
    } = useContext(newProductContext);

    const isShoes = category?.subName?.toLowerCase() === 'shoes' || category?.subName?.toLowerCase() === 'jeans';
    const sizesData = isShoes ? category?.shoesSizes : category?.sizes


    const isElementFound = (shortName)=> {
       let exsistingSize = false
        if(Array.isArray(productSizes[i])) {
            exsistingSize = productSizes[i]?.find(e=> e?.shortName === shortName);
        }

        return !!exsistingSize
        
    }

    const handleSize = (size,length)=> {

        const {shortName,name} = size;


            setProductDetails(prev=> {

                const moreInfo = {
                    size:shortName,
                    colorName : productColors[0]?.colorName,
                    priceInHalala:productColors[0]?.priceInHalala,
                    color: productColors[0]?.color
                }
                return {...prev,...moreInfo}
            });


        const exsistingSize = isElementFound(shortName);

        if(!!exsistingSize) {
          const  newSizes = productSizes[i]?.filter(e => e?.shortName !== shortName);

          setProductSizes(prev=> {
            
            prev[i] = newSizes;
                
            return [...prev]
          });
        } else {
            setProductSizes(prev=> {
                prev[i][length] = {shortName,name,colorName : productColors[i]?.colorName};
                
                return [...prev]
            })
        };


    };


    return (
        <div className="">
            <div className="">
                <h5 className="text-center p-4 text-teal-900 dark:text-teal-50 text-lg">
                    place slesct avalbe sizes *
                </h5>
                <ul className="flex items-center justify-center  gap-3">
                    {
                        sizesData?.map(({name,shortName,id,quantity})=> (
                            <li 
                                key={id}
                                onClick={()=> handleSize({name,shortName,quantity},productSizes[i]?.length)}
                                className={`${className.li} ${isElementFound(shortName)  ? 'border-teal-300 scale-105 shadow-md' : 'border-gray-200'}`}
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
                            name={`${shortName}stackQuantity`}
                            key={id}  
                            label={`${shortName} size quantity *`}
                            type='number'
                            placeHolder={`place enter ${shortName} quantity..`}
                            errors={sizeValidError}
                            />
                    ))
                }
            </div>
        </div>
    )
}