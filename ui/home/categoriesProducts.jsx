"use client";

import { useState } from "react";
import {Products} from "./products";

export const CategoriesProducts = ()=> {

    const [menPage,setMenPage] = useState(1);
    const [womenPage,setWomenPage] = useState(1);
    const [kidsPage,setKidsPage] = useState(1);

    const handleMenPage = ()=> {
        setMenPage(menPage + 1);
    };

    const handleWomenPage = ()=> {
        setWomenPage(womenPage + 1);
    };

    const handleKidsPage = ()=> {
        setKidsPage(kidsPage + 1);
    };

    return (
        <div className=" translate-y-[-80px]">
            <Products 
                category='men' 
                page={menPage} 
                onClick={handleMenPage}
                />
            <Products 
                category='women' 
                page={womenPage}
                onClick={handleWomenPage}
                />
            <Products 
                category='kids' 
                page={kidsPage}
                onClick={handleKidsPage}
                />
      </div>
    )
}