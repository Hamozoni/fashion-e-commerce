"use client";

import { createContext } from "react";

export const ReviewsContext = createContext();

const ReviewsContextProvider = ({children,productId}) => {

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
        fetchReviews(productId)
    },[productId]);


  return (
    <ReviewsContext.Provider 
        value={{
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