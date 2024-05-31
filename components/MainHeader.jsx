
import Link from "next/link";
import HeaderUserBar from "./HeaderUserBar";
import Categories from "./Categories";
import SearchBar from "./SearchBar";
import { signOut } from "next-auth/react";
import { auth } from "../auth";


async function MainHeader () {

    const session = await auth()

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
            <button onClick={async()=> {
                "use server"
                await signOut(JSON.parse(session).user)
            }}>sign out</button>
        </div>
    </header>
  )
}

export default MainHeader