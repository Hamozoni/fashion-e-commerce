"use client";

import { IoSearchSharp } from "react-icons/io5";
import { useContext, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AppContext } from "../../../app/contextProvider";
import {Overlay} from "../../models/overlay";

export function SearchBar() {


  const {innerWidth} = useContext(AppContext);
  const [isMobile,setIsMoble] = useState(false)
  const router = useRouter();

  const searchForm = useRef()

  const className = {
    flex : `flex items-center`,
    searchBox: 'bg-white dark:bg-black flex gap-2 items-center w-full p-1',
    serchBtn: 'min-w-fit rounded-full border-2 border-teal-200 dark:border-teal-900 text-teal-800 dark:text-teal-100 py-2.5 px-6 min-h-full'
  };

  const handleSubmit = ()=> {

    const formData = new FormData(searchForm?.current);
    const query = formData.get('query');

    if(query.length > 2){
      router.push(`/search?query=${query}`)
    }
  };

  const SearchForm = ({classN})=> {
    return (
      <section className={`${classN} ${className.flex} gap-4 flex-1 rounded-md`}>
         <form ref={searchForm} action={handleSubmit} className={className.searchBox}>
            <div className="w-full">
                <input
                    name="query"
                    className="w-full py-3 px-4 bg-transparent text-sm text-teal-950 dark:text-teal-50 font-bold rounded-full border-2 border-teal-50 dark:border-teal-900 focus:border-teal-200 "
                    type="search" 
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
          <>
             <Overlay onClick={()=> setIsMoble(false)}/>
            <SearchForm classN='fixed left-0 top-1 w-full z-50'/>
          </>
      }
      <button 
      onClick={()=> setIsMoble(!isMobile)}
      className={className.serchBtn}>
        <IoSearchSharp size={22} />
      </button>
      </>
    )
    }
    
    </>
  )
};
