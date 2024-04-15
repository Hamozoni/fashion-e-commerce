"use-clint";

import Link from "next/link";


const Header = () => {
  return (
    <header className="admin-head">
        <h4 className="logo">
            myh shop
        </h4>
        <nav>
            <Link href={`/`}>ggg</Link>
        </nav>
    </header>
  )
}

export default Header