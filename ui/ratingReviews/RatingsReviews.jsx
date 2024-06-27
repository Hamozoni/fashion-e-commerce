import RatingInfo from "./RatingInfo";
import WriteReview from "./WhriteReview";
// import RatingCard from './RatingCard';
import Reviews from "./reviews";

function RatingsReviews({product}) {

  return (
    <section className="py-4">
        <h4 className="text-lg  font-bold text-green-950">
            Product Ratings & Reviews
        </h4>
        <div className="md:flex gap-5 pt-3 ">
            <RatingInfo />
            <section className="flex-1 basis-0.5">
              <h5 
                className="text-md font-medium text-green-900 pb-2 mb-2 border-b border-gray-100"
                >6 Reviews
              </h5>
              <WriteReview product={product}/>
              {/* <RatingCard /> */}
              <Reviews productId={product?.id}/>
            </section>
        </div>
    </section>
  )
}

export default RatingsReviews