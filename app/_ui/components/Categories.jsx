"use client"
import Overlay from "./Overlay";

import { useState } from "react";

import {categoriesData} from "../../_data/category.js"
import Image from "next/image";

function Categories() {

     const [openCategory,setOpenCategory] = useState('');

    const className = {
        cateBtn: 'text-base font-bold text-green-950 uppercase ',
        ul: 'absolute left-0 -3 z-50  bg-green-100 rounded-md py-3 ',
        li: 'flex items-center gap-2 text-lg font-medium text-green-900 py-2 px-5 w-56  cursor-pointer line-clamp-1 hover:bg-green-50 border-b hover:border-lime-700'

    }

  return (
     <section >

        <div className="flex items-center gap-4">
            {
                categoriesData?.map(cate => (
                    <div className="relative" key={cate.name}>
                        <button className={className.cateBtn} onClick={()=> setOpenCategory(cate.name)}>{cate?.name}</button>
                        {
                            openCategory === cate.name ? 
                             (<ul className={className.ul}>
                                 {
                                    cate.subName.map(sub=> (
                                        <li className={className.li} key={sub}>
                                            <Image className="rounded-lg h-[40px] w-[40px] border border-green-900" src={sub.image} width={40} height={40} alt={sub.name}/>
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