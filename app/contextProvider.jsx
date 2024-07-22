"use client";

import { useEffect, useState,createContext} from "react";
// next auth session
import { useSession } from "next-auth/react";
// creating context
export const AppContext = createContext();

const ContextProvider = ({children}) => {

  const {data,status} = useSession();
  
  const [innerWidth,setInnerWidth] = useState(0);
  const [currentUser,setCurrentUser] = useState(data?.user);

  const [theme,setTheme] = useState('user device');

    useEffect(()=> {
      setCurrentUser(data?.user)
    },[data]);

    useEffect(()=> {
        setInnerWidth(window.innerWidth);
        const getWidth = (e)=> {
          setInnerWidth(e.target.innerWidth);
        }
        window.addEventListener('resize',getWidth);
        return ()=> window.removeEventListener('resize',getWidth);
    },[]);

    useEffect(()=> {
      const storageTheme = localStorage.getItem('theme')
       if(storageTheme){
          document.documentElement.classList.add(storageTheme);
       }else {
          if(window.matchMedia('(prefers-color-scheme: dark)').matches){
            localStorage.setItem('theme','dark');
            document.documentElement.classList.add(storageTheme);
          }
         if(theme === 'user device'){
  

         }else if (theme === 'dark') {
            if(!document.documentElement.classList.includes('dark')) {
              document.documentElement.classList.add(storageTheme);
            }
         }else {
             document.documentElement.classList.remove('dark');
         }
       }
    },[theme]);

  return (
    <AppContext.Provider 
        value={{
          innerWidth,
          currentUser,
          setCurrentUser,
          status,
          theme,
          setTheme
        }}
        >
        {children}
    </AppContext.Provider>
  )
}

export default ContextProvider