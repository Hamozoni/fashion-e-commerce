import { getCurrency } from "@/lip/getCurrency";
import Image from "next/image";

const FIREBASE_IMAGES_URL = 'https://firebasestorage.googleapis.com/v0/b/e-commrerce.appspot.com/o/'

export const OfferProductCard = ({product})=> {
    const {
        product: {name,brand,images},
        priceInHalala,
        offerPriceInHalala,
        offerExpiresAt,
        color,
        colorName
    } = product;

    const className = {
        subTitle : 'text-xs sm:text-sm text-teal-900 dark:text-teal-100 font-bold'
    }

    return (
        <div className="p-3 rounded-md bg-gray-50 dark:bg-stone-900 mb-5 capitalize font-bold flex gap-3 border border-gray-200 dark:border-stone-700">
            <div className="bg-white min-w-[80px] h-full flex justify-center items-center rounded-md">
                <Image
                    className="w-[80px] h-[80px] rounded-md" 
                    src={`${FIREBASE_IMAGES_URL}${images?.find(e=> e.colorName === colorName)?.imagePath}`} 
                    width={80} 
                    height={80} 
                    alt={brand} 
                />
            </div>  
            <div className="">
                    <h5 className="text-sm sm:text-[18px] mb-2 font-bold text-teal-950 dark:text-teal-50 line-clamp-2">
                        {name}
                    </h5>
                <div className='flex gap-5 flex-wrap'>
                    <div className="">
                        <h6 className={className?.subTitle}>
                             brand: <small>{brand}</small>
                        </h6>
                        <h6 className={className?.subTitle}>
                            color: <small>{colorName}</small>
                        </h6>
                    </div>
                    <div className="">
                        <h5 className={`${className?.subTitle} line-through`}>
                            original price: <small>{getCurrency(priceInHalala)}</small>
                        </h5>
                        <h5 className={className?.subTitle}>
                            offer price: <small>{getCurrency(offerPriceInHalala)}</small>
                        </h5>
                    </div>
                    <h5 className={className?.subTitle}>
                            offer Expires At: <small>{new Date(offerExpiresAt).toLocaleString()}</small>
                    </h5>
                </div>
            </div>
        </div>
    )
}