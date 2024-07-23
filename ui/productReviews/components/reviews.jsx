"use client"
// react
import { useContext} from "react";
// component
import {ReviewCard} from "../cards/reviewCard";
import {ReviewsHeader} from "./reviewsHeader";
// context
import {ReviewsContext} from "../reviewsContext";

export const Reviews = ()=> {

    const {reviews} = useContext(ReviewsContext);
    
  return (
    <div className="flex-1 max-w-full">
        <div className="mb-8">
            <ReviewsHeader />
        </div>
        <section className="">
          <h5 
            className="text-md font-bold text-teal-900 pb-2 mb-2 border-b border-gray-100"
            >{reviews?.length || 0} Reviews
          </h5>
          <div className="">
              {
                  reviews?.map((review,index)=> (
                      <ReviewCard  
                          review={review}
                          key={review?.id}
                          index={index}
                          />
                  ))
              }

          </div>
        </section>
    </div>
  ) 
};