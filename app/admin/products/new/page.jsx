"use client";

import { useEffect, useState } from "react";
import FormInput from "./FormInput";
import SpecificationInputs from "./SpecificationInputs";
import Images from "./Images";
import Sizes from "./Sizes";
import axios from "axios";
import { z} from "zod";

 const productZSchema  =  z.object({
    id : z.string(),
    name : z.string().min(3),
    priceInCent : z.coerce.number().int().min(100),
    isAvailable: z.boolean(),
    description: z.string().min(5),
    count: z.coerce.number().int().min(1),
    category: z.string().min(3),
    subCategory: z.string().min(3),
    aboutThisItem: z.string().min(3),
    serialNumber: z.string().min(10).max(10),
})

const id = `${Math.random().toString(16).slice(2)}id${Math.random().toString(16).slice(2)}`;

const product = {
    id,
    // name : '',
    // priceInCent : 0,
    isAvailable: true,
    // description: '',
    // count: 1,
    // category: '',
    // subCategory: '',
    // aboutThisItem: '',
    // serialNumber: '',
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

    const handleSubmit = (event)=> {
        event.preventDefault();

        const test = productZSchema.safeParse(data);
        console.log(JSON.parse(test.error))
        console.log(images)
        console.log(sizes)
        console.log(specifications)

        if(test.success) {
            setIsPendding(true);
            setErrors(null)
            axios({
               method: 'POST',
               url: '/api/products/new',
               data: {
                  products : data,
                  specifications,
                  images,
                  sizes
               }
           }).catch(err=> {
               setErrors(err)
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
        sumBtn: 'w-full max-w-full  rounded-lg p-2 my-2 border-slate-200 border font-bold text-xl text-slate-700 bg-slate-100 uppercase hover:shadow-md '
    };

  return (
    <div className="p-4 lg:p-10 w-full max-w-full ">
        <h3 className="pb-4 font-bold text-2xl">adding new product form</h3>
        <form  onSubmit={handleSubmit} className="w-full max-w-full  border border-slate-100 p-4 rounded-md shadow-lg" >
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
                    />
                ))
            }
            <div className={className.inputsDev}>
                <label className={className.label}  htmlFor="description">description : </label>
                <textarea 
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
                    (errors && errors.find((e=> e.path[0] === 'description')) !== undefined) ? 
                    <p>{errors.find((e=> e.path[0] === 'description')).message}</p>
                    :''
                }
            </div>
            <div className={className}>
                <label className={className.label}  htmlFor="about">about this item : </label>
               <textarea 
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
                    (errors && errors.find((e=> e.path[0] === 'about')) !== undefined) ? 
                    <p>{errors.find((e=> e.path[0] === 'about')).message}</p>
                    :''
                }
            </div>
            <SpecificationInputs id={id} setData={setSpecifications} className={className} />
            <Images setData={setImages} id={id} className={className}/>
            <Sizes id={id} setdata={setSizes} className={className} />
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
                {
                    (errors && errors.find((e=> e.path[0] === 'isAvailable')) !== undefined) ? 
                    <p>{errors.find((e=> e.path[0] === 'isAvailable')).message}</p>
                    :''
                }
            </div>
            <button type="submit" className={className.sumBtn}>{isPendding ? 'loading...' : 'save'}</button>
            
        </form>
    </div>
  )
}

export default NewProducts