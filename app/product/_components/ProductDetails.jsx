

function ProductDetails({product}) {
  return (
    <div>
        <div className="">
            <h4>{product?.brand}</h4>
            <h5>{product?.name}</h5>
        </div>
        <h4>{GiCreditsCurrency(product.priceInCent)}</h4>
    </div>
  )
}

export default ProductDetails