"use client";
import Link from "next/link";
import { useContext } from "react";
// components
import HeaderUserBar from "./components/HeaderUserBar";
import SearchBar from "./components/SearchBar";
import UserAddress from "./components/userAddress";
import HeaderCart from "./components/headerCart";
import MobileMenu from "./components/mobileMenu";
import LikedList from "./components/likedList"
import { Categories } from "./components/categories";
// app context
import { AppContext } from "../../app/contextProvider";

 function MainHeader () {

    const className = {
        flex:  'flex items-center gap-4 relative',
    };

  const {innerWidth} = useContext(AppContext)


  return (
    <header className="sticky top-0 left-0 w-full max-w-full z-50 py-2 px-4 lg:px-8 bg-white">
        <div className={`${className.flex} justify-between w-full`}>
            <div className="">
                <Link 
                    href='/' 
                    className='uppercase text-lg lg:text-3xl font-extrabold text-teal-500'
                    >
                    system
                </Link>
            </div>
            <section className={`${className.flex} flex-1 justify-end`}>
                <Categories />
                <SearchBar />
                <UserAddress/>
                <HeaderUserBar />
                <LikedList />
                <HeaderCart/>
                {
                    innerWidth < 950 && 
                    <MobileMenu/>
                    
                }
            </section>
        </div>
    </header>
  )
}

export default MainHeader