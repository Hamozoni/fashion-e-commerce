"use client";

import { useState } from "react";
import {addProtuct} from "../../_actions/addProtuct";

const productImage = {
    imagePath: '',
    color: '',
    productId: ''
}

const productSpecification= {
    key: '',
    value: '',
    productId: ''
}

const productSize= {
    name: '',
    value: '',
    description: '',
    productId: ''
}

const product = {
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
    specifications: [productSpecification],
    images: [productImage],
    sizes: [productSize]
};

const NewProducts = () => {

    const [data,setData] = useState(product);
    
    const className = {
        inputsDev: 'pb-4 mb-3  border-b border-slate-100',
        inputClass : 'w-full max-w-full  text-gray-900 border-slate-200 border  focus:border-slate-400 rounded-lg p-2 my-2',
        label: 'text-xl font-bold text-slate-700',
        sumBtn: 'w-full max-w-full  rounded-lg p-2 my-2 border-slate-200 border font-bold text-xl text-slate-700 bg-slate-100 uppercase hover:shadow-md '
    };

  return (
    <div className="p-4 lg:p-10 w-full max-w-full ">
        <h3 className="pb-4 font-bold text-2xl">adding new product form</h3>
        <form className="w-full max-w-full  border border-slate-100 p-4 rounded-md shadow-lg" >
            <div className={className.inputsDev}>
                <label className={className.label}  htmlFor="title">title : </label>
                <input 
                    type="text" 
                    id="title" 
                    className={className.inputClass} 
                    placeholder="the name of the product..."
                    required
                     />
            </div>
            <div className={className.inputsDev}>
                <label className={className.label}  htmlFor="price">price : </label>
                <input 
                    className={className.inputClass} 
                    type="number" 
                    id="price" 
                    placeholder="the price of the product in cent..."
                    required
                     />
            </div>
            <div className={className.inputsDev}>
                <label className={className.label}  htmlFor="description">description : </label>
                <textarea 
                    className={className.inputClass}  
                    id="description" 
                    placeholder="the description of the product..." 
                    cols="10" 
                    rows="10"
                    required
                    ></textarea>
            </div>
            <div className={className.inputsDev}>
                <label className={className.label}  htmlFor="category">category : </label>
                <input 
                    className={className.inputClass} 
                    type="text" 
                    id="category" 
                    placeholder="if there is more than one category  one||two"
                     />
            </div>
            <div className={className}>
                <label  className={className.label} htmlFor="subcategory">subcategory : </label>
                <input 
                    className={className.inputClass} 
                    type="text" 
                    id="subcategory" 
                    placeholder="if there is more than one subcategory  one||two"
                     />
            </div>
            <div className={className}>
                <label className={className.label}  htmlFor="about">about this item : </label>
               <textarea 
                    className={className.inputClass}   
                    id="about" 
                    placeholder="about this item" 
                    cols="10" rows="10"
                    required
                    ></textarea>
            </div>
            <div className={className}>
                <label className={className.label}  htmlFor="specifications">specifications : </label>
               
            </div>
            <div className={`${className.inputsDev} flex gap-4`}>
                <div className='{className}'>
                    <label className={className.label}  htmlFor="not-availble"> not availble : </label>
                    <input type="radio"  value='false' id="not-availble" />
                </div>
                <div className='{className}'>
                   <label className={className.label}  htmlFor="availble">availble : </label>
                   <input type="radio" value='true' id="availble" />
                </div>
            </div>
            <div className={className}>
                <label className={className.label}  htmlFor="count">count : </label>
                <input 
                    className={className.inputClass} 
                    type="number" 
                    name="count" 
                    id="count" 
                    placeholder="the count of the product..."
                    required
                     />
            </div>
            <div className={className.inputsDev}>
                <label className={className.label}  htmlFor="serialNumber">serial Number : </label>
                <input 
                    className={className.inputClass} 
                    type="number" 
                    id="serialNumber-path" 
                    placeholder="serial number shold be 10 degits"
                    required
                    />
            </div>

            <button type="submit" className={className.sumBtn}>save</button>
            
        </form>
    </div>
  )
}

export default NewProducts