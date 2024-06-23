"use client";

import { IoSearchSharp } from "react-icons/io5";
import SearchCategories from "./searchCategories"
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { AppContext } from "../../../app/contextProvider";

function SearchBar() {


  const {innerWidth} = useContext(AppContext);

  console.log(innerWidth)
  const [query,setQuery] = useState('');
  const [isMobile,setIsMoble] = useState(false);
  const [category,setCategory] = useState('all')
  const router = useRouter();

  const className = {
    flex : `flex items-center`,
    searchBox: 'rounded-md border bg-slate-200 border-green-100 shadow-md flex items-center w-full',
    serchBtn: 'bg-lime-900 min-w-fit text-slate-300 py-2.5 px-5 min-h-full'
  };

  const handleSubmit = ()=> {
    if(query.length > 2){
      router.push(`/search/${query}?category=${category}`)
    }
  };

  const SearchForm = ({className})=> {
    return (
      <section className={`${className} ${className.flex} gap-4 flex-1`}>
         <form action={handleSubmit}  className={className.searchBox}>
             <SearchCategories category={category} setCategory={setCategory} />
            <div className="w-full">
                <input
                    value={query}
                    onChange={(e)=> setQuery(e.target.value)}
                    className="w-full p-2 bg-transparent text-sm font-bold "
                    type="text" 
                    placeholder="search myh store" 
                    />
            </div>
            <button className={className.serchBtn}>
                <IoSearchSharp size={22} />
            </button>
         </form>
    </section>
    )
  }
  
  return (
    <>
    {
      innerWidth > 720 ?
       <SearchForm className=''/>
    : (
      <>
      {
          isMobile &&
         <SearchForm className='fixed left-1 top-1 w-full'/>
      }
      <button 
      onClick={()=> setIsMoble(true)}
      className={className.serchBtn}>
        <IoSearchSharp size={22} />
      </button>
      </>
    )
    }
    
    </>
  )
}

export default SearchBar