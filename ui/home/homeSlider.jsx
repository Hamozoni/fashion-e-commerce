"use client";
import Image from "next/image";
import { IoIosArrowForward ,IoIosArrowBack} from "react-icons/io";
import { useEffect, useState } from "react";
import {categories} from "../../data/categories"

const cateLength = categories.length

const className = {
   prevNextBtn: ' absolute top-1/2  -translate-y-1/2 flex justify-center items-center p-3 rounded-full bg-white hover:scale-110'
}

export function HomeSlider() {

    const [sliderIndex,setSliderIndex] = useState(0);

    const handleNext = ()=> {
        if(sliderIndex <  cateLength - 1) {
            setSliderIndex(prev=> prev + 1)
        }
    }

    const handlePrev = ()=> {
        if(sliderIndex > 0) {
            setSliderIndex(prev=> prev - 1)
        }
    };

    useEffect(()=> {

   const sliderInterval =  setInterval(()=> {
    console.log(sliderIndex,cateLength);

         switch(cateLength){
            case sliderIndex + 1 : setSliderIndex(0);
            break;
            default : handleNext();
         }
      
      },5000);

      return ()=> clearInterval(sliderInterval)
    });

  return (
    <div className="max-h-lvh relative">
        <div className="flex items-center min-w-fit h-lvh  max-h-lvh ">
            <div className="w-full max-w-full overflow-hidden">
                <div className="w-fit min-w-fit flex flex-row-reverse" style={{transform: `translateX(${(sliderIndex * 100)}%)`}}>
                {
                    categories?.map(({imagePath,id})=> (
                        <Image 
                            key={id}
                            className="w-full object-cover h-lvh max-h-lvh  min-w-full" 
                            src={imagePath} 
                            alt="slide image"
                            />
                    ))
                }

                </div>
            </div>
            <div className="absolute left-0 top-0 w-full h-full bg-gradient-transparent" ></div>
        </div>
        <div className=" absolute left-0 top-0 w-full h-full flex items-center justify-center">
            <div className="">
                <div className="p-3 lg:px-8 w-full max-w-full overflow-hidden">
                    <div className="w-fit min-w-fit flex" style={{transform: `translateX(-${(sliderIndex * 100)}%)`}}>
                        {
                            categories?.map(({name,dec})=> (
                                <section key={name} className="min-w-full p-4 font-extrabold lg:p-8 capitalize text-center text-teal-700 ">
                                    <h2 
                                        className="text-5xl"
                                        >{name}
                                    </h2>
                                    <p className="text-2xl my-4 max-w-[580px] mx-auto">{dec}</p>
                                    <button
                                        className="text-xl  p-2 px-5 capitalize rounded-md border border-green-900 hover:scale-105"
                                        >shop now
                                    </button>
                                </section>
                            ))
                        }
                    </div>
                </div>
                <ul className="flex items-center justify-center gap-2 mb-5">
                    {
                        categories?.map(({name},index)=> (
                            <li 
                                onClick={()=> setSliderIndex(index)}
                                className={`w-6 h-3 border-2 border-teal-600 rounded-md cursor-pointer  ${index === sliderIndex ? 'bg-teal-700 w-8 h-4' :''}`}
                                key={name}></li>
                        ))
                    }
                </ul>

            </div>
        </div>
        <button onClick={handleNext} className={`${className.prevNextBtn} right-3 lg:right-8`}>
            <IoIosArrowForward size={20}/>
        </button>
        <button onClick={handlePrev} className={`${className.prevNextBtn} left-3 lg:left-8`}>
            <IoIosArrowBack size={20} />
        </button>
    </div>
  )
}