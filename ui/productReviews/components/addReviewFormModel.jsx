"use client";
// react & next
import { useRouter } from "next/navigation";
import { useContext, useRef, useState, useTransition } from "react";

// icons
import { RxCross2 } from "react-icons/rx";
import { BiSave } from "react-icons/bi";
import { FcCancel } from "react-icons/fc";

// components
import Overlay from "../../../models/Overlay";
import ZodError  from "../../../components/zodError";

// validations
import {ratingSchema} from "../../../validationSchemas/ratingSchema";

// hooks
import { useCurrentUser } from "../../../hooks/useCurrentUser";

// server actions
import { PostData } from "../../../lip/fetchData";
// loading
import { PulseLoader } from "react-spinners";
import { ButtonWithIcon } from "../../../buttons/buttons";
// context
import { ReviewsContext } from "../reviewsContext";
import { FormModelProduct } from "./formModelProduct";


export const AddReviewFormModel = ({setShowModel})=> {


    const user = useCurrentUser();
    const {product,setReviews} = useContext(ReviewsContext)
    const [rating,setRating] = useState(1);
    const [error,setError] = useState(null);
    const router = useRouter();
    const [isPending,setisPending] = useState(false);

    const reviewFormRef = useRef();

    const handleReview = ()=> {

        const formData = new FormData(reviewFormRef.current);

        if(!user) {
          router.push('auth/login');
          setShowModel(false);
            return;
        }

        formData.append('rating',Number(rating));
        formData.append('productId',product?.id);
        formData.append('autherId',user?.id)

        const formValidation = ratingSchema.safeParse(Object.fromEntries(formData.entries()));
        setisPending(true)
        if(formValidation.success){
            setError(null);
            PostData('products/reviews',formData)
            .then(data => {

                console.log(data);
                    setReviews(prev=> [{...data,auther: {name: user?.name,image:user?.image}},...prev]);
                    setShowModel(false);
            })
            .catch((error)=> {
                throw new Error(error?.message);
            })
            .finally(()=> {
                setisPending(false);
            })
        };

        if(formValidation.error){
            setError(formValidation.error);
            setisPending(false)
        };

    };

    const className = {
        WhriteReview: "fixed top-16 z-50  max-h-[550px] rounded-md left-1/2 translate-x-[-50%] w-[380px] sm:w-[600px] bg-gray-50 border border-gray-200 overflow-y-auto",
        btn:'flex items-center justify-center gap-2  border py-2 rounded-full w-full text-sm font-bold  border-green-200 text-teal-800 hover:bg-green-100 hover:scale-95 '
    };

    return (
        <>
            <div className={className.WhriteReview}>
                <section className="min-h-fit p-3">
                    <span onClick={()=> setShowModel(false)}><RxCross2 /></span>
                    <header className="text-center mb-4">
                        <h3 className="text-lg text-teal-900 font-bold"
                            >Write a review
                        </h3>
                        <p className="text-teal-700">Tell us what you think about this product</p>
                    </header>
                    <FormModelProduct
                        error={error}
                        product={product} 
                        setRating={setRating} 
                        rating={rating}
                        />
                    <form action={handleReview} ref={reviewFormRef}>
                        <div className="w-full capitalize">
                            <label 
                                className="text-md text-gray-500 font-bold"
                                htmlFor="reviewImage"
                                > review images:
                            </label>
                            <input
                            className="p-2 my-3 bg-white rounded-md text-gray-500  w-full" 
                                id='reviewImage'
                                type="file" 
                                name='reviewImage'
                                accept="image/*"
                                multiple
                                />
                        </div>
                        <div className="w-full">
                            <label 
                                className=" text-md text-gray-500 font-bold"
                                htmlFor="rateText"
                                > Share your experience:
                            </label>
                            <textarea 
                                className="w-full p-3 my-3 text-teal-900" 
                                id="rateText" 
                                cols="20" 
                                rows="8"
                                name='rateText'
                                placeholder="write a review..."
                                required
                                >

                            </textarea>
                            <ZodError error={error} field='rateText' />

                        </div>
                        <div className="w-full capitalize">
                            <label
                                className="text-lg text-gray-500 font-bold" 
                                htmlFor="rateTitle">
                                give it a title
                            </label>
                            <input 
                                className="w-full p-3 my-3 text-teal-800" 
                                id="rateTitle" 
                                type='text'
                                name="rateTitle"
                                placeholder="review title..."
                                required
                                />
                                <ZodError error={error} field='rateTitle' />
                        </div>
                        <footer className="flex items-center justify-between gap-3 mt-3">
                            <button 
                                disabled={isPending}
                                type="submit"
                                className={`${className.btn}`}
                                >
                                    {
                                        isPending ?  
                                        <PulseLoader size={10} className=" opacity-50"/>
                                        :
                                        <>
                                        <BiSave  size={16}/>save
                                        </>
                                    }
                            </button>
                            <ButtonWithIcon
                                text='cancel'
                                Icon={FcCancel}
                                type="delete"
                                onClick={()=> setShowModel(false)}
                                />
                        </footer>
                    </form>
                </section>
            </div>
            <Overlay onClick={()=> setShowModel(false)}/>
        </>
    )
}