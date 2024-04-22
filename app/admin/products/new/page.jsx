"use client";

import { useState } from "react";
import FormInput from "./FormInput";
import SpecificationInputs from "./SpecificationInputs";
import Images from "./Images"

const id = `${Math.random().toString(16).slice(2)}id${Math.random().toString(16).slice(2)}`;


const productSize= {
    name: '',
    value: '',
    description: '',
    productId: id
}

const product = {
    id,
    name : '',
    priceInCent : 0,
    offerPriceInCent: null,
    isOffer: false,
    isAvailable: true,
    description: '',
    count: 1,
    category: '',
    subCategory: '',
    aboutThisItem: '',
    serialNumber: '',
    specifications: [],
    images: [],
    sizes: [productSize]
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
        type: 'number',
        place:'serial number shold be 10 degits'
     },

]

const NewProducts = () => {

    const [data,setData] = useState(product);

    console.log(data)
    
    const className = {
        inputsDev: 'pb-4 mb-3  border-b border-slate-100',
        inputClass : 'w-full max-w-full  text-gray-900 border-slate-200 border  focus:border-slate-400 rounded-lg p-2 my-2',
        label: 'text-lg font-medium text-slate-700',
        sumBtn: 'w-full max-w-full  rounded-lg p-2 my-2 border-slate-200 border font-bold text-xl text-slate-700 bg-slate-100 uppercase hover:shadow-md '
    };

  return (
    <div className="p-4 lg:p-10 w-full max-w-full ">
        <h3 className="pb-4 font-bold text-2xl">adding new product form</h3>
        <form className="w-full max-w-full  border border-slate-100 p-4 rounded-md shadow-lg" >
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
                    cols="10" 
                    rows="10"
                    required
                    ></textarea>
            </div>
            <div className={className}>
                <label className={className.label}  htmlFor="about">about this item : </label>
               <textarea 
                    className={`${className.inputClass} h-20 min-h-16`}   
                    id="about" 
                    placeholder="about this item" 
                    cols="10" rows="10"
                    required
                    ></textarea>
            </div>
            <SpecificationInputs id={id} setData={setData} className={className} />
            <Images setData={setData} id={id} className={className}/>
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

            <button type="submit" className={className.sumBtn}>save</button>
            
        </form>
    </div>
  )
}

export default NewProducts