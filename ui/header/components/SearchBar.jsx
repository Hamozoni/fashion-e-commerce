"use client";

import { IoSearchSharp } from "react-icons/io5";
import UserAddress from "../components/userAddress";
import RearchCategories from "./searchCategories"
import { useState } from "react";
import { useRouter } from "next/navigation";

function SearchBar() {

  const [query,setQuery] = useState('');
  const [category,setCategory] = useState('all')
  const router = useRouter();

  const className = {
    flex : `flex items-center`,
    searchBox: `rounded-md border bg-slate-200 border-green-100 shadow-md flex items-center w-full`,
  };

  const handleSubmit = ()=> {
    router.push(`/search/${query}?category=${category}`)
  }
  
  return (
    <section className={`${className.flex} gap-4 flex-1`}>
         <UserAddress />
         <form action={handleSubmit}  className={className.searchBox}>
             <RearchCategories category={category} setCategory={setCategory} />
            <div className="w-full">
                <input
                    value={query}
                    onChange={(e)=> setQuery(e.target.value)}
                    className="w-full p-2 bg-transparent text-sm font-bold "
                    type="text" 
                    placeholder="search myh store" 
                    />
            </div>
            <button className='bg-lime-900 min-w-fit text-slate-300 py-2.5 px-5 min-h-full'>
                <IoSearchSharp size={22} />
            </button>
         </form>
    </section>
  )
}

export default SearchBar