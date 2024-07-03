"use client";

import ProductCard from "../../ui/productCard/ProductCard"
import {useAppSelector} from "../../store/store";

const LikedListCard = () => {

    const likedList = useAppSelector(state=> state.likedList)
  return (
    <div>
        {
            likedList ? (
                likedList?.map(product=> (
                    <ProductCard key={product?.id} product={product} />
                ))
            ) : (
                <div className="">
                    <h3>liked lis is emty</h3>
                </div>
            )
        }
        
    </div>
  )
}

export default LikedListCard