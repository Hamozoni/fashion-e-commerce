// component
import ProductDetails from "../_components/ProductDetails";
import ProductReviews from "../../../ui/productReviews/";
import {productById} from "../../../actions/products/productById"


async function  productPage({params}) {
    const {productId} = params;
    const {data} = await productById(productId);

    console.log(data)

  
  return (
    <section className="p-4 lg:px-10 ">
      <header>
        <h4 className="pb-3 capitalize font-bold text-xl text-green-800"> 
            product details:
        </h4>
      </header>
      <ProductDetails product={data} />
      <section className="py-4 border-b border-gray-100">
        <h4 className="pb-2 text-lg font-bold text-green-900">Product description</h4>
        <aside className="text-green-800">{data?.description}</aside>
      </section>
      <ProductReviews product={data}/>
    </section>
  )
}

export default productPage;
