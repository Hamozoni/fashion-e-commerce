import { fetchData } from "../../_lip/fetchData";
import ImagesGalary from "../_components/ImagesGalary"


async function  productDetails({params}) {
    const {productId} = params;

    const [data] = await fetchData(`product/${productId}`);

    console.log(data)
  return (
    <div className="p-4 lg:px-10">
        <ImagesGalary productImages={data.images} selectedColor={data.images[1].color}/>
    </div>
  )
}

export default productDetails
