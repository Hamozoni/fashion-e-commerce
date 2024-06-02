"use client";

import Link from "next/link";
import HeaderUserBar from "./HeaderUserBar";
import Categories from "./Categories";
import SearchBar from "./SearchBar";
import { signOutAction } from "../actions/signOut";
import { useTransition } from "react";
import Overlay from "./Overlay";
import {SyncLoader} from "react-spinners";


async function MainHeader () {

    const [isLoading,startTranation] = useTransition()

    const className = {
        flex:  `flex items-center gap-8`,
        logo: `uppercase text-2xl font-extrabold text-lime-700`
    }

    const signOut = ()=> {

        startTranation(()=> {
            signOutAction();
        })

    }
  return (
    <header className="bg-lime-100 sticky top-0 left-0 w-full z-50 py-2 px-4 lg:px-8">
        <div className={className.flex}>
            <div className="">
                <Link href='/' className={className.logo}>
                    system
                </Link>
            </div>
            <section className={`${className.flex} flex-1`}>
                <SearchBar />
                <Categories/>
                <HeaderUserBar />
            </section>
            <form action={signOut}
            >
               <button >sign out</button>

            </form>
        </div>
        {
            isLoading && 
            <>
              <Overlay />
              <div className="fixed top-0 left-0 w-[100vw] h-[100vh] flex justify-center items-center z-50">
                  <SyncLoader size={30} />
              </div>
            </>
        }
    </header>
  )
}

export default MainHeader