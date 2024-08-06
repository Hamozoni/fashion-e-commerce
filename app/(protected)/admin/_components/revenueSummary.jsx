"use client";

import { useState } from "react";
import {SummaryFilter} from "./summaryFilter";

const now = new Date();

export const RevenueSummary = ()=> {
    const [filteredBy,setFilteredBy] = useState({
        name: 'year',
        date: new Date(now.getFullYear() - 1,now.getMonth(),now.getDay())
    });
    return (
        <section className="flex-1">
            <SummaryFilter 
                title='revenue' 
                filteredBy={filteredBy} 
                setFilteredBy={setFilteredBy} 
                />
        </section>
    )
}