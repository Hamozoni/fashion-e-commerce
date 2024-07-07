"use client";

import React, { useContext, useEffect, useState} from 'react'
// icons
import { TiStarFullOutline,TiStarHalfOutline } from "react-icons/ti";
import { CiStar } from "react-icons/ci";
// context
import {ReviewsContext} from "../reviewsContext";

const reviewsStars = new Array(5).fill('star')

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
            className="text-xl font-bold teal-green-950"
            >{reviewsAvg > 0 ? reviewsAvg?.toFixed(1) : 0} out of 5
        </h5>
        <div className="flex items-center text-yellow-400 text-[30px]">
            {
                reviewsStars?.map((_,index)=> (

                    (reviewsAvg > index && reviewsAvg < index + 1)  ? 
                    <TiStarHalfOutline />
                    :reviewsAvg > index ?
                    <TiStarFullOutline /> :
                    <CiStar />
                       
                ))
            }
        </div>
    </div>
  )
};