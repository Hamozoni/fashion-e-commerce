"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import Image from "next/image";

// icons
import { FaStar } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { BiSave } from "react-icons/bi";
import { FcCancel } from "react-icons/fc";
import { CiStar } from "react-icons/ci";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";

// components
import Overlay from "../../components/Overlay";
import ZodError  from "../../ui/zodError"

// validations
import {ratingSchema} from "../../validationSchemas/ratingSchema";

// hooks
import { useCurrentUser } from "../../hooks/useCurrentUser";

// server actions

import {rateProduct} from "../../actions/productRating/rateProductAcion"
import { DotLoader } from "react-spinners";

const stars = new Array(5).fill('star');

function WhriteReview({product}) {

    const user = useCurrentUser()

    const [showModel,setShowModel] = useState(false);
    const [rating,setRating] = useState(0);
    const [rateText,setRateText] = useState(null);
    const [rateTitle,setRateTitle] = useState(null);

    const className = {
        WhriteReview: "fixed top-16 z-50 p-4 rounded-md left-1/2 translate-x-[-50%] w-[350px] md:w-[550px] bg-green-50 overflow-y-auto",
        btn:'flex items-center justify-center gap-2 flex-1 border py-1 rounded-md text-lg capitalize font-bold'
    }


    const ProductRating = ()=> {
        return (
            <div>
                <div className="flex gap-2 mb-5">
                    <div className="">
                        <Image 
                            src={product?.images[0]?.imagePath?.replace("public","")} 
                            width={200} 
                            height={200}
                            />
                    </div>
                    <div className="capitalize">
                        <h5 className="text-lg text-green-900 mb-2">{product?.name}</h5>
                        <div className="">
                            <h6 className="text-green-600">your rating ?</h6>
                            <div className="flex items-center gap-2">

                                {
                                    stars?.map((_,index)=> (
                                    <button 
                                        key={index} 
                                        onClick={()=> setRating(+index + 1)}
                                        >
                                        {
                                            rating > index ?
                                            <FaStar size={26} color="#eab308"/>
                                            : <CiStar size={26} color="#eab308" />
                                        }
                                    </button>

                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <ZodError error={error} field='rating' />
            </div>
        )
    };

    const [error,setError] = useState(null);
    const router = useRouter();
    const [isPending,startTransion] = useTransition()


    const handleReview = ()=> {


        if(!user) {
          router.push('auth/login');
          setShowModel(false);

            return;
        }

        const data = {
            rateText,
            rateTitle,
            rating,
            productId: product?.id,
            autherId: user?.id,
        }


        const formValidation = ratingSchema.safeParse(data);

        if(formValidation.success){
            setError(null);

            startTransion(()=> {
                rateProduct(data)
                .then(data=> {
                    if(data.success) {
                        setShowModel(false)
                    }
                })

            })

        }

        if(formValidation.error){
            setError(formValidation.error);
        }

        



        console.log(formValidation)
    };


  return (

    <div className="">
        {
            isPending && 
            <>
             <Overlay onClick=''/>
             <div className="fixed top-1/2 left-1/2 w-fit">
                <DotLoader color="#4ade80" />
             </div>
            </>
        }
        <div className="py-5 border-b border-green-100">
            <h6 className="text-green-800 pb-2 text-lg font-bold"
              >Share your thoughts with other customers
            </h6>
            <button 
                    onClick={()=> setShowModel(true)}
                    className="px-10 py-1 w-full flex items-center justify-center gap-2 bg-green-50 rounded-md border border-green-200 hover:bg-green-100 capitalize">
                   <MdOutlineDriveFileRenameOutline /> whrite a review
            </button>
        </div>
        {
            showModel ? 
            <>
                <div className={className.WhriteReview}>
                    <section className="h-fit">
                        <span onClick={()=> setShowModel(false)}><RxCross2 /></span>
                        <header className="text-center mb-4">
                            <h3 className="text-lg text-green-900 font-bold"
                                >Write a review
                            </h3>
                            <p className="text-green-700">Tell us what you think about this product</p>
                        </header>
                        <ProductRating />
                        <form action={handleReview}>
                            <div className="w-full">
                                <label 
                                    className="mb-3 text-lg text-green-900 font-bold"
                                    htmlFor="review"
                                    > Share your experience:
                                </label>
                                <textarea 
                                    onChange={(e)=> setRateText(e.target.value)}
                                    className="w-full p-3" 
                                    id="review" 
                                    cols="30" 
                                    rows="8"
                                    value={rateText}
                                    placeholder="write a review..."
                                    >

                                </textarea>
                                <ZodError error={error} field='rateText' />

                            </div>
                            <div className="w-full">
                                <label
                                    className="mb-3 text-lg text-green-900 font-bold" 
                                    htmlFor="title">
                                    give it a title
                                </label>
                                <input 
                                    onChange={(e)=> setRateTitle(e.target.value)}
                                    className="w-full p-3" 
                                    id="title" 
                                    type='text'
                                    value={rateTitle}
                                    placeholder="review title..."
                                    />
                                     <ZodError error={error} field='rateTitle' />
                            </div>
                            <footer className="flex items-center justify-between gap-3 mt-3">
                                <button 
                                   type="submit"
                                    className={`${className.btn} border-green-200 text-green-800 hover:bg-green-100`}>
                                    <BiSave />save
                                </button>
                                <button 
                                    onClick={()=> setShowModel(false)}
                                    className={`${className.btn} border-rose-200 text-rose-700 hover:bg-rose-100`}>
                                    <FcCancel/> cancel
                                </button>
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