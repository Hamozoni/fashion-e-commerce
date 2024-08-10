"use status";

import { useEffect, useRef, useState } from "react";
import { getCurrency } from "../../../../../lip/getCurrency";
import { ButtonWithIcon } from "../../../../../ui/buttons/buttons";
import { VscSaveAll } from "react-icons/vsc";
import {updateData } from "../../../../../lip/fetchData";
import {addingOfferSchema} from "../../../../../validationSchemas/newProductSchemas";
import {ZodError} from "../../../../../ui/components/zodError"

export const NewOfferForm = ({item})=> {
    const [priceInput,setPriceInput] = useState(0);
    const [dateInput,setDateInput] = useState(null);
    const [error,setError] = useState(null);

    const inputRef = useRef(null)
    useEffect(()=> {
        if(inputRef?.current) {
            inputRef?.current?.focus()
        }
    },[]);

    const handleSubmit = (e)=> {
        e.preventDefault();

        setError(null);

        if(item.priceInHalala <= priceInput) {
            setError([{path:['offerPrice'],message:'offer price should be less the original price'}]);
            return
        }

        const data = {
            offerPrice: priceInput,
            expiresDate :  new Date(dateInput),
            id: item?.id
        }

       const validate = addingOfferSchema.safeParse(data);

       if(validate.success){
        updateData(`admin/sales?offerPrice=${data?.offerPrice}&expiresAt=${data?.expiresDate}&id=${item?.id}`)
            .then((data)=> {
                console.log(data)
            }).catch((error)=> {

            })
       }else {
           console.log(data);
           setError(JSON.parse(validate.error))
           console.log();
       }
    };

    const className = {
        smallHead : 'text-sm font-bold text-teal-950'
    }

    return (
        <form onSubmit={(e)=> handleSubmit(e)} className=" mt-8 mb-3">
            <div className="sm:flex items-center gap-3 mb-3 ">
                <div className="flex-1">
                    <label 
                        className={className.smallHead}
                        htmlFor="newOffer"
                        >old price: {getCurrency(item?.priceInHalala)}
                    </label>
                    <div className="flex items-center my-3 gap-3 w-full rounded-md bg-white overflow-hidden px-3">
                        <p className={className.smallHead}>  
                            {getCurrency(priceInput)}
                        </p>
                        <input 
                                ref={inputRef}
                                className="w-full p-3"
                                onChange={(e)=> setPriceInput(+e.target.value)} 
                                type="number" 
                                name="offerPrice" 
                                id="newOffer" 
                                required
                                />
                    </div>
                    <ZodError error={error} field='offerPrice' />

                </div>
                <div className="flex-1">
                    <label className={className.smallHead} htmlFor="date">
                        offer expires at: 
                    </label>
                    <input 
                        onChange={(e)=> setDateInput(e.target.value)}
                        className="w-full rounded-md bg-white overflow-hidden p-3 my-3" 
                        type="datetime-local" 
                        name="" 
                        id="date" 
                       />
                    <ZodError error={error} field='expiresDate' />
                </div>

            </div>
            <ButtonWithIcon text='submit' Icon={VscSaveAll} type='save' />
        </form>
    )
}