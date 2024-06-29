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
    const [loading,startTransition] = useTransition();

    const fetchReviews = (id)=> {
        startTransition(()=> {
            getReviewaByProductId(id)
            .then(data=> {
                if(data?.data) {
                    setReviews(data?.data)
                }
                console.log(data)
            })
        })
    }

    useEffect(()=> {
        fetchReviews(product.id)
    },[product.id]);

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
            <WriteReview 
                product={product} 
                fetchReviews={fetchReviews}
                />
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
    </section>
  ) 
}

export default Reviews;