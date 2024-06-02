"use server"
import Link from "next/link";
import HeaderUserBar from "./HeaderUserBar";
import Categories from "./Categories";
import SearchBar from "./SearchBar";
import { signOut } from "next-auth/react";


async function MainHeader () {

    const className = {
        flex:  `flex items-center gap-8`,
        logo: `uppercase text-2xl font-extrabold text-lime-700`
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
            <form action={async()=> {
                   "use server"
                    signOut()
                }}
            >
               <button >sign out</button>

            </form>
        </div>
    </header>
  )
}

export default MainHeader