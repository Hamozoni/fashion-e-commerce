"use client"
import Overlay from "./Overlay";

import { useState } from "react";

import categories from "../../_data/category.json"

function Categories() {

     const [openCategory,setOpenCategory] = useState('');

    const className = {
        cateBtn: 'text-base font-bold text-green-950 uppercase ',
        ul: 'absolute left-0 -3 z-50  bg-green-100 rounded-md py-3 ',
        li: 'text-sm font-medium text-green-900 py-2 px-5 w-56  cursor-pointer line-clamp-1 hover:bg-green-50'

    }

  return (
     <section >

        <div className="flex items-center gap-4">
            {
                categories?.map(cate => (
                    <div className="relative" key={cate.name}>
                        <button className={className.cateBtn} onClick={()=> setOpenCategory(cate.name)}>{cate?.name}</button>
                        {
                            openCategory === cate.name ? 
                             (<ul className={className.ul}>
                                 {
                                    cate.subName.map(sub=> (
                                        <li className={className.li} key={sub}>{sub}</li>
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