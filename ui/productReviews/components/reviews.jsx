"use client"
// react
import { useEffect, useState, useTransition } from "react";
// component
import ReviewCard from "./reviewCard";
// server actions
import { getReviewaByProductId } from "../../../actions/productReviews/getReviewsByproductId";
// loading
import {SyncLoader} from "react-spinners"

 const Reviews = ({productId})=> {

    const [reviews,setReviews] = useState([]);
    const [loading,startTransition] = useTransition()

    useEffect(()=> {
        startTransition(()=> {
            getReviewaByProductId(productId)
            .then(data=> {
                if(data?.data) {
                    setReviews(data?.data)
                }
                console.log(data)
            })
        })

    },[productId]);

    if(loading) {
        return (
            <div className="w-full h-72 flex items-center justify-center">
                <SyncLoader color='#bbf7d0'/>
            </div>
        )
    }


  return (
    <div className="">
        {
            reviews?.map((review)=> (
                <ReviewCard 
                    key={review?.id}  
                    review={review} 
                    setReviews={setReviews}
                    />
            ))
        }
    </div>
  ) 
}

export default Reviews;