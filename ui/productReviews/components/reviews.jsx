"use client"
// react
import { useContext, useEffect, useState, useTransition } from "react";
// component
import ReviewCard from "./reviewCard";
import WriteReview from "./writeReview";
// loading
import {SyncLoader} from "react-spinners"
// context
import {ReviewsContext} from "./reviewsContext";

 const Reviews = ()=> {

    const {loading,reviews} = useContext(ReviewsContext)


    if(loading) {
        return (
            <div className="w-full h-72 flex items-center justify-center">
                <SyncLoader color='#bbf7d0'/>
            </div>
        )
    }


  return (
    <section className="flex-1 max-w-full">
        <h5 
          className="text-md font-medium text-green-900 pb-2 mb-2 border-b border-gray-100"
           >{reviews?.length || 0} Reviews
        </h5>
        <div className="">
            <WriteReview />
        </div>
        <div className="">
            {
                reviews?.map((review)=> (
                    <ReviewCard  review={review} key={review?.id} />
                ))
            }
        </div>
    </section>
  ) 
}

export default Reviews;