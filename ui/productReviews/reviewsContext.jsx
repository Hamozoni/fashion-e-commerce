"use client";

import { 
    createContext, 
    useEffect, 
    useState, 
    useTransition 
} from "react";
// server actions
import { getReviewaByProductId } from "../../actions/productReviews/getReviewsByproductId";
// icons
import {SyncLoader} from "react-spinners"
// context
export const ReviewsContext = createContext();

export const ReviewsContextProvider = ({children,product}) => {

    const [reviews,setReviews] = useState([]);
    const [loading,startTransition] = useTransition();

    const fetchReviews = (id)=> {
        startTransition(()=> {
            getReviewaByProductId(id)
            .then(data=> {
                if(data?.data) {
                    setReviews(data?.data);
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
            }}
        >
        {children}
    </ReviewsContext.Provider>
    
  )
}