"use client";
import Link from "next/link";
import { useContext } from "react";
// components
import HeaderUserBar from "./components/HeaderUserBar";
import Categories from "../../components/Categories";
import SearchBar from "./components/SearchBar";
import UserAddress from "./components/userAddress";
import HeaderCart from "./components/headerCart";
import MobileMenu from "./components/mobileMenu";
import LikedList from "./components/likedList"
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
                    className='uppercase text-2xl font-extrabold text-lime-700'
                    >
                    system
                </Link>
            </div>
            <section className={`${className.flex} flex-1 justify-end`}>
                <UserAddress/>
                <SearchBar />
                {
                    innerWidth > 949 &&
                    <Categories />
                }
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