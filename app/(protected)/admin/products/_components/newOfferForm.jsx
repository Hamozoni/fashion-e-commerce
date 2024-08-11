"use status";

import { useEffect, useRef, useState } from "react";
import { getCurrency } from "../../../../../lip/getCurrency";
import { ButtonWithIcon } from "../../../../../ui/buttons/buttons";
import { VscSaveAll } from "react-icons/vsc";
import { FaRegCalendarCheck } from "react-icons/fa6";
import {updateData } from "../../../../../lip/fetchData";
import {addingOfferSchema} from "../../../../../validationSchemas/newProductSchemas";
import {ZodError} from "../../../../../ui/components/zodError"
import { Loading } from "../../../../../ui/models/Loading";
import { Error } from "../../../../../ui/components/error";

export const NewOfferForm = ({item,setIsOfferModel})=> {

    const [priceInput,setPriceInput] = useState(0);
    const [dateInput,setDateInput] = useState(null);
    const [validateError,setValidateError] = useState(null);
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError] = useState(null);
    const [data,setData] = useState(null);

    const inputRef = useRef(null)
    useEffect(()=> {
        if(inputRef?.current) {
            inputRef?.current?.focus()
        }
    },[]);

    const handleSubmit = (e)=> {
        setData(null)
        e.preventDefault();
        setValidateError(null);
        setError(null)
        setIsLoading(true)
        if(item.priceInHalala <= priceInput) {
            setValidateError([{path:['offerPrice'],message:'offer price should be less the original price'}]);
            return
        }

        const data = {
            offerPrice: priceInput,
            expiresDate :  new Date(dateInput),
            id: item?.id
        }

       const validate = addingOfferSchema.safeParse(data);

       if(validate.success){
        updateData(`admin/sales?offerPrice=${priceInput}&expiresAt=${dateInput}&id=${item?.id}`)
            .then((data)=> {
                setData(data);
                console.log(data)
            }).catch((error)=> {
                setError(error)
                console.log(error)
            }).finally(()=> {
                setIsLoading(false);
            })
       }else {
           console.log(data);
           setValidateError(JSON.parse(validate.error))
           console.log();
       }
    };

    const className = {
        smallHead : 'text-sm font-bold text-teal-950'
    }

    return (
        
        data ?  
        <div className="">
            <h5>price updated {getCurrency(priceInput)}</h5>
            <div className="text-center">
                <FaRegCalendarCheck size={40} />
            </div>
            <div className="flex items-center gap-3">
                <ButtonWithIcon 
                    onClick={()=> setIsOfferModel(false)}
                    disabled={isLoading}
                    text='done' 
                    Icon={VscSaveAll} 
                    type='primary' />

                <ButtonWithIcon 
                    onClick={()=> setData(null)}
                    disabled={isLoading}
                    text='containue' 
                    Icon={VscSaveAll} 
                    type='save' />
            </div>
        </div>
        : error ? 
        <Error onClick={()=> setError(null)} /> :
        <form onSubmit={(e)=> handleSubmit(e)} className=" mt-8 mb-3">
            {
                isLoading ? <Loading />: null
            }
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
                    <ZodError error={validateError} field='offerPrice' />

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
                    <ZodError error={validateError} field='expiresDate' />
                </div>

            </div>
            <ButtonWithIcon 
                disabled={isLoading}
                text='submit' 
                Icon={VscSaveAll} 
                type='save' />
        </form>

        
    )
}