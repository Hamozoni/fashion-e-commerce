import { BsCashCoin } from "react-icons/bs";
import { TbArrowBackUp } from "react-icons/tb";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdOutlineLockPerson } from "react-icons/md";


function ProductDetails({product}) {
  return (
    <div>
        <div className="">
            <h4>{product?.brand}</h4>
            <h5>{product?.name}</h5>
        </div>
        <div className="">
          <h4>{GiCreditsCurrency(product.priceInCent)}</h4>
          <p>Inclusive of VAT</p>

        </div>
        <div className="">
            <ul className="flex items-center justify-center gap-3">
                <li>
                    <BsCashCoin />
                    <span>cash on delivery</span>
                </li>
                <li>
                    <TbArrowBackUp />
                    <span>7 days returnable</span>
                </li>
                <li>
                    <CiDeliveryTruck />
                    <span>delivered by system</span>
                </li>
                <li>
                    <MdOutlineLockPerson />
                    <span>secure</span>
                </li>
            </ul>
        </div>
        <section className="">
           <h5>sizes : </h5>
           <ul className="flex items-center gap-3">
               {
                 product?.sizes?.map((size)=> (
                    <li key={size.id}>
                        {
                            size?.name
                        }
                    </li>

                 ))
               }
           </ul>
        </section>
        <section className="">
           <h5>colors : </h5>
           <ul className="flex items-center gap-3">
               {
                 product?.images?.map((image)=> (
                    <li key={size.id} className=""></li>

                 ))
               }
           </ul>
        </section>
    </div>
  )
}

export default ProductDetails