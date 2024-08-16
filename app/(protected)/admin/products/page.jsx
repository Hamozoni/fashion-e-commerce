import { Navbar } from "../_components/navbar";
import {ProductsContainer} from "./_components/productsContainer";

const Products = () => {
  return (
    <div className="p-3 lg:px-8">
        <Navbar />
        <ProductsContainer />
    </div>
  )
}

export default Products