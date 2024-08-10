"use status";

import { useEffect, useRef, useState } from "react";
import { getCurrency } from "../../../../../lip/getCurrency";
import { ButtonWithIcon } from "../../../../../ui/buttons/buttons";
import { VscSaveAll } from "react-icons/vsc";

export const NewOfferForm = ({item})=> {
    const [priceInput,setPriceInput] = useState(0);

    const inputRef = useRef(null)
    useEffect(()=> {
        if(inputRef?.current) {
            inputRef?.current?.focus()
        }
    },[]);

    return (
        <form action="" className=" mt-8 mb-3">
            <label 
                className="text-sm font-bold text-teal-950"
                htmlFor="newOffer"
                >old price: {getCurrency(item?.priceInHalala)}
            </label>
            <div className="flex items-center gap-3 w-full rounded-md bg-white my-3 overflow-hidden px-3">
               <input 
                    ref={inputRef}
                    className="w-full p-3"
                    onChange={(e)=> setPriceInput(e.target.value)} 
                    type="number" 
                    name="offerPrice" 
                    id="newOffer" />
               <p>{getCurrency(priceInput)}</p>
            </div>
            <ButtonWithIcon text='submit' Icon={VscSaveAll} type='save' />
        </form>
    )
}