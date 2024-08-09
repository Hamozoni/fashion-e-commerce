"use client"
import {fetchData} from "../../../../../lip/fetchData";
import { useEffect } from "react";

export const ProductsContainer = ()=> {
    useEffect(()=> {
        fetchData()
    },[]);

    return (
        <div className="">

        </div>
    )
}