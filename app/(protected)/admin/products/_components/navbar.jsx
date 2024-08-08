"use client";
import Image from "next/image";
import {categoriesData} from "../../../../../data/categoriesData";
import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";

export const Navbar = ()=> {
    const [categoryName,setCategoryName] = useState('all');
    const [subCategory,setSubCategory] = useState(categoriesData[0]?.sub);

    const handleCategory = (category)=> {

        if(category === 'all'){
            setCategoryName('all');
            setSubCategory(null)
        }else {
            setCategoryName(category?.name);
            setSubCategory(category?.sub)
        }
    }
    return (
        <header className="flex justify-between">
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
                <div className="flex items-center gap-3 cursor-pointer">
                    <h4>filter by sub category:</h4>
                    <h6 className="flex items-center gap-3 text-sm text-gray-500">all <IoMdArrowDropdown /></h6>
                </div>
                <ul className=" absolute right-0 top-1/2 w-full bg-teal-50 p-3 rounded-md  ">
                    {
                        subCategory ? 
                        subCategory?.map((subCate)=> (
                            <li key={subCate?.id} className="flex items-center gap-3 py-3 cursor-pointer">
                                <Image className="rounded-full" src={subCate?.imagePath} width={30} height={30} alt={subCate?.name} />  {subCate?.name}
                            </li>

                        )) : <li>all</li>
                    }
                </ul>

            </div>
        </header>
    )
}