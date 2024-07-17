"use client"
import Image from "next/image";
import { useContext } from "react";
import { ProductDetailsContext } from "./ProductDetails";


function SelectImage() {

const {product:{images,colors}} = useContext(ProductDetailsContext);


  return (

    <section className="">
        <h5 className="flex capitalize items-center gap-3 pb-2 text-lg font-bold text-green-950"> 
           avalble colors:
        </h5>
        <section className="">
            <ul className="flex items-center gap-3">
                {

                    colors?.map(({colorName,color})=> (

                        <li 
                            className={'border-2 border-gray-100 outline outline-teal-600 shadow-md mb-1 w-6 h-6 rounded-full cursor-pointer'}
                            style={{backgroundColor: color}}
                            key={color} 
                            onClick={()=> ''}
                            >
                        </li>
                    ))
                    
                }

            </ul>
        </section>
    </section>
  )
}

export default SelectImage;