// components
import {ProductDetails} from "../_components/poductDetails";
import {ProductReviews}from "../../../ui/productReviews/productReviews";
import {RelatedProducts} from "../_components/relatedProducts"
import { MoreProducts } from "../../[section]/moreProducts";
// server actions
import {productById} from "../../../actions/products/productById";


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
      <ProductDetails data={data} />
      <section className="py-6 border-b border-gray-200 mb-10">
        <h4 
          className="pb-2 text-2xl font-bold text-teal-950"
           >Product describtion:
        </h4>
        <p className="text-teal-900">
          {data?.describtion}
        </p>
      </section>
      <RelatedProducts id={productId} />
      <ProductReviews product={data}/>
      <MoreProducts category={data?.category} />
    </section>
  )
}

export default productPage;
