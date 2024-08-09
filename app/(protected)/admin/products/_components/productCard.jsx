import Image from "next/image"
import {getCurrency} from "../../../../../lip/getCurrency";

export const ProductCard = ({product})=> {
    const {imagePath,brand,name,colors,size} = product
    return (
        <div className="">
            <div className="">
                <Image  
                    src={imagePath} 
                    width={80} height={80} 
                    alt="product image"
                    />
            </div>
            <div className="">
                <div className="">
                    <h4>{brand}</h4>
                    <h3>{name}</h3>
                </div>
                <div className="">
                    {
                        colors?.map(({color,colorName,priceInHalala})=> (
                            <div key={color} className="" >
                                <div className="">
                                    <h5>{getCurrency(priceInHalala)}</h5>
                                    <h6>{colorName}</h6>
                                    <div 
                                        style={{backgroundColor: color}} 
                                        className="w-[40ps] h-[40px] rounded-md border border-teal-100"
                                        >

                                    </div>
                                </div>
                                {
                                    size?.map(({colorName : color,name,stackQuantity})=> (
                                        colorName === color ?
                                        <div className="">
                                            <h6>size: {name}</h6>
                                            <p>stack Quantity: {stackQuantity}</p>
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