"use client"

import { useEffect, useState } from "react";
import { getReviewaByProductId } from "../../actions/productRating/getReviewsByproductId";
import RatingCard from "./RatingCard";


 const Reviews = ({productId})=> {

    const [reviews,setReviews] = useState([])

    useEffect(()=> {

        getReviewaByProductId(productId)
        .then(data=> {
            if(data?.data) {
                setReviews(data?.data)
            }
            console.log(data)
        })

    },[productId]);


  return (
    <div className="">
        {
            reviews?.map((review)=> (
                <RatingCard key={review?.id}  review={review}/>
            ))
        }
    </div>
  ) 
}

export default Reviews;
