"use client";

import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

function RearchCategories() {

  const [category,setCategory] = useState('all');

  const className = {
    catgory: `flex items-center min-h-full p-2 text-md font-medium cursor-pointer bg-slate-300`,
    categoryUl: ' absolute left-0 top-10 min-w-fit p-4 rounded-md bg-green-100 capitalize'
  };

  return (
    <div className="relative">
      <div className={className.catgory}>
          <h6>{category}</h6>
          <IoMdArrowDropdown/>
      </div>
      <ul className={className.categoryUl}>
          <li onClick={()=> setCategory("all")}>all</li>
          <li onClick={()=> setCategory("men")}>men</li>
          <li onClick={()=> setCategory("women")}>women</li>
          <li onClick={()=> setCategory("kids")}>kids</li>
      </ul>
  </div>
  )
}

export default RearchCategories