import Image from "next/image"
import {getCurrency} from "../../../../../lip/getCurrency";

export const ProductCard = ({product})=> {
    const {imagePath,brand,name,colors,sizes} = product;

    const className = {
        smStitle : 'text-xs font-bold text-gray-600'
    }
    return (
        <div className="flex items-center gap-2 my-5 p-3 bg-teal-50 rounded-md border border-teal-100 capitalize">
            <div className="flex items-center">
                <Image  
                    src={imagePath} 
                    width={60} height={60} 
                    alt="product image"
                    />
                <div className="">
                    <h4 className={className}>{brand}</h4>
                    <h3 className="line-clamp-1 text-sm font-bold text-teal-950 mb-2">{name}</h3>
                </div>
            </div>
            <div className="">
                <div className="flex items-center gap-4 flex-wrap">
                    {
                        colors?.map(({color,colorName,priceInHalala})=> (
                            <div key={color} className="flex items-center gap-2 p-2 rounded-md bg-white flex-grow" >
                                <div className="">
                                    <h5>{getCurrency(priceInHalala)}</h5>
                                    <div 
                                        style={{backgroundColor: color}} 
                                        className=" h-[30px] rounded-md border border-teal-100"
                                        >

                                    </div>
                                </div>
                                <div className="p-2 rounded-md bg-teal-50">
                                    <h6 className={className.smStitle}>sizes: </h6>
                                    <h6 className={className.smStitle}>quantities: </h6>
                                </div>
                                {
                                    sizes?.map(({colorName : color,shortName,stackQuantity})=> (
                                        colorName === color ?
                                        <div className="p-2 rounded-md bg-teal-50">
                                            <h6 className={className.smStitle}>{shortName}</h6>
                                            <p className={className.smStitle}>{stackQuantity}</p>
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