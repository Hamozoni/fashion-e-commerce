"use client"

import Link from "next/link";


const Header = () => {
  return (
    <header className="flex align-middle justify-between bg-purple-100 p-6">
        <h4 className="text-3xl font-bold uppercase">
            myh shop
        </h4>
        <nav className="flex align-middle gap-5">
            <Link href={`/admin/dashbourd`} className="capitalize text-xl text-black-100 hover:text-black-500">dashbourd</Link>
            <Link href={`/admin/products`} className="capitalize text-xl text-black-100 hover:text-black-500">products</Link>
            <Link href={`/admin/customers`} className="capitalize text-xl text-black-100 hover:text-black-500">customers</Link>
            <Link href={`/admin/customers`} className="capitalize text-xl text-black-100 hover:text-black-500">sales</Link>
        </nav>
    </header>
  )
}

export default Header