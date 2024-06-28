"use client"

import { useEffect, useState } from "react";
import { getReviewaByProductId } from "../../actions/productRating/getReviewsByproductId";
import RatingCard from "./RatingCard";
import { useCurrentUser } from "../../hooks/useCurrentUser";


 const Reviews = ({productId})=> {

    const [reviews,setReviews] = useState([]);
    const user = useCurrentUser()

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
                <RatingCard 
                    key={review?.id}  
                    review={review} 
                    currrentUserId={user && user?.id}
                    />
            ))
        }
    </div>
  ) 
}

export default Reviews;
