"use client"
import Link from "next/link"

const Products = () => {
  return (
    <div className="">
        <Link href='/admin/products/new' className="flex" >
            <span>add new product</span>
        </Link >
    </div>
  )
}

export default Products