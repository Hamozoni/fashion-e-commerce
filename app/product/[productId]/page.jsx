import { fetchData } from "../../_lip/fetchData";
import ImagesGalary from "../_components/ImagesGalary"
import ProductDetails from "../_components/ProductDetails";
import AddToCart from "../_components/AddToCard";


async function  product({params}) {
    const {productId} = params;

    const [data] = await fetchData(`product/${productId}`);

    console.log(data)
  return (
    <div className="p-4 lg:px-10">
      <div className="flex gap-3">
          <ImagesGalary productImages={data.images} selectedColor={data.images[1].color}/>
          <div className="">
             <ProductDetails product={data} selectedColor={data.images[1].color}/>
             <AddToCart />

          </div>
      </div>
      <section>
        <h4>Product description</h4>
        <aside>{data?.description}</aside>
      </section>
    </div>
  )
}

export default product
