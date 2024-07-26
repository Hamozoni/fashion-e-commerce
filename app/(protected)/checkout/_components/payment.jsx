"use client";
// icons
import { IoMdPerson,IoMdCard} from "react-icons/io";
import { CiCreditCard2 } from "react-icons/ci";
import { MdCalendarMonth } from "react-icons/md";
import { IoShieldCheckmark } from "react-icons/io5";
// components
import { ButtonWithIcon } from "../../../../ui/buttons/buttons";
import { AuthInput } from "../../../auth/_components/authInput";
import  {CartDetails}  from "../../../cart/_components/cartDetails";
import { CartFooter } from "../../../cart/_components/CartSummary";
import {UserField} from "./userField";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

export function Payment() {

  return (
    <div className="flex-1 lg:flex-2 bg-white dark:bg-stone-950 border border-teal-100 dark:border-stone-800 p-3 rounded-md shadow-md">
        <header>
            <div className="">
                <UserField name='name'/>
                <UserField name='email'/>
                <UserField name='address'/>
            </div>
            <h5 className="text-teal-950 dark:text-teal-50 font-bold text-lg sm:text-xl mb-3 capitalize">
                card details:
            </h5>
        </header>
        <form action="">
                <AuthInput 
                    type='text'
                    name='name on card'
                    Icon={IoMdPerson}
                    isLoading={false}
                    error={null}
                    />

                <AuthInput 
                type='number'
                name='card number'
                Icon={CiCreditCard2}
                isLoading={false}
                error={null}
                />
            <div className="flex items-center gap-3">
                <AuthInput 
                type='month'
                name='expire date'
                Icon={MdCalendarMonth}
                isLoading={false}
                error={null}
                />
             <AuthInput 
                type='number'
                name='cvv'
                Icon={IoMdCard}
                isLoading={false}
                error={null}
                />
            </div>
            <CartDetails />
            <CartFooter />
            <hr className="my-3"/>
            <ButtonWithIcon 
                text='pay now' 
                Icon={IoShieldCheckmark} 
                type='primary' 
                disabled={false} 
                />
        </form>
    </div>
  )
};