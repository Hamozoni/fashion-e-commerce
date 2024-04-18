"use client"
import Link from "next/link"
// import AddIcon from '@mui/icons-material/Add';

const Products = () => {
  return (
    <div className="">
        <Link href='/admin/products/add_new_product' className="flex" >
            <span>add new product</span>
            {/* <AddIcon /> */}
        </Link >
    </div>
  )
}

export default Products