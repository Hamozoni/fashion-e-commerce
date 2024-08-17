"use client";

import { CustomerCard } from "./customerCard";

export const CardsContainer = ({customers})=> {


    return (
        <div className="">
            {
                customers?.map((customer)=> (
                    <CustomerCard customer={customer} />
                ))
            }
        </div>
    )
}