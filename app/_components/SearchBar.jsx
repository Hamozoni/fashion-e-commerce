import { IoSearchSharp } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";

function SearchBar() {
  return (
    <section>
         <div className="">
            <span>
                <IoLocationOutline />
            </span>
            <div className="">
                <h4>delivering to</h4>
                <h6>update location</h6>
            </div>
         </div>
         <div className="">
            <div className="">
                <h4>men</h4>
                <ul>
                    <li></li>
                </ul>
            </div>
            <div className="">
                <input type="text" placeholder="search myh store" />
            </div>
            <div className="">
                <button><IoSearchSharp /></button>
            </div>
         </div>
    </section>
  )
}

export default SearchBar