"use client"
import Link from "next/link"

const Products = () => {
  return (
    <div className="">
        <Link href='/admin/products/add_new_product' className="flex" >
            <span>add new product</span>
            <span class="material-icons-outlined">
              add
              </span>
        </Link >
    </div>
  )
}

export default Products