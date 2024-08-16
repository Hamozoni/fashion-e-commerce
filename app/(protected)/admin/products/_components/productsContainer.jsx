"use client";
import {ProductCard} from "./productCard";
import { TbAdjustmentsSearch } from "react-icons/tb";
import { LiaTruckLoadingSolid } from "react-icons/lia";
import { ButtonWithIcon } from "@/ui/buttons/buttons";
import { useState } from "react";

export const ProductsContainer = ({products,count})=> {

    const [data,setData] = useState(products);
    const [allResults,setAllResults] = useState(count)

    return (
        <div className="">

            {
                <section className="">
                    <h6 className="text-lg font-bold text-gray-500 capitalize flex items-center gap-2">
                        <TbAdjustmentsSearch /> all results {allResults}
                    </h6>
                    {
                        data?.map((product)=> (
                            <ProductCard 
                                key={product?.id} 
                                product={product} 
                                />
                        ))
                    }
                    {
                        data?.length < allResults &&
                        <div className="max-w-[150px] mx-auto">
                            <ButtonWithIcon 
                                text='laod more' 
                                Icon={LiaTruckLoadingSolid} 
                                type='save'
                                // onClick={handleLoadMore}
                                // disabled={isLoadingMore}
                                />

                        </div>
                    }
                </section>

            }
        </div>
    )
};