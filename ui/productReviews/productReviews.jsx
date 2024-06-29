// component
import ReviewsDetails from "./components/reviewsDetails";
import Reviews from "./components/reviews";

function ProductReviews({product}) {

  return (
    <section className="py-4">
        <header>
           <h4 className="text-lg  font-bold text-green-950">
                Product Ratings & Reviews
            </h4>
        </header>
        <div className="md:flex gap-4 lg:gap-8 pt-3 max-w-full ">
            <ReviewsDetails />
            <section className="flex-1 max-w-full">
              <h5 
                className="text-md font-medium text-green-900 pb-2 mb-2 border-b border-gray-100"
                >6 Reviews
              </h5>
              <Reviews product={product}/>
            </section>
        </div>
    </section>
  )
}

export default ProductReviews