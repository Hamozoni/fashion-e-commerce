// components
import {ProductCard} from "../../ui/cards/productCard";
import {MoreProducts} from "./moreProducts"
// server action
import {productsByCategoryAction} from "../../actions/products/productsByCategory"

async function page({params,searchParams}) {

    const {section} = params;
    const {sub} = searchParams;
    const { data } = await productsByCategoryAction(section,sub);

    return (
        <section className="p-4 lg:px-8">
            <header>
                <h4 className="pb-3 capitalize font-bold text-xl text-green-800"> 
                    {section} {sub} products:
                </h4>
            </header>
            <div className="flex flex-wrap gap-2 sm:gap-4" >
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
            <MoreProducts category={section} />

        </section>
    )
}

export default page