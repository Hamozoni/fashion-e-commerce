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
            <Reviews product={product}/>
        </div>
    </section>
  )
}

export default ProductReviews