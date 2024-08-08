"use client";
import Image from "next/image";
import {categoriesData} from "../../../../../data/categoriesData";
import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";

export const Navbar = ()=> {
    const [categoryName,setCategoryName] = useState('all');
    const [subCategory,setSubCategory] = useState(categoriesData[0]?.sub)
    return (
        <header className="flex items-center justify-between">
            <nav>
                <ul className="flex items-center gap-3 justify-center">
                    {
                        categoriesData?.map((cate)=> (
                            <li key={cate?.id} className="p-3 bg-teal-50 border border-teal-100">
                                   <Image className="rounded-md" src={cate?.imagePath} width={80} height={80} alt={cate?.name} />
                                    <h4 className="text-center">{cate?.name}</h4>
                            </li>
                        ))
                    }
                </ul>
            </nav>
            <div className=" relative">
                <div className="flex items-center gap-3">
                    <h4>filter by sub category</h4>
                    <h6>all <IoMdArrowDropdown /></h6>
                </div>
                <ul className=" absolute right-0 top-full w-full bg-teal-50 p-3 rounded-md  ">
                    {
                        subCategory?.map((subCate)=> (
                            <li key={subCate?.id} className="flex items-center gap-3 py-3">
                                <Image className="rounded-full" src={subCate?.imagePath} width={30} height={30} alt={subCate?.name} />  {subCate?.name}
                            </li>

                        ))
                    }
                </ul>

            </div>
        </header>
    )
}