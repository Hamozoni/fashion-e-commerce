"use client";
// redux store
import {useAppDispatch, useAppSelector} from "../../store/store";
import { removeAllFromLikedList } from "../../store/features/likedListSlice";
// components
import {ProductCard} from "../../ui/cards/productCard"
import { ButtonWithIcon } from "../../ui/buttons/buttons";
// icons
import { MdOutlineDeleteOutline } from "react-icons/md";

export const LikedListCard = () => {

    const likedList = useAppSelector(state=> state.likedList);
    const dispatch = useAppDispatch();

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
};