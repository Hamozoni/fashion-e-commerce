"use client";
import { TbAdjustmentsSearch } from "react-icons/tb";

import { CustomerCard } from "./customerCard";

export const CardsContainer = ({customers,count})=> {


    return (
        <section className="">
            <h5 className="text-sm text-gray-400 font-bold mb-3 flex items-center capitalize">
               <TbAdjustmentsSearch /> all results: {count} 
            </h5>
            <div className="">
                {
                    customers?.map((customer)=> (
                        <CustomerCard key={customer?.id} customer={customer} />
                    ))
                }
            </div>
        </section>
    )
}