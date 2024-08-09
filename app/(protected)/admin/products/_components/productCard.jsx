import Image from "next/image"
import {getCurrency} from "../../../../../lip/getCurrency";

export const ProductCard = ({product})=> {
    const {imagePath,brand,name,colors,sizes} = product
    return (
        <div className="flex items-center gap-2 my-5 p-3 bg-teal-50 rounded-md border border-teal-100 capitalize">
            <div className="min-w-[80px]">
                <Image  
                    src={imagePath} 
                    width={80} height={80} 
                    alt="product image"
                    />
            </div>
            <div className="">
                <div className="">
                    <h4 className="text-xs font-bold text-gray-600">{brand}</h4>
                    <h3 className="line-clamp-1 text-sm font-bold text-teal-950 mb-2">{name}</h3>
                </div>
                <div className="flex items-center gap-4 flex-wrap">
                    {
                        colors?.map(({color,colorName,priceInHalala})=> (
                            <div key={color} className="flex items-center gap-2 p-2 rounded-md bg-white" >
                                <div className="">
                                    <h5>{getCurrency(priceInHalala)}</h5>
                                    <div 
                                        style={{backgroundColor: color}} 
                                        className=" h-[30px] rounded-md border border-teal-100"
                                        >

                                    </div>
                                </div>
                                <div className="p-2 rounded-md bg-teal-50">
                                    <h6>sizes: </h6>
                                    <h6>quantities: </h6>
                                </div>
                                {
                                    sizes?.map(({colorName : color,shortName,stackQuantity})=> (
                                        colorName === color ?
                                        <div className="p-2 rounded-md bg-teal-50">
                                            <h6>{shortName}</h6>
                                            <p>{stackQuantity}</p>
                                        </div>
                                        : null
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}