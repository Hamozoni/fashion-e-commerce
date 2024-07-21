"use client";
import { RxCross2 } from "react-icons/rx";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import Overlay from "../../components/Overlay";

function WhriteReview() {

    const [showModel,setShowModel] = useState(false);

  return (

    <div className="">
        <div className="py-5 border-b border-green-100">
            <h6 className="text-green-800 pb-2">Share your thoughts with other customers</h6>
            <button 
                    onClick={()=> setShowModel(true)}
                    className="px-10 py-1 rounded-md border border-green-200 hover:bg-green-100 capitalize">
                    whrite a review
            </button>
        </div>
        {
            showModel ? 
            <>
                <div className="fixed top-0 left-1/2 translate-x-[-50%] w-fit bg-green-50">
                    <span><RxCross2 /></span>
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
                                <label htmlFor="review"> Share your experience</label>
                                <textarea id="review" cols="30" rows="10"></textarea>

                            </div>
                            <div className="">
                                <label htmlFor="title"></label>
                                <textarea id="title" cols="30" rows="10"></textarea>
                            </div>
                            <div className="">
                                <button>cancel</button>
                                <button>save</button>
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