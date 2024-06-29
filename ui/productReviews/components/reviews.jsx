"use client"
// react
import { useEffect, useState, useTransition } from "react";
// component
import ReviewCard from "./reviewCard";
import WriteReview from "./writeReview";
// server actions
import { getReviewaByProductId } from "../../../actions/productReviews/getReviewsByproductId";
// loading
import {SyncLoader} from "react-spinners"

 const Reviews = ({product})=> {

    const [reviews,setReviews] = useState([]);
    const [loading,startTransition] = useTransition()

    useEffect(()=> {
        startTransition(()=> {
            getReviewaByProductId(product.id)
            .then(data=> {
                if(data?.data) {
                    setReviews(data?.data)
                }
                console.log(data)
            })
        })

    },[product.id]);

    if(loading) {
        return (
            <div className="w-full h-72 flex items-center justify-center">
                <SyncLoader color='#bbf7d0'/>
            </div>
        )
    }


  return (
    <div className="">
        <div className="">
            <WriteReview product={product} />
        </div>
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
    </div>
  ) 
}

export default Reviews;