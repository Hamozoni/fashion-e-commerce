"use client";

import { useSearchParams } from "next/navigation";


const SearchPage = ({params})=> {

    const {query} = params;
    const category = useSearchParams().get("category")

    console.log(query,category)
    return (
        <div className="">
            
        </div>
    )
}

export default SearchPage;