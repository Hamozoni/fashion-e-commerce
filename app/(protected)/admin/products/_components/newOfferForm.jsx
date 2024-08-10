"use status";

import { useState } from "react";
import { getCurrency } from "../../../../../lip/getCurrency";
import { ButtonWithIcon } from "../../../../../ui/buttons/buttons";
import { VscSaveAll } from "react-icons/vsc";

export const NewOfferForm = ()=> {
    const [priceInput,setPriceInput] = useState(0)
    return (
        <form action="">
            <label 
                className="text-sm font-bold text-teal-950 mt-3"
                htmlFor="newOffer"
                >offer price
            </label>
            <div className="flex items-center gap-3 w-full rounded-md bg-white my-3 overflow-hidden px-3">
               <input 
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