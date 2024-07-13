"use client";

import {useRef, useState, useTransition } from "react";
import {SpecificationInputs}from "../_components/SpecificationInputs";
import { ButtonWithIcon } from "../../../../components/buttons";
import {ImagesColor} from "../_components/ImagesClolors";
import {ProductInfoForm} from "../_components/productInfoForm"
import { useRouter } from "next/navigation";



import { IoArrowBackOutline,IoArrowForwardSharp } from "react-icons/io5";
import Loading from "../_components/Loading"



const NewProducts = () => {

    const [data,setData] = useState(null);
    const [errors,setErrors] = useState(null);
    const [isPendding,startTransition] = useTransition();

    const formRef = useRef()

    const router = useRouter();

    const handleSubmit =  ()=> {

        const formData = new FormData(formRef.current);

        console.log(Object.fromEntries(formData.entries()))

    }

  return (
    <div className="p-4 lg:p-10 w-full max-w-full capitalize ">
        {
            isPendding ? <Loading /> : ''
        }
        <h3 
            className="pb-4 font-bold text-2xl text-teal-950"
            >adding new product form
        </h3>
        <div className="w-full max-w-full  border border-slate-100 p-4 rounded-md shadow-lg">
            <div className="">
                <form 
                    ref={formRef}
                    onSubmit={handleSubmit} 
                    >
                    <ProductInfoForm/>
                    <SpecificationInputs />
                    <ImagesColor />

                    <div className="w-[200px]">
                    <ButtonWithIcon
                        text='save'
                        Icon={IoArrowBackOutline}
                        type='save'
                        disabled={false}
                        />
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default NewProducts