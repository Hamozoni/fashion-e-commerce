import { getCurrency } from "@/lip/getCurrency";
import Image from "next/image"

export const OfferProductCard = ({product})=> {
    const {
        product: {name,brand,images},
        priceInHalala,
        offerPriceInHalala,
        offerExpiresAt,
        color,
        colorName
    } = product;

    return (
        <div className="">
            <Image 
                src={images?.find(e=> e.colorName === colorName)?.imagePath} 
                width={40} 
                height={40} 
                alt={brand} 
                />
            <div className="">
                <div className="">
                    <h6>{brand}</h6>
                    <h5>{name}</h5>

                </div>
                <div className="">
                    <div className="">
                        <h6>{colorName} :</h6>
                        <div style={{backgroundColor: color}} className=""></div>
                    </div>
                    <div className="">
                        <h6>{getCurrency(priceInHalala)}</h6>
                        <h5>{getCurrency(offerPriceInHalala)}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}