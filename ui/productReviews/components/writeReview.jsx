"use client";
// react & next
import { useRouter } from "next/navigation";
import { useContext, useRef, useState, useTransition } from "react";
import Image from "next/image";

// icons
import { RxCross2 } from "react-icons/rx";
import { BiSave } from "react-icons/bi";
import { FcCancel } from "react-icons/fc";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";

// components
import Overlay from "../../../components/Overlay";
import ZodError  from "../../../components/zodError";
import {RatingStars} from "./reviewsRating"

// validations
import {ratingSchema} from "../../../validationSchemas/ratingSchema";

// hooks
import { useCurrentUser } from "../../../hooks/useCurrentUser";

// server actions
import {rateProduct} from "../../../actions/productReviews/rateProductAcion";
// loading
import { PulseLoader } from "react-spinners";
import { ButtonWithIcon } from "../../../components/buttons";
// context
import { ReviewsContext } from "./reviewsContext";

const stars = new Array(5).fill('star');

function WhriteReview() {

    const user = useCurrentUser();
    const {product,setReviews} = useContext(ReviewsContext)

    const [showModel,setShowModel] = useState(false);
    const [rating,setRating] = useState(1);

    const ProductRating = ()=> {

        return (
            <div>
                <div className="flex gap-2 items-center">
                    <div className="">
                        <Image 
                            src={product?.images[0]?.imagePath?.replace("public","")} 
                            width={200} 
                            height={200}
                            />
                    </div>
                    <div className="capitalize">
                        <h5 className="text-lg text-green-900 mb-2">{product?.name}</h5>
                    </div>
                </div>
                <div className="text-center mb-4">
                    <h6 
                        className="text-green-600"
                        >your rating ? 
                    </h6>
                    <div className="flex items-center justify-center gap-2">
                    <RatingStars rating={rating} setRating={setRating}/>
                    </div>
                </div>
                <ZodError error={error} field='rating' />
            </div>
        )
    };

    const [error,setError] = useState(null);
    const router = useRouter();
    const [isPending,startTransion] = useTransition();
    const reviewFormRef = useRef();

    const handleReview = ()=> {

        const formData = new FormData(reviewFormRef.current);

        if(!user) {
          router.push('auth/login');
          setShowModel(false);

            return;
        }

        formData.append('rating',rating);
        formData.append('productId',product?.id);
        formData.append('autherId',user?.id);

        const data = {
            rating: +formData.get('rating'),
            productId: product.id,
            autherId: user?.id,
            rateText: formData.get('rateText'),
            rateTitle: formData.get('rateTitle'),
        }


        const formValidation = ratingSchema.safeParse(data);

        if(formValidation.success){
            console.log(formValidation?.data)
            setError(null);

            startTransion(()=> {
                rateProduct(formData)
                .then(data=> {
                    if(data?.review) {
                        setReviews(prev=> [{...data?.review,auther: {name: user?.name,image:user?.image}},...prev])
                    }
                })
                .finally(()=>{
                    setShowModel(false);
                })

            })

        }

        if(formValidation.error){
            setError(formValidation.error);
        }

    };

    const className = {
        WhriteReview: "fixed top-16 z-50 p-4 max-h-[550px] rounded-md left-1/2 translate-x-[-50%] w-[380px] sm:w-[600px] bg-green-50 overflow-y-auto",
        btn:'flex items-center justify-center gap-2  border py-1 rounded-md  w-full text-sm  border-green-200 text-green-800 hover:bg-green-100 hover:scale-95 '
    }


  return (

    <div className="">
        <div className="py-5 border-b border-green-100">
            <h6 className="text-green-800 pb-2 text-lg font-bold"
              >Share your thoughts with other customers
            </h6>
            <ButtonWithIcon
                text='whrite a review'
                Icon={MdOutlineDriveFileRenameOutline}
                type="save"
                onClick={()=> setShowModel(true)}
                />
        </div>
        {
            showModel ? 
            <>
                <div className={className.WhriteReview}>
                    <section className="min-h-fit">
                        <span onClick={()=> setShowModel(false)}><RxCross2 /></span>
                        <header className="text-center mb-4">
                            <h3 className="text-lg text-green-900 font-bold"
                                >Write a review
                            </h3>
                            <p className="text-green-700">Tell us what you think about this product</p>
                        </header>
                        <ProductRating />
                        <form action={handleReview} ref={reviewFormRef}>
                            <div className="w-full capitalize">
                                <label 
                                    className="mb-3 text-lg text-green-900 font-bold"
                                    htmlFor="reviewImage"
                                    > review image:
                                </label>
                                <input
                                className="p-2 bg-white rounded-sm text-green-900  w-full" 
                                    id='reviewImage'
                                    type="file" 
                                    name='reviewImage'
                                    accept="image/*"
                                    />
                            </div>
                            <div className="w-full">
                                <label 
                                    className="mb-3 text-lg text-green-900 font-bold"
                                    htmlFor="rateText"
                                    > Share your experience:
                                </label>
                                <textarea 
                                    className="w-full p-3" 
                                    id="rateText" 
                                    cols="30" 
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
                                    className="mb-3 text-lg text-green-900 font-bold" 
                                    htmlFor="rateTitle">
                                    give it a title
                                </label>
                                <input 
                                    className="w-full p-3" 
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
            :''
        }
    </div>
  )
}

export default WhriteReview