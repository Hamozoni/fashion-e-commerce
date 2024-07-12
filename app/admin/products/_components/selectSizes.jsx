"use client"

import { useState } from "react";
import {categoriesData} from "../../../../data/categoriesData";

const className = {
    li:'text-teal-900 cursor-pointer px-3 py-1 rounded-md bg-gray-50 border-2 border-gray-200'
}


export const SelectSizes = ()=> {

    const [sizes,setSizes] = useState([]);
      

    const handleSize = (size)=> {

        const exsistingSize = sizes?.find(e=> e.id === size.id);

        if(!!exsistingSize) {
          const  newSizes = sizes?.filter(e => e.id !== size.id);

          setSizes(newSizes);
        } else {
            setSizes(prev=> [...prev,size])
        };

        console.log(sizes)
        console.log(sizes?.includes(size))
    }


    return (
        <div className="">
            <h5>place slesct avalbe sizes *</h5>
            <ul className="flex items-center  gap-3">
                {
                    categoriesData[0]?.sizes?.map(({name,shortName,id})=> (
                        <li 
                            key={id}
                            onClick={()=> handleSize({name,shortName,id})}
                            className={`${className.li} ${sizes?.find(e=> e.id === id)  ? 'border-teal-300 scale-105 shadow-md' : 'border-gray-200'}`}
                            >
                                {shortName}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}