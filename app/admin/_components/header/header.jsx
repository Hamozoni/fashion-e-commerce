"use client";

import Link from "next/link";


const Header = () => {
  return (
    <header className="admin-head">
        <h4 className="logo">
            myh shop
        </h4>
        <nav>
            <Link href={`/admin/dashbourd`}>dashbourd</Link>
            <Link href={`/admin/products`}>products</Link>
            <Link href={`/admin/customers`}>customers</Link>
            <Link href={`/admin/customers`}>sales</Link>
        </nav>
    </header>
  )
}

export default Header