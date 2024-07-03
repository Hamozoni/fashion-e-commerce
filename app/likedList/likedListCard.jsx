"use client";

import ProductCard from "../../ui/productCard/ProductCard"
import {useAppDispatch, useAppSelector} from "../../store/store";
import { ButtonWithIcon } from "../../components/buttons";
import { removeAllFromLikedList } from "../../store/features/likedListSlice";
import { MdOutlineDeleteOutline } from "react-icons/md";
const LikedListCard = () => {

    const likedList = useAppSelector(state=> state.likedList);
    const dispatch = useAppDispatch
  return (
    <div>
        {
            !!likedList ? (
                likedList?.map(product=> (
                    <ProductCard key={product?.id} product={product} />
                ))
            ) : (
                <div className="">
                    <h3>liked lis is emty</h3>
                </div>
            )
        }
        <ButtonWithIcon
           text='delete all'
           type='delete'
           Icon={MdOutlineDeleteOutline}
           onClick={()=>dispatch(removeAllFromLikedList())}
         />
        
    </div>
  )
}

export default LikedListCard