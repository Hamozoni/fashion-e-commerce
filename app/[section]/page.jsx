
import ProductCard from "../../ui/products/ProductCard";

import {productsByCategoryAction} from "../../actions/products/productsByCategory"

async function page({params,searchParams}) {

    const {section} = params;
    const {sub} = searchParams;
    const { data } = await productsByCategoryAction(section,sub);

    console.log(data);


    return (
        <section className="p-4 lg:px-8">
            <header>
                <h4 className="pb-3 capitalize font-bold text-xl text-green-800"> 
                    {section} {sub} products:
                </h4>
            </header>
            <div className="flex gap-3" >
                {
                    data?.map((product)=> (
                        <ProductCard product={product}/>
                    ))
                }
            </div>

        </section>
    )
}

export default page