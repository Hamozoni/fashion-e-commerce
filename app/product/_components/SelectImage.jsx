"use client"
import Image from "next/image";
import { useContext } from "react";
import { ProductDetailsContext } from "./ProductDetails";


function SelectImage() {

const {product,setProduct} = useContext(ProductDetailsContext);


  return (

    <section className="mt-2">
        <h5 className="flex capitalize items-center gap-3 text-sm font-bold text-green-950"> 
           avalble colors:
        </h5>
        <section className="mt-3">
            <ul className="flex items-center gap-3">
                {

                    product?.colors?.map(({colorName,color,priceInHalala})=> (

                        <li 
                            className={`${colorName === product.colorName ? 'border-teal-400 scale-105': '' } border-2 border-gray-200   mb-1 w-8 h-8 rounded-full shadow-md cursor-pointer`}
                            style={{backgroundColor: color}}
                            key={color} 
                            onClick={()=> setProduct((prev)=> {
                                const modified = {
                                    color :color,
                                    colorName : colorName,
                                    priceInHalala : priceInHalala,
                                    imagePath : product?.images.find(e => e.colorName === colorName).imagePath

                                }
                                return {...prev,...modified};
                            })}
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