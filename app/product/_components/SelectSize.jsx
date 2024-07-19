"use client";
import { useContext } from "react"
import { ProductDetailsContext } from "./ProductDetails";

export const SizesOptions = ({product,setProduct})=> {
  return (
    <ul className="flex items-center gap-1">
        {
          product.sizes?.map(({shortName,id,colorName})=> (

            colorName === product?.colorName ?
            <li 
                className={`${product.size === shortName ? "border-teal-200  bg-teal-600 text-teal-50": "hover:bg-green-100 text-teal-800"} min-w-[50px] uppercase text-center  border-2 rounded-md p-3 py-1 hover:scale-105 cursor-pointer`}
                onClick={()=> setProduct(prev=> {
                  const size = shortName;

                  return{...prev,size}
                })}
                key={id}
                >
                {shortName }
            </li>

            : null

        ))
        }
    </ul>
  )
}

export function SelectSize() {

  const {product,setProduct} = useContext(ProductDetailsContext);

  return (
    <section className="mt-3">
        <h5 
            className="pb-2 capitalize text-sm font-bold text-green-950"
            >avalble sizes:
          </h5>
          <SizesOptions 
              product={product} 
              setProduct={setProduct}
              />
    </section>
  )
};