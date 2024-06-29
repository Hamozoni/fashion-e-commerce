"use client";

import { createContext } from "react";
// server actions
import { getReviewaByProductId } from "../../../actions/productReviews/getReviewsByproductId";

export const ReviewsContext = createContext();

const ReviewsContextProvider = ({children,product}) => {

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


  return (
    <ReviewsContext.Provider 
        value={{
            product,
            reviews,
            setReviews,
            fetchReviews,
            loading
            }}
        >
        {children}
    </ReviewsContext.Provider>
    
  )
}

export default ReviewsContextProvider