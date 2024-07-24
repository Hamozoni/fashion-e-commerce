"use client"
import { useContext } from "react";
import { ProductDetailsContext } from "../../app/product/_components/poductDetails";

export const ColorOptions = ({product,setProduct})=> {
    return (
        <section className="mt-3">
        <ul className="flex items-center gap-2">
            {

                product?.colors?.map(({colorName,color,priceInHalala})=> (

                    <li 
                        className={`${colorName === product.colorName ? 'border-2 shadow-xl' : ''} flex items-center justify-center   mb-1 w-8 h-8 rounded-full shadow-md cursor-pointer`}
                        key={color} 
                        style={{borderColor: color}}
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
                            <div style={{backgroundColor: color}} className="w-4 h-4 rounded-full border border-teal-700 dark:border-teal-50">

                            </div>
                    </li>
                ))
                
            }

        </ul>
    </section>
    )
}
export function SelectColor() {

   const {product,setProduct} = useContext(ProductDetailsContext);

  return (

    <section className="mt-2">
        <h5 className="flex capitalize items-center gap-3 text-sm font-bold text-green-950 dark:text-teal-50"> 
           avalble colors: {product?.colorName}
        </h5>
        <ColorOptions 
            product={product}  
            setProduct={setProduct}
            />
    </section>
  )
}