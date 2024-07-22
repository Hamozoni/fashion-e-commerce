"use client"
import { useState } from "react";
import {CategoryProducts} from "../../ui/home/categoryProducts";


export const MoreProducts = ({category})=> {

    const [page,setPage] = useState(1);

    return (
        <div className="mt-10">
            <CategoryProducts 
                category={category} 
                page={page} 
                onClick={()=> setPage( page + 1)}
                />
        </div>
    )
}