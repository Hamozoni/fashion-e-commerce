"use client";

import { CustomerCard } from "./customerCard";

export const CardsContainer = ({customers})=> {


    return (
        <section className="">
            <h5>custmers: </h5>
            <div className="">
                {
                    customers?.map((customer)=> (
                        <CustomerCard customer={customer} />
                    ))
                }
            </div>
        </section>
    )
}