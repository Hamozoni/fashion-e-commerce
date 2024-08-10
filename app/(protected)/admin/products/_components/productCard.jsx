
import Image from "next/image"
import {ProductColors} from "./productColors"
import {AddOffer} from "./addOffer";


const className = {
    smStitle : 'text-xs font-bold text-gray-600 dark:text-gray-300'
};

export const CardHeader = ({product})=> {

    const {name,brand,id,imagePath} = product
    return (
        <div className="flex  gap-3 mb-2 border border-white dark:border-stone-600 rounded-md">
        <div className="w-[60px] h-[60px] min-w-[60px] rounded-md bg-white overflow-hidden">
            <Image 
               className="min-w-[60px] max-w-[60px] min-h-[60px] max-h-[60px] object-contain" 
                src={imagePath} 
                width={60} height={60} 
                alt="product image"
                />

        </div>
        <div className="">
            <h4 className={className.smStitle}>{brand}</h4>
            <h3 className="line-clamp-1 text-sm font-bold text-teal-950 dark:text-teal-50 mb-2">{name}</h3>
            <h6 className={className.smStitle}>ID : <small>{id}</small></h6>
        </div>
    </div>
    )
}

export const ProductCard = ({product})=> {
    const {colors,sizes} = product;

    return (
        <div className="gap-2 my-8 p-3 relative bg-teal-50 dark:bg-stone-900 rounded-md border border-teal-100 dark:border-stone-800 capitalize">
            <AddOffer product={product} />
            <CardHeader product={product}/>
            <div className="">
                <div className="flex items-center gap-4 flex-wrap">
                    {
                        colors?.map((color)=> (
                            <ProductColors key={color?.id} sizes={sizes} color={color}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}