"use client"
import { Provider } from "react-redux"
import { store } from "../store/store"
import { useEffect, useState } from "react";


function ReduxProvider({children}) {

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
    <Provider store={store} innerWidth={innerWidth}>
       {children}
    </Provider>
  )
}

export default ReduxProvider;