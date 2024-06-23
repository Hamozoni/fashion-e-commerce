"use client";

import { useEffect, useState,createContext } from "react";

export const AppContext = createContext();

const ContextProvider = ({children}) => {

    const [innerWidth,setInnerWidth] = useState(480);

    useEffect(()=> {
        console.log(window.innerWidth);
        setInnerWidth(window.innerWidth);
        const getWidth = (e)=> {
          setInnerWidth(e.target.innerWidth);
            console.log(e.target.innerWidth);
        }
        window.addEventListener('resize',getWidth);
  
        return ()=> window.removeEventListener('resize',getWidth)
    },[]);

  return (
    <AppContext.Provider value={{innerWidth}}>
        {children}
    </AppContext.Provider>
  )
}

export default ContextProvider