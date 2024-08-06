"use client";

import { useState } from "react";
import { useEffect } from "react";
import {fetchData} from "../../../../../lip/fetchData";

export const  Navbar = ()=> {

    const [sectionsData,setSectionData] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError] = useState(null);



    useEffect(()=> {
        setIsLoading(true);
        fetchData('admin/products/sectionsQuantity')
        .then((data)=> {
            console.log(data)
        })
    },[]);

    return (
        <header>
            <nav>
                <ul>
                    <li></li>
                </ul>
            </nav>
        </header>
    )
}