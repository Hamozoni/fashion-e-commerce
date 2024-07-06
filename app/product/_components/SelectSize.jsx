"use client";
import { useContext } from "react"
import { ProductDetailsContext } from "./ProductDetails"

function SelectSize() {

  const {product,selectedSize,setSelectedSize} = useContext(ProductDetailsContext);

  return (
    <section className="mt-3">
        <h5 
            className="pb-2 capitalize text-lg font-bold text-green-950"
            >sizes: {selectedSize?.toUpperCase()}
          </h5>
        <ul className="flex items-center gap-1">
            {
              product.sizes?.map((size)=> (
                <li 
                    className={`${selectedSize === size?.name ? " border-2 border-teal-200  bg-teal-600 text-teal-50 scale-105": "hover:bg-green-100 text-teal-800"} min-w-[50px] uppercase text-center border rounded-md p-3 py-1 hover:scale-105 cursor-pointer`}
                    onClick={()=> setSelectedSize(size?.name)}
                    key={size.id}
                    >
                    { size?.name }
                </li>

            ))
            }
        </ul>
    </section>
  )
}

export default SelectSize