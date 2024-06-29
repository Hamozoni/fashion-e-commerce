"use client";

import { 
    createContext, 
    useEffect, 
    useState, 
    useTransition 
} from "react";
// server actions
import { getReviewaByProductId } from "../../../actions/productReviews/getReviewsByproductId";
// icons
import {SyncLoader} from "react-spinners"
// context
export const ReviewsContext = createContext();

const ReviewsContextProvider = ({children,product}) => {

    const [reviews,setReviews] = useState([]);
    const [reviewsAvg,setReviewsAvg] = useState(0);
    const [loading,startTransition] = useTransition();

    const fetchReviews = (id)=> {
        startTransition(()=> {
            getReviewaByProductId(id)
            .then(data=> {
                if(data?.data) {
                    setReviews(data?.data);
                    const total = data?.data?.reduce((sum,rating)=> sum + rating.rating,0)
                    setReviewsAvg(total / data?.data?.length);
                };
            });
        });
    };

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
    <ReviewsContext.Provider 
        value={{
            product,
            reviews,
            setReviews,
            fetchReviews,
            reviewsAvg
            }}
        >
        {children}
    </ReviewsContext.Provider>
    
  )
}

export default ReviewsContextProvider