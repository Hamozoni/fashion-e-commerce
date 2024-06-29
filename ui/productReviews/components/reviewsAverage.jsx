"use client";

import React, { useContext, useEffect,useState } from 'react'
// icons
import { LiaStarSolid } from 'react-icons/lia';
// context
import {ReviewsContext} from "./reviewsContext";

const reviewsAverage = () => {

    const [reviewsAvg,setReviewsAvg] = useState(0)

    const {reviews} = useContext(ReviewsContext);

    useEffect(()=> {
        console.log(reviews?.length)
        if(reviews?.length){
            setReviewsAvg(()=> {
                let total = 0;
                const average = reviews?.reduce((prev,current)=> {
                    console.log(prev?.rating + current?.rating)
                },0);
                
                console.log(average)
            });
        };

    },[reviews]);

  return (
    <div className="flex items-center gap-2 mb-3">
        <h5 className="text-xl font-bold text-green-950">{reviewsAvg || 0} out of 5</h5>
        <div className="flex items-center text-yellow-400 text-[30px]">
        <LiaStarSolid />
        <LiaStarSolid />
        <LiaStarSolid />
        <LiaStarSolid />
        <LiaStarSolid />
        </div>
        <p className="text-md font-medium text-green-800">Based on 117 ratings</p>
    </div>
  )
}

export default reviewsAverage