"use client";
import Link from "next/link";
import HeaderUserBar from "./components/HeaderUserBar";
import Categories from "../../components/Categories";
import SearchBar from "./components/SearchBar";

import HeaderCart from "./components/headerCart"
import { useEffect, useState } from "react";


 function MainHeader () {

    const [windowWidth,setWindowWidth] = useState(480);

    const className = {
        flex:  'flex items-center gap-4 relative',
    };

    useEffect(()=> {
        const getWidth = (e)=> {
            console.log(e.target.innerWidth)
        }
        window.addEventListener('resize',getWidth);

        return ()=> window.removeEventListener('resize',getWidth)
    },[])


  return (
    <header className="sticky top-0 left-0 w-full max-w-full z-50 py-2 px-4 lg:px-8 bg-green-50">
        <div className={`${className.flex} justify-between w-full`}>
            <div className="">
                <Link 
                    href='/' 
                    className='uppercase text-2xl font-extrabold text-lime-700'
                    >
                    system
                </Link>
            </div>
            <section className={`${className.flex} flex-1`}>
                <SearchBar />
                {/* <Categories/> */}
                <HeaderUserBar />
                <HeaderCart/>
            </section>
        </div>
    </header>
  )
}

export default MainHeader