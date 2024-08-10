import Image from "next/image"
import {getCurrency} from "../../../../../lip/getCurrency";

export const ProductCard = ({product})=> {
    const {imagePath,brand,name,colors,sizes,id} = product;

    const className = {
        smStitle : 'text-xs font-bold text-gray-600 dark:text-gray-300'
    }
    return (
        <div className="gap-2 my-5 p-3 bg-teal-50 dark:bg-stone-900 rounded-md border border-teal-100 dark:border-stone-800 capitalize">
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
            <div className="">
                <div className="flex items-center gap-4 flex-wrap">
                    {
                        colors?.map(({color,colorName,priceInHalala})=> (
                            <div key={color} className="flex items-center gap-2 p-[2px] rounded-md bg-white dark:bg-stone-700 flex-grow" >
                                <div className="">
                                    <h5 className={className.smStitle}>{getCurrency(priceInHalala)}</h5>
                                    <div 
                                        style={{backgroundColor: color}} 
                                        className=" h-[30px] rounded-md border border-teal-100 mt-2"
                                        >

                                    </div>
                                </div>
                                <div className="flex gap-2 items-center p-2 rounded-md bg-gray-50 dark:bg-stone-600 flex-grow">
                                    <div className="">
                                        <h6 className={className.smStitle}>sizes: </h6>
                                        <h6 className={className.smStitle}>quantities: </h6>
                                    </div>
                                    {
                                        sizes?.map(({colorName : color,shortName,stackQuantity})=> (
                                            colorName === color ?
                                            <div className="text-center bg-white dark:bg-stone-700 p-2 rounded-md">
                                                <h6 className={className.smStitle}>{shortName}</h6>
                                                <p className={className.smStitle}>{stackQuantity}</p>
                                            </div>
                                            : null
                                        ))
                                    }

                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}