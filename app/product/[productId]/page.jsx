// components
import ProductDetails from "../_components/ProductDetails";
import ProductReviews from "../../../ui/productReviews/productReviews";
// server actions
import {productById} from "../../../actions/products/productById"


async function  productPage({params}) {

  const {productId} = params;
  const {data} = await productById(productId);

  return (
    <section className="p-4 lg:px-10 ">
      <header>
        <h4 className="pb-3 capitalize font-bold text-xl text-teal-800 border-dotted border-b-teal-100"> 
            product details:
        </h4>
      </header>
      <ProductDetails product={data} />
      <section className="py-4 border-b border-gray-100">
        <h4 
          className="pb-2 text-lg font-bold text-green-900"
           >Product description
        </h4>
        <p className="text-green-800">
          {data?.description}
        </p>
      </section>
      <ProductReviews product={data}/>
    </section>
  )
}

export default productPage;
