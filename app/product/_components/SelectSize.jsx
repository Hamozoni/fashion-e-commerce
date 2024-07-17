"use client";
import { useContext } from "react"
import { ProductDetailsContext } from "./ProductDetails"

function SelectSize() {

  const {product,selectedSize,setSelectedSize} = useContext(ProductDetailsContext);

  return (
    <section className="mt-3">
        <h5 
            className="pb-2 capitalize text-lg font-bold text-green-950"
            >avalble sizes:
          </h5>
        <ul className="flex items-center gap-1">
            {
              product.sizes?.map(({shortName,id,colorName})=> (

                colorName === product?.colorName ?
                <li 
                    className={`${selectedSize === shortName ? " border-2 border-teal-200  bg-teal-600 text-teal-50 scale-105": "hover:bg-green-100 text-teal-800"} min-w-[50px] uppercase text-center border rounded-md p-3 py-1 hover:scale-105 cursor-pointer`}
                    onClick={()=> setSelectedSize(shortName)}
                    key={id}
                    >
                    {shortName }
                </li>

                : null

            ))
            }
        </ul>
    </section>
  )
}

export default SelectSize