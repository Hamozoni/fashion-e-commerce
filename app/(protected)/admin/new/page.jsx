"use client";
import {createContext, useRef, useState } from "react";
import { useRouter } from "next/navigation";
// components
import {SpecificationInputs}from "./_components/specificationInputs";
import { ButtonWithIcon } from "@/ui/buttons/buttons";
import {ImagesColor} from "./_components/imagesClolors";
import {ProductInfoForm} from "./_components/productInfoForm"
import {Loading} from "@/ui/models/loading";
// icons
import { CiSaveDown2 } from "react-icons/ci";
// form data fomater
import {formDataProductFormater} from "@/lip/formDataProductFormater";
// axios post function
import { PostData } from "@/lip/fetchData";
// condex
export const newProductContext = createContext();

const NewProducts = () => {
    // data states
    const [productDetails,setProductDetails] = useState({});
    const [productColors,setProductColors] = useState([{}]);
    const [productSizes,setProductSizes] = useState([[]]);
    const [productSpecifications,setProductSpecifications] = useState([{}]);
    const [category,setCategory] = useState({});
    // loadind state
    const [isPendding,setIsPending] = useState(false);
    // valdatations errors states
    const [colValidError,setDetValidError] = useState(null);
    const [detValidError,setColValidError] = useState(null);
    const [sizeValidError,setSizeValidError] = useState(null);
    const [speciValidError,setSpeciValidError] = useState(null);

    const router = useRouter();
    const formRef = useRef()
    
    const handleSubmit =  (event)=> {

        event.preventDefault();
        const formData = new FormData(formRef.current);

        // retun all data in one form data
        const formatedFormData = formDataProductFormater(
            formData,
            productColors,
            setColValidError,
            productSizes,
            setSizeValidError,
            productDetails,
            setDetValidError,
            productSpecifications,
            setSpeciValidError
        );

        if(!!formatedFormData) {
            setIsPending(true);
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
            });

        };

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
    <div className="p-3 w-full max-w-full capitalize ">
        {
            isPendding ? <Loading /> : ''
        }
        <div className="w-full max-w-full  dark:border-stone-900 rounded-md p-3">
            <h4 className="text-xl text-teal-950 dark:text-teal-50 font-bold mb-5">
                new product form:
            </h4>
            <div className="">
                <form 
                    ref={formRef}
                    onSubmit={handleSubmit} 
                    >
                    <div className="lg:flex gap-3 mb-3 items-stretch">
                        <ProductInfoForm/>
                        <SpecificationInputs/>
                    </div>
                    <ImagesColor/>

                    <div className="w-[200px] mx-auto">
                     <ButtonWithIcon
                        text='save'
                        Icon={CiSaveDown2}
                        type='save'
                        disabled={isPendding}
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