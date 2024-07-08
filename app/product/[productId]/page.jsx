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
        <h4 className="pb-3 capitalize font-extrabold text-3xl text-teal-900"> 
            product details:
        </h4>
      </header>
      <ProductDetails product={data} />
      <section className="py-5 border-b border-teal-50">
        <h4 
          className="pb-2 text-2xl font-bold text-teal-950"
           >Product description
        </h4>
        <p className="text-teal-900">
          {data?.description}
        </p>
      </section>
      <ProductReviews product={data}/>
    </section>
  )
}

export default productPage;
