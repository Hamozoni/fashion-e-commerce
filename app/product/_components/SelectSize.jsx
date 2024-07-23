"use client";
import { useContext } from "react"
import { ProductDetailsContext } from "./poductDetails";

export const SizesOptions = ({product,setProduct})=> {
  return (
    <ul className="flex items-center gap-1">
        {
          product.sizes?.map(({shortName,id,colorName})=> (

            colorName === product?.colorName ?
            <li 
                className={`${product.size === shortName ? "border-2 shadow-md": "hover:bg-teal-50 hover:scale-105 text-teal-800"} uppercase text-center text-sm  border-2 rounded-full min-w-fit p-3 py-1 cursor-pointer`}
                style={product.size === shortName ? {borderColor: product.color}: {}}
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
            >avalble sizes: {product?.sizes?.find(e=> e.shortName === product.size)?.name}
          </h5>
          <SizesOptions 
              product={product} 
              setProduct={setProduct}
              />
    </section>
  )
};