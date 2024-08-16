import { Navbar } from "./_components/navbar";
import {ProductsContainer} from "./_components/productsContainer";

const Products = async ({searchParams}) => {
  console.log('searchParams',searchParams);

const search = {
  category : 'all',
  subcategory: 'all'
}

const {category,subcategory} = searchParams || search

  const {products,count} = await fetchData(`admin/products?category=${category}&sub=${subcategory}&page=1`);

  return (
    <div className="p-3 lg:px-8">
        <ProductsContainer 
          products={products} 
          count={count}
          />
    </div>
  )
}

export default Products