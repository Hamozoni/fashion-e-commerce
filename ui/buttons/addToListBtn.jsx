"use client";
// icons
import { IoIosHeartEmpty, IoMdHeart } from "react-icons/io";
// redux store
import { useAppDispatch, useAppSelector } from "../../store/store";
import { toggleLikedList} from "../../store/features/likedListSlice";

export const AddToListBtn = ({product}) => {

    const dispatch = useAppDispatch();
    const isAddedToList = useAppSelector(state=> state?.likedList?.find(e=> e.id === product?.id));

    const handleToggleAddToList = ()=> {
        dispatch(toggleLikedList(product));
    };

   const className = {
      heart: 'text-rose-500 hover:scale-125'
    }

  return (
    <button
        onClick={handleToggleAddToList} 
        className=""
        >
        {
            isAddedToList ?
            <IoMdHeart size={30} className={className.heart} />
            :
            <IoIosHeartEmpty size={30}  className={className.heart}/>
        }
    </button>
  )
};