import RatingInfo from "./RatingInfo";

function RatingsReviews() {

  return (
    <section className="py-4">
        <h4 className="text-lg font-bold text-green-950">
            Product Ratings & Reviews
        </h4>
        <div className="flex gap-3">
            <RatingInfo />
            <section className="">
              <h5>Reviews</h5>
              <div className="">
                 <div className=""></div>
              </div>
            </section>
        </div>
    </section>
  )
}

export default RatingsReviews