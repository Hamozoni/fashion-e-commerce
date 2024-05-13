
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";

function AddToCard() {
  return (
    <div className="flex items-stretch justify-center gap-2 py-3 w-full">
        <div className="flex items-center justify-center gap-2  border border-green-300 rounded-md p-3 py-2">
            <FiMinus className="text-xl cursor-pointer" />
            <h5 className="text-xl border-x border-green-200 px-2" >1</h5>
            <FiPlus className="text-xl cursor-pointer"/>
        </div>
        <div className="flex items-center justify-center flex-1 bg-green-900 text-green-100 hover:bg-green-700 border border-green-300 rounded-md p-5 py-2 text-md font-bold cursor-pointer">
            <h6>add to cart</h6>
        </div>
        <div className="flex items-center justify-center  border border-green-300 rounded-md p-3 py-2 text-xl">
            <FaHeart className="text-rose-500" />
        </div>
    </div>
  )
}

export default AddToCard