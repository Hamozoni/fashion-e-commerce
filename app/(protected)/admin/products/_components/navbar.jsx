"use client";
import Image from "next/image";
import {categoriesData} from "../../../../../data/categoriesData";
import { IoMdArrowDropdown,IoMdArrowDropright } from "react-icons/io";
import { useState } from "react";

export const Navbar = ()=> {
    const [categoryName,setCategoryName] = useState('all');
    const [subcategoryName,setSubcategoryName] = useState('all');
    const [subCategory,setSubCategory] = useState('all');
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
    }
    return (
        <header className="flex justify-between items-start">
            <nav>
                <ul className="flex items-center gap-3 justify-center capitalize">
                    <li 
                       onClick={() => handleCategory('all')}
                        className={`${categoryName === 'all' ? 'bg-teal-400 scale-105 text-teal-50' : 'bg-teal-50 '} p-3 border rounded-md border-teal-100 cursor-pointer text-center`} >
                        <div className={`flex flex-wrap max-w-[80px] max-h-[40px] justify-center mb-2`}>
                            {
                               categoriesData?.map(({imagePath})=> (
                                  <Image className="" src={imagePath}  width={40} height={20} alt="all"/> 
                               )) 
                            }

                        </div>
                        <h4>all</h4>
                    </li>
                    {
                        categoriesData?.map((cate)=> (
                            <li 
                                onClick={() => handleCategory(cate)}
                                key={cate?.id} 
                                className={`${categoryName === cate?.name ? 'bg-teal-400 scale-105 text-teal-50' : 'bg-teal-50 text-teal-950 hover:scale-105'} p-3 border border-teal-100 cursor-pointer rounded-md`}
                                >
                                   <Image className="rounded-md" src={cate?.imagePath} width={80} height={40} alt={cate?.name} />
                                    <h4 className="text-center">{cate?.name}</h4>
                            </li>
                        ))
                    }
                </ul>
            </nav>
            <div className=" relative capitalize">
                <div 
                    onClick={()=> setIsSubcategory(!isSubcategory)}
                    className="flex justify-between flex-col gap-3 cursor-pointer bg-teal-50 p-3 rounded-md border border-teal-100">
                    <h4>filter by sub category:</h4>
                    <h6 className="flex items-center justify-between gap-3 text-sm text-gray-500">
                        {subcategoryName} { isSubcategory ? <IoMdArrowDropdown /> : <IoMdArrowDropright />}
                    </h6>
                </div>
                {
                    isSubcategory ? 
                <ul className=" absolute right-0 top-[102%] w-full bg-teal-50 p-3 rounded-md border border-teal-100">
                    <li onClick={()=> setSubcategoryName('all')}>
                        all
                    </li>
                    {
                        subCategory ? 
                        subCategory?.map((subCate)=> (
                            <li 
                                onClick={()=> setSubcategoryName(subCate?.name)}
                                key={subCate?.id} 
                                className={`${subcategoryName === subCate?.name ? 'bg-teal-600 text-teal-50 rounded-md' : 'hover:bg-white'} flex items-center gap-3 px-3 py-2 cursor-pointer`}>
                                <Image className="rounded-full" src={subCate?.imagePath} width={30} height={30} alt={subCate?.name} />  {subCate?.name}
                            </li>

                        )) : <li>all</li>
                    }
                </ul>
                : null
                }

            </div>
        </header>
    )
}