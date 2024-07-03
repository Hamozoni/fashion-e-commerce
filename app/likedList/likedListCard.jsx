"use client";

import ProductCard from "../../ui/productCard/ProductCard"
import {useAppDispatch, useAppSelector} from "../../store/store";
import { ButtonWithIcon } from "../../components/buttons";
import { removeAllFromLikedList } from "../../store/features/likedListSlice";
import { MdOutlineDeleteOutline } from "react-icons/md";
const LikedListCard = () => {

    const likedList = useAppSelector(state=> state.likedList);
    const dispatch = useAppDispatch()
  return (
    <div>
        {
            !!likedList?.length ? (
                <>
                    <div className="">
                        {
                            likedList?.map(product=> (
                            <ProductCard key={product?.id} product={product} />
                        ))
                        }

                    </div>
                    <ButtonWithIcon
                        text='delete all'
                        type='delete'
                        Icon={MdOutlineDeleteOutline}
                        onClick={()=>dispatch(removeAllFromLikedList('cleerAll'))}
                        />
                </>
            ) : (
                <div className="text-center">
                    <h3 className="text-lg capitalize ">liked lis is empty!</h3>
                </div>
            )
        }
        
    </div>
  )
}

export default LikedListCard