"use client";

import {useRef, useState } from "react";
import {SpecificationInputs}from "../_components/SpecificationInputs";
import { ButtonWithIcon } from "../../../../components/buttons";
import {ImagesColor} from "../_components/ImagesClolors";
import {ProductInfoForm} from "../_components/productInfoForm"
import { useRouter } from "next/navigation";
import {zProductShema}from "../../../../validationSchemas/newProductSchemas"



import { IoArrowBackOutline } from "react-icons/io5";
import Loading from "../_components/Loading"
import { PostData } from "../../../../lip/fetchData";



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
    
    const formData = new FormData(formRef.current);

    const handleSubmit =  (event)=> {
        event.preventDefault();

        setIsPending(true);

        let informations = []
        let newSizes = []

        colors?.map(({image,color,colorName},index)=> {

            newSizes[index] = sizes[index];

            sizes[index]?.map((_,i)=> {
                newSizes[index][i].quantity = +formData.get(`quantity ${sizes[index][i]?.shortName} ${index}`)
            })

            newSizes[index]

            informations?.push({
                colorName: formData.get(`${colorName} ${index}`),
                color: formData.get(`${color} ${index}`),
                princeInHalala : +formData.get(`price in halala ${index}`),
                images:  formData.getAll(`${image} ${index}`),
                sizes: newSizes[index]
            })
        });

        let newSpecifications = []

        specifications?.map(({name,value},index)=> {
            newSpecifications?.push({
                name: formData.get(`${name} ${index}`),
                value: formData.get(`${value} ${index}`),
            })
        })

        const data = {
            name : formData.get('name'),
            brand: formData.get('brand'),
            serialNumber : formData.get('serialNumber'),
            category : category?.name,
            subcategory: category.subName,
            describtion: formData.get('describtion'),
            specifications: newSpecifications,
            informations,
        };


        const valitadData = zProductShema.safeParse(data);

        if(valitadData.success) {
            PostData('api/products/new',valitadData?.data)
            .then(()=>{
                router.push('/admin/products')
            })
            .catch((error)=> {
                throw new Error(error?.message)
            })
            .finally(()=> {
                setIsPending(false)
            });
        }else {
            setErrors(valitadData?.error)
        }

    };



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
                    <ProductInfoForm setCatgory={setCatgory} category={category}/>
                    <SpecificationInputs
                        specifications={specifications}
                        setSpecifications={setSpecifications}
                       />
                    <ImagesColor
                          formData={formData} 
                           category={category}
                           colors={colors}
                           setColors={setColors}
                           sizes={sizes}
                           setSizes={setSizes}
                           />

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

export default NewProducts;
