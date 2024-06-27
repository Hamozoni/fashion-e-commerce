"use client"

import { useEffect } from "react";
import { getReviewaByProductId } from "../../actions/productRating/getReviewsByproductId";


 const Reviews = ({productId})=> {

    useEffect(()=> {

        getReviewaByProductId(productId)
        .then(data=> {
            console.log(data)
        })

    },[productId]);


  return (
    <div className="">

    </div>
  ) 
}

export default Reviews;
