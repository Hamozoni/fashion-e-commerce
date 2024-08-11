"use client";
// react & next
import { useContext, useRef, useState } from "react";

// icons
import { RxCross2 } from "react-icons/rx";
import { BiSave } from "react-icons/bi";
import { GiCancel } from "react-icons/gi";

// components
import {Overlay} from "./overlay";
import {ZodError}  from "../components/zodError";
import { ButtonWithIcon } from "../buttons/buttons";
import {FormModelProduct } from "./reviewModelProduct";
// validations
import {ratingSchema} from "../../validationSchemas/ratingSchema";
// server actions
import { PostData } from "../../lip/fetchData";
// context
import { ReviewsContext } from "../productReviews/reviewsContext";
import { AppContext } from "../../app/contextProvider";
import { Loading } from "./Loading";
import { FaBullseye } from "react-icons/fa6";

export const AddReviewFormModel = ({setShowModel})=> {

    const {currentUser} = useContext(AppContext);
    const {product,setReviews} = useContext(ReviewsContext)
    const [rating,setRating] = useState(1);
    const [error,setError] = useState(null);
    const [isPending,setisPending] = useState(false);

    const reviewFormRef = useRef();

    const handleReview = ()=> {

        const formData = new FormData(reviewFormRef.current);

        formData.append('rating',Number(rating));
        formData.append('productId',product?.id);
        formData.append('autherId',currentUser?.id)

        const formValidation = ratingSchema.safeParse(Object.fromEntries(formData.entries()));
        setisPending(true)
        if(formValidation.success){
            setError(null);
            PostData('products/reviews',formData)
            .then(data => {
                    setReviews(prev=> [{...data,auther: {name: currentUser?.name,image:currentUser?.image}},...prev]);
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
        WhriteReview: "fixed top-16 z-50  max-h-[550px] rounded-md left-1/2 translate-x-[-50%] w-[380px] sm:w-[600px] bg-gray-50 dark:bg-stone-950 border border-gray-200 dark:border-stone-800 overflow-y-auto",
    };

    return (
        <>
            <div className={className.WhriteReview}>
                 {
                    isPending ? <Loading /> : null
                 }
                <section className="min-h-fit p-3">
                    <span onClick={()=> setShowModel(false)}><RxCross2 /></span>
                    <header className="text-center mb-4">
                        <h3 className="text-lg text-teal-950 dark:text-teal-50 font-bold"
                            >Write a review
                        </h3>
                        <p className="text-teal-900 dark:text-teal-100">
                            Tell us what you think about this product
                        </p>
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
                                className="text-md text-stone-700 dark:text-stone-400  font-bold"
                                htmlFor="reviewImage"
                                > review images:
                            </label>
                            <input
                                className="p-2 my-3 bg-transparent rounded-md text-stone-700 dark:text-stone-400  w-full" 
                                id='reviewImage'
                                type="file" 
                                name='reviewImage'
                                accept="image/*"
                                multiple
                                />
                        </div>
                        <div className="w-full">
                            <label 
                                className=" text-md text-stone-700 dark:text-stone-400 font-bold"
                                htmlFor="rateText"
                                > Share your experience:
                            </label>
                            <textarea 
                                className="w-full p-3 my-3 border border-stone-400 dark:border-stone-800 rounded-md  bg-transparent text-stone-700 dark:text-stone-400 min-h-fit" 
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
                                className="text-lg  text-stone-700 dark:text-stone-400  font-bold" 
                                htmlFor="rateTitle">
                                give it a title
                            </label>
                            <input 
                                className="w-full p-3 my-3 border border-stone-400 dark:border-stone-800 rounded-md bg-transparent  text-stone-700 dark:text-stone-400 " 
                                id="rateTitle" 
                                type='text'
                                name="rateTitle"
                                placeholder="review title..."
                                required
                                />
                                <ZodError error={error} field='rateTitle' />
                        </div>
                        <footer className="flex items-center justify-between gap-3 mt-3">
                            <ButtonWithIcon
                                text='save'
                                Icon={BiSave}
                                type="primary"
                                disabled={isPending}
                                />
                            <ButtonWithIcon
                                text='cancel'
                                Icon={GiCancel}
                                type="delete"
                                disabled={false}
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