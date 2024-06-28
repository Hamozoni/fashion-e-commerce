"use client"
// react
import { useEffect, useState } from "react";
// component
import ReviewCard from "./reviewCard";
// hooks
import { useCurrentUser } from "../../../hooks/useCurrentUser";
// server actions
import { getReviewaByProductId } from "../../../actions/productRating/getReviewsByproductId";

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
                <ReviewCard 
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