
import {fetchData} from "@/lip/fetchData"
import {Navbar} from "./navbar";
import {ProductCard} from "./productCard";
import { TbAdjustmentsSearch } from "react-icons/tb";
import { LiaTruckLoadingSolid } from "react-icons/lia";
import { Loading } from "@/ui/models/Loading";
import {Error} from "@/ui/components/error"
import { ButtonWithIcon } from "@/ui/buttons/buttons";

export const ProductsContainer = async ({searchParams})=> {

    const {category,subcategory} = searchParams;

    const {products,count} = await fetchData(`admin/products?category=${category}&sub=${subcategory}&page=1`);


    return (
        <div className="">
            <Navbar />
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
                                setProducts={setProducts} 
                                />
                        ))
                    }
                    {
                        products?.length < allResults &&
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