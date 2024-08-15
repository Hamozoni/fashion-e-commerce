// components
import {ProductCard} from "@/ui/cards/productCard";
import {MoreProducts} from "./moreProducts"
// server action
import {productsByCategoryAction} from "@/actions/products/productsByCategory"
import { NoResults } from "@/ui/components/noResults";


export async function generateMetadata({params,searchParams}) {
    const {section} = params;
    const {sub} = searchParams;
    return {
        title: `${section} ${sub} products`,
        description: `${section} ${sub} fashion products` 
    }
};

async function page({params,searchParams}) {

    const {section} = params;
    const {sub} = searchParams;
    const { data } = await productsByCategoryAction(section,sub);

    return (
        <section className="p-4 lg:px-8">
            <header>
                <h4 className="pb-3 capitalize font-bold text-lg text-teal-950 dark:text-teal-100"> 
                    {section} {sub} products:
                </h4>
            </header>
            <div className="flex flex-wrap gap-2 sm:gap-4" >
                {
                    data?.length > 0 ?
                    data?.map((product)=> (
                        <ProductCard key={product?.id} product={product}/>
                    ))
                    :

                    <NoResults />
                }
            </div>
            <MoreProducts category={section} />

        </section>
    )
}

export default page;