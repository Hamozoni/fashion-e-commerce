
import ProductCard from "../../ui/products/ProductCard";

import {productsByCategoryAction} from "../../actions/products/productsByCategory"

async function page({params,searchParams}) {

    const {section} = params;
    const {sub} = searchParams;
    const { data } = await productsByCategoryAction(section,sub);

    console.log(data);


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