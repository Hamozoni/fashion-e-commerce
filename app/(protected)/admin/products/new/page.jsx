"use client";
import {createContext, useRef, useState } from "react";
import { useRouter } from "next/navigation";
// components
import {SpecificationInputs}from "../_components/SpecificationInputs";
import { ButtonWithIcon } from "../../../../ui/buttons/buttons";
import {ImagesColor} from "../_components/ImagesClolors";
import {ProductInfoForm} from "../_components/productInfoForm"
import {Loading} from "../../../../ui/models/Loading";
// icons
import { CiSaveDown2 } from "react-icons/ci";
// form data fomater
import {formDataProductFormater} from "../../../../lip/formDataProductFormater";
// axios post function
import { PostData } from "../../../../lip/fetchData";
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
    <div className="p-4 lg:p-10 w-full max-w-full capitalize ">
        {
            isPendding ? <Loading /> : ''
        }
        <h3 
            className="pb-4 font-bold text-2xl text-teal-950 dark:text-teal-50"
            >adding new product form
        </h3>
        <div className="w-full max-w-full  border border-slate-100 dark:border-stone-900 p-4 rounded-md shadow-lg">
            <div className="">
                <form 
                    ref={formRef}
                    onSubmit={handleSubmit} 
                    >
                    <ProductInfoForm/>
                    <SpecificationInputs/>
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
