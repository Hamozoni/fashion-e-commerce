
import ProductDetails from "../_components/ProductDetails";
import RatingReviews from "../../../ui/ratingReviews/RatingsReviews";
import {productById} from "../../../actions/products/productById"


async function  productPage({params}) {
    const {productId} = params;
    const {data} = await productById(productId);

    console.log(data)

  
  return (
    <div className="p-4 lg:px-10 ">
      <ProductDetails product={data} />
      <section className="py-4 border-b border-gray-100">
        <h4 className="pb-2 text-lg font-bold text-green-900">Product description</h4>
        <aside className="text-green-800">{data?.description}</aside>
      </section>
      <RatingReviews/>
    </div>
  )
}

export default productPage;
