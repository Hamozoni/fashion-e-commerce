"use client";

import { useEffect, useState } from "react";
import FormInput from "./FormInput";
import SpecificationInputs from "./SpecificationInputs";
import Images from "./Images";
import Sizes from "./Sizes";
import { z} from "zod";
import axios from "axios";
import { useRouter } from "next/navigation";

import Loading from "./Loading";



 const productZSchema  =  z.object({
    name : z.string().min(3),
    priceInCent : z.coerce.number().int().min(100),
    isAvailable: z.boolean(),
    description: z.string().min(5),
    count: z.coerce.number().int().min(1),
    category: z.enum(["men", "women", "kids"]),
    subCategory: z.string(),
    aboutThisItem: z.string().min(5),
    serialNumber: z.string().min(10).max(10),
})

const product = {
    isAvailable: true,
};

const inputsInfo = [
    {
       value : 'name',
       title: 'name',
       type: 'text',
       place:'the name of the product...'
    },
    {
        value : 'priceInCent',
        title: 'price',
        type: 'number',
        place:'the price of the product in cent...'
     },
     {
        value : 'category',
        title: 'category',
        type: 'text',
        place:'the category of your product...'
     },
     {
        value : 'subCategory',
        title: 'subcategory',
        type: 'text',
        place:'the subcategory of your product...'
     },
     {
        value : 'count',
        title: 'count',
        type: 'number',
        place:'how many product you want to add...'
     },
     {
        value : 'serialNumber',
        title: 'serial number',
        type: 'text',
        place:'ASIN shold be 10 '
     },

]

const NewProducts = () => {

    const [data,setData] = useState(product);
    const [specifications,setSpecifications] = useState([]);
    const [images,setImages] = useState([]);
    const [sizes,setSizes] = useState([]);
    const [errors,setErrors] = useState(null);
    const [isPendding,setIsPendding] = useState(false);

    const router = useRouter()

    const handleSubmit = async (event)=> {

        event.preventDefault();

        setIsPendding(true);
        const test = productZSchema.safeParse(data);
        console.log("gegegeg",data,sizes,images,specifications)

        const formData = new FormData();


        Object.entries(data).map((key)=> {
            formData.append(key[0],key[1])
        })

        for(let i = 0; i < images.length;i++){
            
            formData.append("color",images[i].color)
            for(let p = 0; p < images[i].imagePath.length;p++) {
                formData.append(`imagePath-${images[i].color}`,images[i].imagePath[p])
            }
        }

        sizes.map((e)=> {
            formData.append("sizeName",e.name);
            formData.append("sizeDesc",e.description);
        })

        specifications.map((e)=> {
            formData.append("specifKey",e.key);
            formData.append("specifValue",e.value);
        })

        if(test.success) {
            const config = {
                headers: { 'content-type': 'multipart/form-data' }
              }

            await axios.post('/api/products/new',formData, config)
                .then(response => {

                router.push('/admin/products');
                  console.log(response);
                })
                .catch(error => {
                    console.log(error);
                }).finally(()=> {
                    setIsPendding(false);
                })
        }else {
            setErrors(JSON.parse(test.error))
        }

    }

    useEffect(()=> {
        const test = productZSchema.safeParse(data);

        if(test.success){
            setErrors(null)

        }else {
            setErrors(JSON.parse(test.error))
        }
    },[data])
    
    const className = {
        inputsDev: '2r21 *:  QEWpb-4 mb-3  border-b border-slate-100',
        inputClass : 'w-full max-w-full  text-gray-900 border-slate-200 border  focus:border-slate-400 rounded-lg p-2 my-2',
        label: 'text-lg font-medium text-slate-700',
        sumBtn: 'w-full max-w-full  rounded-lg p-2 my-2 border-slate-200 border font-bold text-xl text-slate-700 bg-slate-100 uppercase hover:shadow-md ',
        error: 'w-fit my-auto mb-3 text-red-600 text-center text-xs'
    };

  return (
    <div className="p-4 lg:p-10 w-full max-w-full ">
        {
            isPendding ? <Loading /> : ''
        }
        <h3 className="pb-4 font-bold text-2xl">adding new product form</h3>
        <form   onSubmit={handleSubmit} className="w-full max-w-full  border border-slate-100 p-4 rounded-md shadow-lg" >
            {
                inputsInfo.map(input=> (
                    <FormInput 
                        key={input.value}
                        value={input.value} 
                        setvalue={(e)=> setData(prev=> {
                            return {
                                ...prev,
                                [input.value]: e
                            }
                        })} 
                        title={input.title} 
                        type={input.type}
                        errors={errors}
                        placeHolder={input.place}
                        className={className}
                    />
                ))
            }
            <div className={className.inputsDev}>
                <label className={className.label}  htmlFor="description">description : </label>
                <textarea 
                    name='description'  
                    className={`${className.inputClass} h-20 min-h-16`}  
                    id="description" 
                    placeholder="the description of the product..." 
                    required
                    onChange={e=> setData(prev=> {
                        return {...prev,description : e.target.value}
                    })}
                    >
                    
                </textarea>
                {
                    (errors && errors?.find((e=> e.path[0] === 'description')) !== undefined) ? 
                    <p className={className.error}>{errors?.find((e=> e.path[0] === 'description'))?.message}</p>
                    :''
                }
            </div>
            <div className={className.inputsDev}>
                <label className={className.label}  htmlFor="about">about this item : </label>
               <textarea 
                    name="about"
                    className={`${className.inputClass} h-20 min-h-16`}   
                    id="about" 
                    placeholder="about this item" 
                    cols="10" rows="10"
                    required
                    onChange={e=> setData(prev=> {
                        return {...prev,aboutThisItem : e.target.value}
                    })}
                    >

                </textarea>
                {
                    (errors && errors.find((e=> e.path[0] === 'aboutThisItem')) !== undefined) ? 
                    <p className={className.error}>{errors?.find((e=> e.path[0] === 'aboutThisItem'))?.message}</p>
                    :''
                }
            </div>
            <SpecificationInputs setData={setSpecifications} className={className} />
            <Images   setData={setImages}className={className}/>
            <Sizes  setdata={setSizes} className={className} />
            <div className={className.inputsDev} >
                <h3 className={`${className.label} pb-4`} >availblity : </h3>
                <div className='flex gap-4'>
                    <div className={`flex items-center gap-2 cursor-pointer `}  
                        onClick={()=> {
                            setData(prev=> {
                                return {...prev,isAvailable : true}
                            })
                        }
                        }>
                        <h5 className={data.isAvailable ?  'font-bold' :''}>available</h5>
                        <span className={`w-4 block h-4 border-2 border-zinc-500 rounded-full ${data.isAvailable ?  'bg-gray-800' :''}`}></span>
                    </div>
                    <div className={`flex items-center gap-2 cursor-pointer`} 
                        onClick={()=> {
                            setData(prev=> {
                                return {...prev,isAvailable : false}
                            })
                           }
                        }>
                        <h5 className={data.isAvailable ? '': 'font-bold text-red-400'}>not available</h5>
                        <span className={`w-4 block h-4 border-2 border-red-400 rounded-full ${data.isAvailable ? '' : 'bg-red-500'}`}></span>
                    </div>
                </div>
            </div>
            <button disabled={isPendding} type="submit" className={className.sumBtn}>{isPendding ? 'loading...' : 'save'}</button>
            
        </form>
    </div>
  )
}

export default NewProducts