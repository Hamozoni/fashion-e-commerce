"use client";

import React, { useContext, useEffect, useState} from 'react'
// context
import {ReviewsContext} from "../reviewsContext";
import { RatingStars } from './reviewsRating';

export const ReviewsAverage = () => {

    const {reviews} = useContext(ReviewsContext);
    const [reviewsAvg,setReviewsAvg] = useState(0);

    useEffect(()=>{
        const total = reviews?.reduce((sum,rating)=> sum + rating.rating,0)
        setReviewsAvg(total > 0 ? total / reviews?.length : 0);
    },[reviews]);

  return (
    <div className="flex items-center gap-2 mb-3">
        <h5 
            className="text-sm sm:text-lg font-bold text-teal-950 dark:text-teal-50"
            >{reviewsAvg > 0 ? reviewsAvg?.toFixed(1) : 0} out of 5
        </h5>
        <div className="flex items-center text-yellow-400 text-[30px]">
            <RatingStars rating={reviewsAvg} />
        </div>
    </div>
  )
};