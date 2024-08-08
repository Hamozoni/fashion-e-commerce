"use client";
import Image from "next/image";
import {categoriesData} from "../../../../../data/categoriesData"

export const Navbar = ()=> {
    return (
        <header>
            <nav>
                <ul>
                    {
                        categoriesData?.map((cate)=> (
                            <li key={cate?.id}>
                              <Image src={cate?.imagePath} width={30} height={30} alt={cate?.name} />  {cate?.name}
                              <ul>
                                {
                                    cate?.sub?.map((subCate)=> (
                                        <li key={subCate?.id}>
                                             <Image src={subCate?.imagePath} width={30} height={30} alt={subCate?.name} />  {subCate?.name}
                                        </li>

                                    ))
                                }
                              </ul>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </header>
    )
}