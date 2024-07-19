
import {ProductCard} from "../../ui/productCard/ProductCard";

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
                    data?.length > 0 ?
                    data?.map((product)=> (
                        <ProductCard product={product}/>
                    ))
                    :
                     (
                        <div className=" h-[300px] w-full flex justify-center items-center">
                            <h5 className="capitalize font-bold text-xl text-green-800">no products found</h5>
                        </div>
                    )
                }
            </div>

        </section>
    )
}

export default page