"use client"
import { useState } from "react";
import {categoriesData} from "../../../../data/categoriesData";
import { IoMdArrowDropright } from "react-icons/io";

export const SelectCategory = ({setCatgory,category})=> {

    const [isSubCatecoryModel,setIsSubCategoryModel] = useState(false);
    const [isCategoryModel,setIsCategoryModel] = useState(false);
    const [categoryName,setCategoryName] = useState('men');
    const [subCategoryName,setSubCategoryName] = useState('');

   const className = {
        label: 'text-lg font-bold text-gray-500 group-hover:text-teal-500',
        select: 'cursor-pointer px-3 py-1 flex items-center justify-between gap-3 w-[180px] rounded-md bg-gray-50 border-2',
        ul:"absolute top-[110%] left-0 w-full bg-gray-50 shadow-md rounded-md border-2 border-teal-300"
    }

    return (
        <div className="flex gap-5">
            <div className="flex flex-col gap-3 mb-3 group">
                <h4 className={className.label}>category *</h4>

                <div className="relative w-fit">
                    <div 
                         onClick={()=> setIsCategoryModel(!isCategoryModel)}
                        className={`${isCategoryModel? 'border-teal-300' : 'border-gray-200'} ${className.select}`}>
                        <h5 className="text-lg font-medium text-teal-950">{categoryName}</h5>
                        <IoMdArrowDropright size={22}/>
                    </div>
                    {
                        isCategoryModel ? 
                        <ul className={className.ul}>
                            {
                                categoriesData?.map(({name,id,sub,sizes,shoesSizes})=> (
                                <li
                                    className={`${name === categoryName ? 'bg-gray-200' : 'hover:bg-gray-100'} px-3 p-1 cursor-pointer text-lg font-medium text-teal-900 `}
                                    onClick={()=> {
                                        setCategoryName(name);
                                        setCatgory({name,sub,sizes,shoesSizes})
                                    }}
                                    key={id}
                                    >
                                    {name}
                                </li>
                            ))
                            }
                        </ul> : null
                    }

                </div>
            </div>
            <div className="flex flex-col gap-3 mb-3 group">
                <h4 className={className.label}>sub category *</h4>

                <div className="relative w-fit">
                    <div 
                         onClick={()=> setIsSubCategoryModel(!isSubCatecoryModel)}
                        className={`${isSubCatecoryModel? 'border-teal-300' : 'border-gray-200'} ${className.select}`}>
                        <h5 
                            className="text-lg font-medium text-teal-950"
                            >{subCategoryName || 'subcategory'}
                        </h5>
                        <IoMdArrowDropright size={22}/>
                    </div>
                    {
                        isSubCatecoryModel ? 
                        <ul className={className.ul}>
                            {
                                category?.sub?.map(({name,id})=> (
                                <li
                                    className={`${name === subCategoryName ? 'bg-gray-200' : 'hover:bg-gray-100'} px-3 p-1 cursor-pointer text-lg font-medium text-teal-900 `}
                                    onClick={()=> {
                                        setSubCategoryName(name);
                                        setCatgory(prev => {
                                            prev.subName = name;
                                            return {...prev}
                                        })
                                    }}
                                    key={id}
                                    >
                                    {name}
                                </li>
                            ))
                            }
                        </ul> : null
                    }

                </div>
            </div>
        </div>
    )
}