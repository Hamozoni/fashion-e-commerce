"use client";
// icons
import { IoIosHeartEmpty, IoMdHeart } from "react-icons/io";
import { useAppDispatch, useAppSelector } from "../store/store";
import { toggleLikedList} from "../store/features/likedListSlice";

const AddToListBtn = ({product}) => {

    const dispatch = useAppDispatch();
    const isAddedToList = useAppSelector(state=> state?.likedList?.find(e=> e.id === product?.id));

    const handleToggleAddToList = ()=> {

      const {id,name,priceInCent,rating,brand,images : [{imagePath}]} = product;

        dispatch(toggleLikedList({
          id,
          name,
          priceInCent,
          imagePath,
          rating,
          brand
        }));

        console.log(isAddedToList)
  
    }

  return (
    <button
        onClick={handleToggleAddToList} 
        className="flex items-center justify-center border border-rose-300 rounded-md px-3 py-2 text-xl"
        >
        {
            isAddedToList ?
            <IoMdHeart size={20} className="text-rose-500 hover:scale-125" />
            :
            <IoIosHeartEmpty size={20}  className="text-rose-500 hover:scale-125" />
        }
    </button>
  )
}

export default AddToListBtn