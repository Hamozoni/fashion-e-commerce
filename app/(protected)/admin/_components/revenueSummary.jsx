"use client";

import { useEffect, useState } from "react";
import {SummaryFilter} from "./summaryFilter";
import {revenueFilterDates} from "../../../../data/filteringDates"
import { fetchData } from "../../../../lip/fetchData";


export const RevenueSummary = ()=> {
    const [filteredBy,setFilteredBy] = useState(revenueFilterDates[3]);

    useEffect(()=> {
        fetchData(`admin/revenue?dates=${JSON.stringify(filteredBy?.date)}`)
        .then((data)=> {
            console.log(data)
        })
    },[filteredBy])
    return (
        <section className="flex-1">
            <SummaryFilter 
                data={revenueFilterDates}
                title='revenue' 
                filteredBy={filteredBy} 
                setFilteredBy={setFilteredBy} 
                />
        </section>
    )
}