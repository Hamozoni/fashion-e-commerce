"use client"

import { useContext } from "react";

import {AppContext} from "../app/contextProvider";
import {Overlay} from "../components/Overlay"

export const ThemeModel = ()=> {

    const {theme,setTheme} = useContext(AppContext);

    return (
        <>
            <Overlay onClick={()=> ''}/>
            <div className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-50 rounded-md shadow-md p-3 z-[60]">
               <header>
                   <h5>appearacne:</h5>
               </header>
               <ul>
                    <li onClick={()=> localStorage.setItem('theme','user device')}>user device</li>
                    <li onClick={()=> localStorage.setItem('theme','dark')}>dark</li>
                    <li onClick={()=> localStorage.setItem('theme','light')}>light</li>
               </ul>

            </div>

        </>
    );
};