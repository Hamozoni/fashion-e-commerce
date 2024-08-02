"use client"
import { useContext, useState } from "react";
import {categoriesData} from "../../../../../data/categoriesData";
import { newProductContext } from "../new/page";
import { IoMdArrowDropright,IoMdArrowDropdown } from "react-icons/io";
import { GiCheckMark } from "react-icons/gi";

const className = {
    container: 'flex flex-col gap-3 mb-3 group rounded-md',
    label: 'text-lg font-bold text-gray-500 dark:text-stone-300 group-hover:text-teal-500',
    select: 'cursor-pointer px-3 py-1 flex items-center justify-between gap-3 w-[180px] bg-gray-50 dark:bg-stone-950 ',
    ul:"w-full bg-gray-50 dark:bg-stone-950 shadow-md",
    li: 'px-3 p-1 cursor-pointer text-sm font-medium text-teal-900 dark:text-teal-100 flex items-center justify-between',
}

export const SelectCategory = ()=> {
     
    const {setCategory,category,setProductDetails} = useContext(newProductContext);

    const [isSubCatecoryModel,setIsSubCategoryModel] = useState(false);
    const [isCategoryModel,setIsCategoryModel] = useState(false);
    const [categoryName,setCategoryName] = useState('');
    const [subCategoryName,setSubCategoryName] = useState('');

    return (
        <div className="flex gap-5">
            <div className={className.container}>
                <h4 className={className.label}>category *</h4>

                <div className={`${isCategoryModel? 'border-teal-300' : 'border-gray-200 dark:border-stone-700'}  w-fit`}>
                    <div 
                         onClick={()=> setIsCategoryModel(!isCategoryModel)}
                         className={` ${className.select} text-lg font-medium text-teal-950 dark:text-teal-50`}>
                        <h5 >{categoryName || 'category'}</h5>
                        {
                            isCategoryModel ? 
                            <IoMdArrowDropdown size={22}/> :
                            <IoMdArrowDropright size={22}/>
                        }
                    </div>
                    {
                        isCategoryModel ? 
                        <ul className={className.ul}>
                            {
                                categoriesData?.map(({name,id,sub,sizes,shoesSizes})=> (
                                <li
                                    className={`${name === categoryName ? 'bg-gray-200 dark:bg-stone-800' : 'hover:bg-gray-100 dark:hover:bg-stone-900'} ${className.li}`}
                                    onClick={()=> {
                                        setCategoryName(name);
                                        setCategory({name,sub,sizes,shoesSizes});
                                        setProductDetails(prev=> {
                                            return {...prev,category : name}
                                        })
                                        setIsCategoryModel(false)
                                    }}
                                    key={id}
                                    >
                                    {name}
                                    {
                                        name === categoryName ?
                                        <GiCheckMark />
                                        : null
                                    }
                                </li>
                            ))
                            }
                        </ul> : null
                    }

                </div>
            </div>
            <div className={className.container}>
                <h4 className={className.label}>sub category *</h4>

                <div className="relative w-fit">
                    <div 
                         onClick={()=> setIsSubCategoryModel(!isSubCatecoryModel)}
                        className={`${className.select} text-lg font-medium text-teal-950 dark:text-teal-50`}>
                        <h5 >{subCategoryName || 'subcategory'}</h5>
                        {
                            isSubCatecoryModel ? 
                            <IoMdArrowDropdown size={22}/> :
                            <IoMdArrowDropright size={22}/>
                        }
                    </div>
                    {
                        isSubCatecoryModel ? 
                        <ul className={className.ul}>
                            {
                                category?.sub?.map(({name,id})=> (
                                <li
                                className={`${name === subCategoryName ? 'bg-gray-200 dark:bg-stone-800' : 'hover:bg-gray-100 dark:hover:bg-stone-900'} ${className.li}`}
                                    onClick={()=> {
                                        setSubCategoryName(name);
                                        setIsSubCategoryModel(false)
                                        setCategory(prev => {
                                            prev.subName = name;
                                            return {...prev}
                                        });

                                        setProductDetails(prev=> {
                                            return {...prev,subcategory : name}
                                        })
                                    }}
                                    key={id}
                                    >
                                    {name}
                                    {
                                        name === subCategoryName ?
                                        <GiCheckMark />
                                        : null
                                    }
                                </li>
                            ))
                            }
                        </ul> : 
                        <p>select category first</p>
                    }

                </div>
            </div>
        </div>
    )
}