import { AllResultsTitle } from "@/ui/components/allResultsTitle";
import { ProductsContainer } from "./productsContainer";

export default async function searchPage ({searchParams}){

    const query = searchParams.query;

    const {products,count} =  await fetchData(`search?query=${query}&page=1`);


    return (
        <div className="min-h-screen p-3 lg:px-8">
            <AllResultsTitle count={count} />
            <ProductsContainer products={products} count={count} />
        </div>
    )
}