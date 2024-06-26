"use client";
import { RxCross2 } from "react-icons/rx";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import Overlay from "../../components/Overlay";
import { BiSave } from "react-icons/bi";
import { FcCancel } from "react-icons/fc";
function WhriteReview() {

    const [showModel,setShowModel] = useState(false);

    const className = {
        WhriteReview: "fixed top-16 z-50 p-4 rounded-md left-1/2 translate-x-[-50%] w-[350px] bg-green-50",
        btn:'flex items-center justify-center gap-2 flex-1 border py-1 rounded-md text-lg capitalize font-bold'
    }

  return (

    <div className="">
        <div className="py-5 border-b border-green-100">
            <h6 className="text-green-800 pb-2 text-lg font-bold">Share your thoughts with other customers</h6>
            <button 
                    onClick={()=> setShowModel(true)}
                    className="px-10 py-1 w-full bg-green-50 rounded-md border border-green-200 hover:bg-green-100 capitalize">
                    whrite a review
            </button>
        </div>
        {
            showModel ? 
            <>
                <div className={className.WhriteReview}>
                    <span onClick={()=> setShowModel(false)}><RxCross2 /></span>
                    <section className="">
                        <h3>Write a review</h3>
                        <p>Tell us what you think about this product</p>
                        <div className="flex items-center">
                            <button><FaStar/></button>
                            <button><FaStar/></button>
                            <button><FaStar/></button>
                            <button><FaStar/></button>
                            <button><FaStar/></button>
                        </div>
                        <form  >
                            <div className="">
                                <label 
                                    className="pb-3"
                                    htmlFor="review"
                                    > Share your experience
                                </label>
                                <textarea 
                                    className="w-full" 
                                    id="review" 
                                    cols="30" 
                                    rows="8"
                                    placeholder="write a review..."
                                    >

                                </textarea>

                            </div>
                            <div className="">
                                <label htmlFor="title"></label>
                                <textarea 
                                    className="w-full" 
                                    id="title" 
                                    cols="30" 
                                    rows="3"
                                    placeholder="review title..."
                                    ></textarea>
                            </div>
                            <div className="flex items-center justify-between gap-3">
                                <button className={`${className.btn} border-green-200 text-green-800`}>
                                    <BiSave />save
                                </button>
                                <button className={`${className.btn} border-rose-200 text-rose-700`}>
                                    <FcCancel/> cancel
                                </button>
                            </div>

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