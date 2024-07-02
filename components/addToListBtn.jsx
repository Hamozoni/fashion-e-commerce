"use client";
// icons
import { IoIosHeartEmpty, IoMdHeart } from "react-icons/io";
import { useAppDispatch, useAppSelector } from "../store/store";
import { addToLikedList, removeFromLikedList } from "../store/features/likedListSlice";

const AddToListBtn = ({product}) => {

    const dispatch = useAppDispatch();
    const isAddedToList = useAppSelector(state=> state?.likedList);

    const handleToggleAddToList = ()=> {

      if(!!isAddedToList) {
        dispatch(removeFromLikedList(product.id))
      }else {
        dispatch(addToLikedList({
          id: product?.id,
          name: product?.name,
          priceInCent: product?.priceInCent,
          imagePath: product?.images[0]?.imagePath,
          rating: product?.rating,
          brand: product?.brand
        }))
      }
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