"use client";

import { useEffect, useState } from "react";
import {fetchData} from "../../lip/fetchData";

import Loading from "../../app/loading";
export const HomeProducts = ()=> {

    const [products,setProducts] = useState([]);
    const [isLoading,setisLoading] = useState(false);
    const [error,setError] = useState(null)

    useEffect(()=> {
        setisLoading(true)
        fetchData(`products/catecory?category=men`)
        .then((data)=> {
            setProducts(data);
            console.log(data);
            setError(null);
        })
        .catch((error)=> {
            setError(error);
        })
        .finally(()=> {
             setisLoading(false)
        })
    },[]);


    return (
        <section>
            <h4>products for men may you like </h4>
            <div className="">
                {
                    isLoading ? <Loading /> : 
                    <div className="">

                    </div>
                }
            </div>
        </section>
    )
}