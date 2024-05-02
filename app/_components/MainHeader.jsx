import Link from "next/link"
import HeaderUserBar from "./HeaderUserBar";
import Categories from "./Categories";
import SearchBar from "./SearchBar";


function MainHeader() {

    const className = {
        flex:  `flex items-center gap-8`,
        logo: `uppercase text-xl font-bold text-emerald-950`
    }
  return (
    <header className="bg-lime-100 py-2 px-4 lg:px-8">
        <div className={className.flex}>
            <div className="">
                <Link href='/' className={className.logo}>
                    system
                </Link>
            </div>
            <section className={`${className.flex} flex-1`}>
                <Categories/>
                <SearchBar />
                <HeaderUserBar />
            </section>
        </div>
    </header>
  )
}

export default MainHeader