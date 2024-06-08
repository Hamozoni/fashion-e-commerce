"use client";

import { IoSearchSharp } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";
import Overlay from "../../../components/Overlay";
import AddressMap from "../../../components/AddressMap"

function SearchBar() {

  const [isMapOpen,setIsMapOpen] = useState(false);

  const className = {
    flex : `flex items-center`,
    searchBox: `rounded-md border bg-slate-200 border-slate-400 flex items-center flex-1 overflow-hidden`,
    catgory: `flex items-center min-h-full p-2 text-md font-medium cursor-pointer bg-slate-300`,
    delivery: 'flex items-center gap-1 text-sm font-medium cursor-pointer hover:text-gray-700 hover:font-medium'
  }
  return (
    <section className={`${className.flex} flex-1 gap-8`}>

        <div >
            <p className={className.delivery} onClick={()=> setIsMapOpen(true)}> 
              <IoLocationOutline size={22} />delivering to ...
            </p>
        </div>
         <div className={className.searchBox}>
            <div className="">
                <div className={className.catgory}>
                     <h6>men</h6>
                    <IoMdArrowDropdown/>
                </div>
                <ul>
                    <li></li>
                </ul>
            </div>
            <div className="flex-1">
                <input 
                     className="w-full p-2 bg-transparent text-sm font-bold"
                    type="text" 
                    placeholder="search myh store" 
                    />
            </div>
            <button className='bg-lime-900 text-slate-300 py-2.5 px-5 min-h-full'>
                <IoSearchSharp size={22} />
            </button>
         </div>

         {
            isMapOpen && <>

            <Overlay onClick={()=> setIsMapOpen(false)}/>
            <AddressMap onClick={()=> setIsMapOpen(false)}/>
            </>
         }
    </section>
  )
}

export default SearchBar