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
                <header className=" flex items-center justify-between">
                    <h4 
                        className="text-teal-950 dark:text-teal-50 text-lg sm:text-xl capitalize font-medium"
                        >your favourite list
                    </h4>
                    <div className="max-w-[150px]">
                        <ButtonWithIcon
                            text='delete all'
                            type='delete'
                            Icon={MdOutlineDeleteOutline}
                            onClick={()=>dispatch(removeAllFromLikedList('cleerAll'))}
                            />
                    </div>
                </header>
                    <div className="flex gap-2 sm:gap-5 flex-wrap py-4">
                        {
                            likedList?.map(product=> (
                            <ProductCard key={product?.id} product={product} />
                        ))
                        }

                    </div>
                </>
            ) : (
                <div className="flex items-center justify-center h-screen">
                    <h3 className="text-lg sm:text-xl text-teal-950 dark:text-teal-50 capitalize ">
                        liked lis is empty!
                    </h3>
                </div>
            )
        }
        
    </div>
  )
};