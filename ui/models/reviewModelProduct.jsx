import Image from "next/image"
import {ZodError} from "../components/zodError"
import { RatingStars } from "../productReviews/components/reviewsRating"


export const FormModelProduct = ({error,product,rating,setRating}) => {
    return (
        <div>
            <div className="flex gap-2 items-center mb-5">
                <div className="h-[150px] max-h-[150px] w-[100px] min-w-[100px] bg-white">
                    <Image
                    className="max-h-full" 
                        src={product?.images[0]?.imagePath?.replace("public","")} 
                        width={100} 
                        height={150}
                        />
                </div>
                <div className="capitalize">
                    <h5 className="text-sm font-bold text-teal-950 dark:text-teal-50 mb-2">
                        {product?.name}
                    </h5>
                    <div className="text-center ">
                        <h6 
                            className="text-teal-950 dark:text-teal-50 capitalize"
                            >your rating ? 
                        </h6>
                        <div className="flex items-center justify-center gap-2">
                        <RatingStars rating={rating} setRating={setRating}/>
                        </div>
                    </div>
                    <ZodError error={error} field='rating' />
                </div>
            </div>
        </div>
    )
}