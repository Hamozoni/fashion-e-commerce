"use client"
import Image from "next/image";
import { useContext } from "react";
import { ProductDetailsContext } from "./ProductDetails";


function SelectImage() {

const {product:{colors,color : productColor,images},setProduct} = useContext(ProductDetailsContext);


  return (

    <section className="">
        <h5 className="flex capitalize items-center gap-3 pb-2 text-lg font-bold text-green-950"> 
           avalble colors:
        </h5>
        <section className="">
            <ul className="flex items-center gap-3">
                {

                    colors?.map(({colorName,color,priceInHalala})=> (

                        <li 
                            className={`${color === productColor ? 'bg-black' :' ' } border-2 border-teal-600  mb-1 w-6 h-6 rounded-full cursor-pointer`}
                            style={{backgroundColor: color}}
                            key={color} 
                            onClick={()=> setProduct((prev)=> {
                                const modified = {
                                    color :color,
                                    colorName : colorName,
                                    priceInHalala : priceInHalala,
                                    imagePath : images.find(e => e.colorName === colorName).imagePath

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