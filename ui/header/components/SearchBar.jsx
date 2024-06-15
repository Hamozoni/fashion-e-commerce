
import { IoSearchSharp } from "react-icons/io5";
import UserAddress from "../components/userAddress";
import RearchCategories from "./searchCategories"

function SearchBar() {


  const className = {
    flex : `flex items-center`,
    searchBox: `rounded-md border bg-slate-200 border-green-100 shadow-md flex items-center w-full`,
  };
  
  return (
    <section className={`${className.flex} gap-4 flex-1`}>
         <UserAddress />
         <div className={className.searchBox}>
             <RearchCategories />
            <div className="w-full">
                <input 
                     className="w-full p-2 bg-transparent text-sm font-bold "
                    type="text" 
                    placeholder="search myh store" 
                    />
            </div>
            <button className='bg-lime-900 min-w-fit text-slate-300 py-2.5 px-5 min-h-full'>
                <IoSearchSharp size={22} />
            </button>
         </div>
    </section>
  )
}

export default SearchBar