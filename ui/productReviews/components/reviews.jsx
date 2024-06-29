"use client"
// react
import { useContext, useEffect, useState, useTransition } from "react";
// component
import ReviewCard from "./reviewCard";
import WriteReview from "./writeReview";
// context
import {ReviewsContext} from "./reviewsContext";

 const Reviews = ()=> {

    const {reviews} = useContext(ReviewsContext);
    
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