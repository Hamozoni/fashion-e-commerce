
import { IoSearchSharp } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import UserAddress from "../components/userAddress"

function SearchBar() {


  const className = {
    flex : `flex items-center`,
    searchBox: `rounded-md border bg-slate-200 border-slate-400 flex items-center w-full`,
    catgory: `flex items-center min-h-full p-2 text-md font-medium cursor-pointer bg-slate-300`,
  };
  
  return (
    <section className={`${className.flex} gap-4 flex-1`}>
         <UserAddress />
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