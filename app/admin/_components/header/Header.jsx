"use client"

import Link from "next/link";


const Header = () => {

  const className = {
     link: 'capitalize text-md font-medium text-slate-200 hover:text-black-500',
  }
  return (
    <header className="flex align-middle justify-between bg-gray-800 p-6 lg:px-10">
        <h4 className="text-2xl font-bold uppercase text-slate-100">
            Admin
        </h4>
        <nav className="flex align-middle gap-5">
            <Link href={`/admin/dashbourd`} className={className.link}>dashbourd</Link>
            <Link href={`/admin/products`} className={className.link} >products</Link>
            <Link href={`/admin/customers`} className={className.link} >customers</Link>
            <Link href={`/admin/customers`} className={className.link} >sales</Link>
        </nav>
    </header>
  )
}

export default Header