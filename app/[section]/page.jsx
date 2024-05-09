
import {fetchData} from "../_lip/fetchData";
import ProductCard from "../_ui/products/productCard";

async function page({params,searchParams}) {

    const {section} = params;
    const {sub} = searchParams;
    const data = await fetchData(`products/${section}?sub=${sub}`)

   


    return (
        <div className="p-4 lg:px-8">
            {
                data?.map((product)=> (
                    <ProductCard product={product}/>
                ))
            }

        </div>
    )
}

export default page