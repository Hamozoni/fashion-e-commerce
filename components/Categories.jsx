"use client"
import Overlay from "./Overlay";

import { useState } from "react";

import {categoriesData} from "../../_data/category.js"
import Image from "next/image";

function Categories() {

     const [openCategory,setOpenCategory] = useState('');

    const className = {
        cateBtn: `text-base font-bold text-green-950 uppercase`,
        ul: 'fixed top-[60px] left-0 w-screen flex items-center overflow-x-auto gap-2 z-50  bg-green-100 border-t border-green-200  py-3 lg:px-8 ',
        li: 'flex flex-col justify-center rounded-lg items-center gap-2 text-sm font-medium text-green-900 p-2 min-w-fit cursor-pointer line-clamp-1 hover:bg-green-50 border border-green-200'

    }

  return (
     <section >

        <div className="flex items-center gap-4">
            {
                categoriesData?.map(cate => (
                    <div className="relative" key={cate.name}>
                        <button 
                            className={`${className.cateBtn} ${cate.name === openCategory ? 'border-b border-green-800 text-lime-800 font-medium': ''}`} 
                            onClick={()=> setOpenCategory(cate.name)}
                            >
                                {cate?.name}
                        </button>
                        {
                            openCategory === cate.name ? 
                             (<ul className={className.ul}>
                                 {
                                    cate.subName.map(sub=> (
                                        <li className={className.li} key={sub}>
                                            <Image 
                                                className="rounded-lg h-[100px] w-[100px] border border-green-200" 
                                                src={sub.image} 
                                                width={100} 
                                                height={100} 
                                                alt={sub.name}
                                                />
                                            {sub.name}
                                        </li>
                                    ))
                                 }
                             </ul>)
                             :""
                        }

                    </div>
                ))

            }

        </div>
         
             {

                openCategory.length > 0 &&
                <Overlay onClick={()=> setOpenCategory('')} />

            }
        
     </section>
  )
}

export default Categories