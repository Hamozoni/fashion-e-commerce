"use client"
import { useContext} from "react";
// components
import  ReviewsAverage  from "./reviewsAverage";
import { ReviewsContext } from "./reviewsContext";

const ratingArray = new Array(5).fill('star');

function ReviewsDetails() {

  const {reviews} = useContext(ReviewsContext);

    const className = {
        sectionClass: 'py-3 border-b border-gray-100',
        sectionHead: 'font-bold text-lg text-green-950 pb-2',
        sectionP: 'font-medium text-sm text-green-800'
      };

      const handleRatingPrecetage = (number)=> {
        const ratingLength = reviews?.filter(e=> e.rating === number)?.length;

        const precentage = (ratingLength * 100) / reviews?.length;
        return `${Math.ceil(precentage || 0)}%`;
      }

  return (
    <section className="flex-1 capitalize max-w-full min-w-[50%]">
        <h5  
          className="text-md font-medium text-green-900 pb-2 mb-2 border-b border-gray-100"
           >Overall Rating
        </h5>
        <div className="sticky top-[70px]">
          <ReviewsAverage/>
          <div className="py-4 border border-green-50 shadow-md px-2 rounded-md">
              <table className="min-w-full table ">
                  <tbody>
                  {
                      ratingArray?.map((star,index)=> (
                      <tr className="min-w-full table"> 
                          <td className="text-green-800 w-[52px] pb-2 font-medium">
                              {index + 1} {star}
                            </td>
                          <td className="px-3">
                              <div className="h-5 border bg-green-50 border-green-100 rounded-md overflow-hidden">
                                  <div 
                                      style={{width: handleRatingPrecetage(index + 1)}} 
                                      className="bg-yellow-400 h-5">
                                    </div>
                              </div>
                          </td>
                          <td 
                            className="text-green-800 font-medium w-[30px]"
                            > {handleRatingPrecetage(index + 1)}
                          </td>
                      </tr>

                      ))

                  }
                  </tbody>
              </table>
          </div>
          <section>
            <section className={className.sectionClass}>
                <h6 
                  className={className.sectionHead}
                  >How are ratings calculated?
              </h6>
                <p 
                  className={className.sectionP}
                  >
                    To calculate the overall star rating and percentage breakdown by star, we don’t use a simple average. Instead, our system considers things like how recent a review is and if the reviewer bought the item on System. It also analyses reviews to verify trustworthiness.
                </p>
            </section>
            <section className={className.sectionClass}>
                <h6 className={className.sectionHead}>How do I review this product?</h6>
                <p className={className.sectionP}>If you recently purchased this product from System, you can go to your Orders page and click on the Submit Review button</p>
            </section>
            <section className={className.sectionClass}>
                <h6 className={className.sectionHead}>How do I review this product?</h6>
                <p className={className.sectionP}>If you recently purchased this product from System, you can go to your Orders page and click on the Submit Review button</p>
            </section>

          </section>

        </div>
    </section>
  )
}

export default ReviewsDetails