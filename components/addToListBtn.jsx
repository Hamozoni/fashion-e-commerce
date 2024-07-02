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
  
    };

   const className = {
      heart: 'text-rose-500 hover:scale-125 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
    }

  return (
    <button
        onClick={handleToggleAddToList} 
        className="flex items-center justify-center w-[40px] h-[40px] relative border border-rose-200 bg-rose-50 rounded-full px-3 py-2 text-xl"
        >
        {
            isAddedToList ?
            <IoMdHeart size={24} className={className.heart} />
            :
            <IoIosHeartEmpty size={24}  className={className.heart}/>
        }
    </button>
  )
}

export default AddToListBtn