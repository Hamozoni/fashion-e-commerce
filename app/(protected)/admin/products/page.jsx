"use client"
import Link from "next/link";
import { IoAdd } from "react-icons/io5";

const Products = () => {
  return (
    <div className="p-3 lg:px-8">
      <nav className="flex justify-between align-middle py-4"> 
         <h5 className="text-lg font-bold uppercase">
          products
         </h5>
        <Link 
            href='/admin/products/new' 
            className="flex items-center gap-2 font-bold  text-md rounded-md px-4 py-1 text-yellow-950 border-slate-300 border hover:bg-gray-50" >
             <IoAdd />
            <span>Add Product</span>
        </Link >
      </nav>
    </div>
  )
}

export default Products