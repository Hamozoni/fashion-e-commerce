
import Image from "next/image"
import {ProductColors} from "./productColors"
import {AddOffer} from "./addOffer";


const className = {
    smStitle : 'text-xs font-bold text-gray-600 dark:text-gray-300'
};

export const CardHeader = ({product})=> {

    const {name,brand,id,imagePath} = product
        return (
            <div className="mb-3">
                <h3 className="line-clamp-1 text-sm font-bold text-teal-950 dark:text-teal-50">
                    {name}
                </h3>
                <div className="flex gap-5">
                    <h4 className={className.smStitle}>
                        brand: <small>{brand}</small>
                    </h4>
                    <h6 className={className.smStitle}>
                        ID: <small>{id}</small>
                    </h6>
                </div>
            </div>
     )
}

export const ProductCard = ({product,setProducts})=> {

    const {colors,sizes} = product;

    return (
        <div className="gap-2 my-8 p-3 relative bg-gray-50 dark:bg-stone-950 rounded-md border border-teal-100 dark:border-stone-800 capitalize">
            <AddOffer 
                product={product} 
                setProducts={setProducts} 
                />
            <CardHeader product={product}/>
            <div className="">
                <div className="flex items-center gap-4 flex-wrap">
                    {
                        colors?.map((color)=> (
                            <ProductColors 
                                key={color?.id} 
                                sizes={sizes} 
                                color={color}
                                imagePath={product?.images?.find(e=> e.colorName === color.colorName)?.imagePath}
                                />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}