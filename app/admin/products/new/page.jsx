"use client";

import {createContext, useRef, useState } from "react";
import {SpecificationInputs}from "../_components/SpecificationInputs";
import { ButtonWithIcon } from "../../../../components/buttons";
import {ImagesColor} from "../_components/ImagesClolors";
import {ProductInfoForm} from "../_components/productInfoForm"
import { useRouter } from "next/navigation";
import {zProductShema}from "../../../../validationSchemas/newProductSchemas";
import {formDataProductFormater} from "../../../../lip/formDataProductFormater"



import { IoArrowBackOutline } from "react-icons/io5";
import Loading from "../_components/Loading"
import { PostData } from "../../../../lip/fetchData";

export const newProductContext = createContext();

const NewProducts = () => {

    const [category,setCatgory] = useState({});
    const [specifications,setSpecifications] = useState([{
        name : 'specificaton key',
        value : 'specificaton value',
    }]);
    const [colors,setColors] = useState([
        {
            image: 'images',
            color: 'color',
            colorName :'color name',
            priceInHalala: 'price in halala'
        }
    ]);


    const [sizes,setSizes] = useState([[]]);

    const [errors,setErrors] = useState(null);
    const [isPendding,setIsPending] = useState(false);

    const formRef = useRef()

    const router = useRouter();
    
    
    const handleSubmit =  (event)=> {
        event.preventDefault();
        
        setIsPending(true);
        const formData = new FormData(formRef.current);

        formData.set('category',category.name);
        formData.set('subcategory',category.subName);

        const newFormData = formDataProductFormater(formData,colors,specifications,sizes);
        // const valitadData = zProductShema.safeParse(data);

            PostData('products/new',newFormData)
            .then((data)=>{
    
                console.log(data)
                // router.push('/admin/products')
            })
            .catch((error)=> {
                throw new Error(error?.message)
            })
            .finally(()=> {
                setIsPending(false)
            });

            // console.log(valitadData)
            console.log(Object.fromEntries(newFormData.entries()))
            // setIsPending(false)
            // setErrors(JSON.parse(valitadData?.error))
        

    };



  return (
    <newProductContext.Provider 
        value={{
            errors,
            category,
            setCatgory,
            specifications,
            setSpecifications,
            colors,
            setColors,
            sizes,
            setSizes
            }}
    >
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
                    <SpecificationInputs/>
                    <ImagesColor/>

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
    </newProductContext.Provider>
  )
}

export default NewProducts;
