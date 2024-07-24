"use client"

import { useContext } from "react"
import { ProductDetailsContext } from "./poductDetails"

export function Specifications() {

    const {product: {specifications}} = useContext(ProductDetailsContext);

  return (

    <section className="py-5 border-b border-gray-200 dark:border-stone-900 capitalize">
        <h4  className="pb-2 text-lg font-bold text-teal-950 dark:text-teal-50">
            product specifications:
        </h4>
        <ul className="bg-gray-50 dark:bg-stone-950 p-3 rounded-md border border-gray-200 dark:border-stone-800">
            {
                specifications?.map((specif)=> (

                    <li 
                        className="flex items-center mb-3 gap-4 bg-white dark:bg-black rounded-md py-1 px-3"
                        key={specif?.id}
                        >
                        <span 
                            className="font-bold text-sm text-teal-950 dark:text-teal-50 flex-1">
                                {specif?.name} : 
                        </span>
                        <span 
                            className="text-sm font-bold text-teal-900 dark:text-teal-100 "
                            >{specif?.value}
                        </span>
                    </li>

                ))
            }
        </ul>
    </section>
  )
};