
// component
import ReviewsDetails from "./components/reviewsDetails";
import Reviews from "./components/reviews";
// context provider
import ReviewsContextProvider from "./reviewsContext";

function ProductReviews({product}) {

  return (
    <section className="py-5">
       <ReviewsContextProvider product={product}>
          <header>
            <h4 className="text-2xl  font-bold text-teal-950  border-l-2 pl-3 mb-3 border-teal-200">
                  Product Ratings & Reviews
              </h4>
          </header>
          <div className="md:flex gap-4 lg:gap-8 pt-3 max-w-full ">
              <ReviewsDetails />
              <Reviews />
          </div>
       </ReviewsContextProvider>
    </section>
  )
}

export default ProductReviews