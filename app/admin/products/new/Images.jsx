"use client";

import { useEffect, useState } from "react";
import {z} from 'zod';

const ACCEPTED_IMAGE_TYPES = ["jpeg", "jpg", "png", "webp"];


const imagesZSchema = z.object({
    imagePath: z.string().refine(
        (file) => ACCEPTED_IMAGE_TYPES .includes(file.split('.')[1]),
        "Only .jpg, .jpeg, .png and .webp formats are supported."
      ),
    color: z.string(),
    productId: z.string()
})

export default function Images({setData,id,className}) {

    const [images,setImages] = useState([{
        imagePath: '',
        color: '',
        productId: id
    }]);

    const [errors,setErrors] = useState(null)

    const addMore = ()=> {
        setImages(prev=> [...prev,{imagePath: '',color: '',productId: id}])
    }

    const removeField = (leng)=> {
        setImages(prev=> {
            prev.length = leng - 1;
            return [...prev]
        })
    };

    useEffect(()=> {

        const test = imagesZSchema.array().safeParse(images);

        if(test.success){
            setData([...images])
            setErrors(null)
        }else {
            setErrors(JSON.parse(test.error))
        }
    },[images]);

  return (
    <div className={className.inputsDev}>
        <h4 className={`${className.label} pb-3`}>images and colors </h4>
        <div className="">
            {
                images.map((_,i)=> (
                    <div className="md:flex items-center w-full gap-4 pb-1" key={'images-'+i}>
                        <div className=" w-full md:h-1/2 pb-2">
                            <h6 className={`${className.label}`}>image :</h6>
                            <input type="file" className={className.inputClass}
                                onChange={(e)=> setImages(prev=> {
                                    prev[i].imagePath = e.target.value
                                    return [...prev]
                                    
                                })} 
                            />
                           {
                                (errors && errors.find((e=> e.path[0] === i )) !== undefined) ? 
                                    <p className={className.error}>{errors?.find((e=> e.path[1] === 'imagePath'))?.message}</p>
                                :''
                            }
                        </div>
                        <div className="w-full md:h-1/2 ">
                            <h6 className={`${className.label}`}>color :</h6>
                            <input type='color' className=''
                                onChange={(e)=> setImages(prev=> {
                                    prev[i].color = e.target.value
                                    return [...prev]
                                })} 
                            />
                             {
                                (errors && errors.find((e=> e.path[0] === i )) !== undefined) ? 
                                    <p className={className.error}>{errors?.find((e=> e.path[1] === 'color'))?.message}</p>
                                :''
                            }
                        </div>
                    </div>
                ))
            }
            <div className="flex items-center gap-4 w-fit mx-auto text-center cursor-pointer py-3">
        
                <p className="font-bold px-4 py-1  rounded-lg border-slate-200 border hover:bg-slate-200 " onClick={addMore}>add more field</p>
                {
                    images.length > 1 ?
                <p className="text-red-600 hover:font-bold" onClick={()=> removeField(images.length)}>delete field</p>
                :''
                }

            </div>
        </div>
    </div>
  )
}
