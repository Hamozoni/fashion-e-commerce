
import {fetchData} from "@/lip/fetchData"
import {ProductCard} from "./productCard";
import { TbAdjustmentsSearch } from "react-icons/tb";
import { LiaTruckLoadingSolid } from "react-icons/lia";
import { ButtonWithIcon } from "@/ui/buttons/buttons";

export const ProductsContainer = async ({searchParams})=> {

    const {category,subcategory} = searchParams;

    const {products,count} = await fetchData(`admin/products?category=${category || 'all'}&sub=${subcategory || 'all'}&page=1`);


    return (
        <div className="">

            {
                <section className="">
                    <h6 className="text-lg font-bold text-gray-500 capitalize flex items-center gap-2">
                        <TbAdjustmentsSearch /> all results {count}
                    </h6>
                    {
                        products?.map((product)=> (
                            <ProductCard 
                                key={product?.id} 
                                product={product} 
                                />
                        ))
                    }
                    {
                        products?.length < count &&
                        <div className="max-w-[150px] mx-auto">
                            <ButtonWithIcon 
                                text='laod more' 
                                Icon={LiaTruckLoadingSolid} 
                                type='save'
                                onClick={handleLoadMore}
                                disabled={isLoadingMore}
                                />

                        </div>
                    }
                </section>

            }
        </div>
    )
};