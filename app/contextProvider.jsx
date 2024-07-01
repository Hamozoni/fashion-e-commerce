"use client";

import { useEffect, useState,createContext } from "react";
// next auth session
import { useSession } from "next-auth/react";
// creating context
export const AppContext = createContext();

const ContextProvider = ({children}) => {

  const sessionUser = useSession()?.data?.user;
  
  const [innerWidth,setInnerWidth] = useState(0);
  const [currentUser,setCurrentUser] = useState(sessionUser);

  useEffect(()=> {
    setCurrentUser(sessionUser)
  },[sessionUser])

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
    <AppContext.Provider value={{innerWidth,currentUser,setCurrentUser}}>
        {children}
    </AppContext.Provider>
  )
}

export default ContextProvider