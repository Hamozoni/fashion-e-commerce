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
                <h6>{brand}</h6>
                <h5>{name}</h5>
            <div className="flex items-center gap-3">
                <Image
                className="w-[80px] h-[80px]" 
                src={images?.find(e=> e.colorName === colorName)?.imagePath} 
                width={40} 
                height={40} 
                alt={brand} 
                />
                <div className="flex items-center gap-3">
                    <div className="">
                        <h6>color: {colorName}</h6>
                    </div>
                    <div className="">
                        <h6>original price: {getCurrency(priceInHalala)}</h6>
                        <h5>offer price: {getCurrency(offerPriceInHalala)}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}