import { fetchData } from "../../_lip/fetchData";


async function  productDetails({params}) {
    const {productId} = params;

    const data = await fetchData(`product/${productId}`)
  return (
    <div>{productId}</div>
  )
}

export default productDetails
