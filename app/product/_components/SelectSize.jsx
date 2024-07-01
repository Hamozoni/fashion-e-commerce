"use client";
import { useContext } from "react"
import { ProductDetailsContext } from "./ProductDetails"

function SelectSize() {

  const {product,selectedSize,setSelectedSize} = useContext(ProductDetailsContext);

  return (
    <section className="mt-3 flex gap-3">
        <h5 className="pb-2 capitalize text-lg font-bold text-green-950">sizes : </h5>
        <ul className="flex items-center gap-1 justify-center">
            {
              product.sizes?.map((size)=> (
                <li 
                    className={`${selectedSize === size?.name ? " border-green-600  bg-green-200": ""} min-w-[50px] uppercase text-center hover:bg-green-100 border rounded-lg p-3 py-1 hover:scale-105 cursor-pointer text-green-800`}
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