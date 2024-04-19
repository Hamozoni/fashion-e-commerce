"use client"
import Link from "next/link"

const Products = () => {
  return (
    <div className="p-4">
      <nav className="flex justify-between align-middle"> 
         <h5 className="text-lg font-bold uppercase">
          products
         </h5>
        <Link 
            href='/admin/products/new' 
            className="font-bold  text-md rounded-md px-4 py-1 text-yellow-950 border-slate-100 border hover:bg-gray-50" >
            <span>Add New Product</span>
        </Link >
      </nav>
    </div>
  )
}

export default Products