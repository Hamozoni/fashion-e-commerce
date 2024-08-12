"use client";

import { useEffect, useState,createContext, useCallback} from "react";
// next auth session
// creating context
export const AppContext = createContext();

const ContextProvider = ({children,session}) => {

  
  const [innerWidth,setInnerWidth] = useState(0);
  const [currentUser,setCurrentUser] = useState(session);
  
  const [theme,setTheme] = useState('user device');
  
  useEffect(()=> {
    setCurrentUser(session);
    },[session]);

    useEffect(()=> {
        setInnerWidth(window.innerWidth);
        const getWidth = (e)=> {
          setInnerWidth(e.target.innerWidth);
        }
        window.addEventListener('resize',getWidth);
        return ()=> window.removeEventListener('resize',getWidth);
    },[]);

    const useDevice = ()=> {
      if(window.matchMedia('(prefers-color-scheme: dark)').matches){
          localStorage.setItem('theme','user device');
          document.documentElement.classList.add('dark');
      }else {
         document.documentElement.classList.remove('dark');
      }
    };

    const handleTheme = useCallback(()=> {
      const storageTheme = localStorage.getItem('theme');
     if(storageTheme){
        if(storageTheme === 'user device'){
            useDevice();
            setTheme(storageTheme);
        }else if (storageTheme === 'dark') {
            document.documentElement.classList.add(storageTheme);
            setTheme(storageTheme);
        }else {
            document.documentElement.classList.remove('dark');
            setTheme('light');
        }
     }else {
        useDevice();
     };
     console.log( document.documentElement.classList)
    },[]);

    useEffect(()=> {
      handleTheme()
    },[theme,handleTheme]);

  return (
    <AppContext.Provider 
        value={{
          innerWidth,
          currentUser,
          setCurrentUser,
          theme,
          setTheme,
          handleTheme,
        }}
        >
        {children}
    </AppContext.Provider>
  )
}

export default ContextProvider