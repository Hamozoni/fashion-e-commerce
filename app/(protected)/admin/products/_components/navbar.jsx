"use client";
import Image from "next/image";
import {categoriesData} from "../../../../../data/categoriesData";
import { IoMdArrowDropdown,IoMdArrowDropright } from "react-icons/io";
import { useState } from "react";

export const Navbar = ({
    categoryName,
    setCategoryName,
    subcategoryName,
    setSubcategoryName
})=> {

    const [subCategory,setSubCategory] = useState(null);
    const [isSubcategory,setIsSubcategory] = useState(false)

    const handleCategory = (category)=> {
        setSubcategoryName('all')
        if(category === 'all'){
            setCategoryName('all');
            setSubCategory(null)
        }else {
            setCategoryName(category?.name);
            setSubCategory(category?.sub)
        }
    };

    const className = {
        categoryLi: ' px-3 py-2 text-sm sm:text-lg border border-teal-100 dark:border-stone-800 cursor-pointer rounded-md flex items-center gap-2 min-w-fit'
    };

    return (
        <header className="flex justify-between items-start flex-wrap pb-4">
            <nav className="">
                <ul className="flex items-start gap-3 capitalize overflow-x-auto py-2">
                    <li 
                       onClick={() => handleCategory('all')}
                        className={`${categoryName === 'all' ? 'bg-teal-400 scale-105 text-teal-50' : 'bg-teal-50 dark:bg-stone-900 dark:text-teal-50'} ${className.categoryLi}`} >
                        <h4>all</h4>
                    </li>
                    {
                        categoriesData?.map((cate)=> (
                            <li 
                                onClick={() => handleCategory(cate)}
                                key={cate?.id} 
                                className={`${categoryName === cate?.name ? 'bg-teal-400 scale-105 text-teal-50' : 'bg-teal-50 dark:bg-stone-900 text-teal-950 dark:text-teal-50 hover:scale-105'} ${className.categoryLi}`}
                                >
                                    <Image className="rounded-full" src={cate?.imagePath} width={50} height={30} alt="cate"/>
                                    <h4 className="text-center">{cate?.name}</h4>
                            </li>
                        ))
                    }
                </ul>
            </nav>
            <div className=" relative capitalize min-w-[150px]">
                <div 
                    onClick={()=> setIsSubcategory(!isSubcategory)}
                    className="flex justify-between flex-col gap-3 cursor-pointer bg-teal-50 dark:bg-stone-900 text-teal-950 dark:text-teal-50  p-3 rounded-md border border-teal-100">
                    <h6 className="flex items-center justify-between gap-3 text-sm text-gray-500">
                      filter:  {subcategoryName} { isSubcategory ? <IoMdArrowDropdown /> : <IoMdArrowDropright />}
                    </h6>
                </div>
                {
                    isSubcategory ? 
                <ul className=" absolute min-w-fit right-0 top-[102%] w-full bg-teal-50 dark:bg-stone-900 text-teal-950 dark:text-teal-50 p-3 rounded-md border border-teal-100">
                    <li 
                        className={`${subcategoryName === 'all' ? 'bg-teal-600 text-teal-50 rounded-md' : 'hover:bg-white dark:hover:bg-stone-800'} flex items-center gap-3 px-3 py-2 cursor-pointer`}
                         onClick={()=> setSubcategoryName('all')}>
                        all
                    </li>
                    {
                        subCategory ? 
                        subCategory?.map((subCate)=> (
                            <li 
                                onClick={()=> setSubcategoryName(subCate?.name)}
                                key={subCate?.id} 
                                className={`${subcategoryName === subCate?.name ? 'bg-teal-600 text-teal-50 rounded-md' : 'hover:bg-white dark:hover:bg-stone-800'} flex items-center gap-3 px-3 py-2 cursor-pointer`}>
                                <Image className="rounded-full" src={subCate?.imagePath} width={30} height={30} alt={subCate?.name} />  {subCate?.name}
                            </li>

                        )) : null
                    }
                </ul>
                : null
                }

            </div>
        </header>
    )
}