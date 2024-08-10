"use client";
import { useState } from "react";
import {Overlay} from "../../../../../ui/models/overlay";
import { ButtonWithIcon } from "../../../../../ui/buttons/buttons";
import { IoMdAdd } from "react-icons/io";
export const AddOffer = ({product})=> {

    const [isOfferModel,setIsOfferModel] = useState(false)
    return (
        <>
            <div className="absolute -top-6 right-2">
                <div className="max-w-[100px]">
                    <ButtonWithIcon text='offer' Icon={IoMdAdd} type='primary' onClick={()=> setIsOfferModel(true)} />
                </div>
            </div>
            {
                isOfferModel ? 
                <div className="">
                    <Overlay onClick={()=> setIsOfferModel(false)} />
                </div>
                : null

            }
        </>
    )
};
