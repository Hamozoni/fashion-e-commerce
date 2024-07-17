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


    const [productDetails,setProductDetails] = useState({});
    const [productColors,setProductColors] = useState([{color: '',colorName :'',priceInHalala: 0}]);
    const [productSizes,setProductSizes] = useState([[]]);
    const [productSpecifications,setProductSpecifications] = useState([{}]);
    const [category,setCategory] = useState({});

    const [isPendding,setIsPending] = useState(false);

    const [colValidError,setDetValidError] = useState(null);
    const [detValidError,setColValidError] = useState(null);
    const [sizeValidError,setSizeValidError] = useState(null);
    const [speciValidError,setSpeciValidError] = useState(null);


    const router = useRouter();

    const formRef = useRef()
    
    const handleSubmit =  (event)=> {
        event.preventDefault();
        setIsPending(true);
        const formData = new FormData(formRef.current);



        const formatedFormData = formDataProductFormater(
            formData,
            productColors,
            productSizes,
            productDetails,
            productSpecifications
        );


        console.log(Object.fromEntries(formatedFormData));

        PostData('/products/new',formatedFormData)
        .then((data)=> {
            console.log(data);
            router.push('/admin/products')
        })
        .catch((error)=> {
            console.log(error)
        })
        .finally(()=> {
            setIsPending(false)
        })
        
    };



  return (
    <newProductContext.Provider 
        value={{
            productDetails,
            setProductDetails,
            productColors,
            setProductColors,
            productSizes,
            setProductSizes,
            category,
            setCategory,
            productSpecifications,
            setProductSpecifications,
            colValidError,
            detValidError,
            sizeValidError,
            speciValidError
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
