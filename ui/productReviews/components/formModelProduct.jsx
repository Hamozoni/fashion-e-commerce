import Image from "next/image"
import ZodError from "../../../components/zodError"
import { RatingStars } from "./reviewsRating"


export const FormModelProduct = ({error,product,rating,setRating}) => {
    return (
        <div>
            <div className="flex gap-2 items-center">
                <div className="h-[150px] max-h-[150px]">
                    <Image
                    className="max-h-full" 
                        src={product?.images[0]?.imagePath?.replace("public","")} 
                        width={100} 
                        height={150}
                        />
                </div>
                <div className="capitalize">
                    <h5 className="text-lg text-teal-900 mb-2">{product?.name}</h5>
                </div>
            </div>
            <div className="text-center mb-4">
                <h6 
                    className="text-teal-600"
                    >your rating ? 
                </h6>
                <div className="flex items-center justify-center gap-2">
                <RatingStars rating={rating} setRating={setRating}/>
                </div>
            </div>
            <ZodError error={error} field='rating' />
        </div>
    )
}