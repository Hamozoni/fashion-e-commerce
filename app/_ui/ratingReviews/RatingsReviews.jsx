import RatingInfo from "./RatingInfo";

function RatingsReviews() {

  return (
    <section className="py-4">
        <h4 className="text-lg font-bold text-green-950">
            Product Ratings & Reviews
        </h4>
        <div className="">
            <RatingInfo />
            <section className="">
              <h5>Reviews</h5>
            </section>
        </div>
    </section>
  )
}

export default RatingsReviews