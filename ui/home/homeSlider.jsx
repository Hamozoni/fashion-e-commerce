"use client";
import {useEffect, useState } from "react";
import Image from "next/image";

// data
import {categoriesData} from "../../data/categoriesData";
import { ScrollLeftBtn, ScrollRightBtn } from "../buttons/buttons";

const cateLength = categoriesData.length

export function HomeSlider() {

    const themeMode = document.documentElement.classList.contains('dark')

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

         switch(cateLength){
            case sliderIndex + 1 : setSliderIndex(0);
            break;
            default : handleNext();
         }
      
      },5000);

      return ()=> clearInterval(sliderInterval)
    });

  return (
    <div className="h-vh relative">
        <div className="flex items-center min-w-fit h-vh ">
            <div className="w-full max-w-full overflow-hidden">
                <div className="w-fit min-w-fit flex flex-row-reverse" style={{transform: `translateX(${(sliderIndex * 100)}%)`}}>
                {
                    categoriesData?.map(({imagePath,id})=> (
                        <Image 
                            key={id}
                            className="w-full object-cover h-vh min-w-full" 
                            src={imagePath} 
                            alt="slide image"
                            />
                    ))
                }

                </div>
            </div>
            <div 
                className={`${themeMode ? 'bg-gradient-transparent-dark': 'bg-gradient-transparent'} absolute left-0 top-0 w-full h-vh`} 
                ></div>
        </div>
        <div className=" absolute left-0 top-0 w-full h-full flex items-center justify-center">
            <div className="">
                <div className="p-3 lg:px-8 w-full max-w-full overflow-hidden">
                    <div className="w-fit min-w-fit flex" style={{transform: `translateX(-${(sliderIndex * 100)}%)`}}>
                        {
                            categoriesData?.map(({name,dec})=> (
                                <section key={name} className="min-w-full p-4 font-extrabold lg:p-8 capitalize text-center text-teal-950 ">
                                    <h2 
                                        className="text-2xl sm:text-4xl text-teal-950 dark:text-teal-50"
                                        >{name} fashion
                                    </h2>
                                    <p className="text-lg sm:text-2xl text-teal-900 dark:text-teal-100 my-4 max-w-[580px] mx-auto">{dec}</p>
                                    <button
                                        className="text-xl  p-2 px-5 capitalize rounded-full border border-teal-200 bg-teal-50 hover:scale-105"
                                        >shop now
                                    </button>
                                </section>
                            ))
                        }
                    </div>
                </div>
                <ul className="flex items-center justify-center gap-2 mb-5">
                    {
                        categoriesData?.map(({name},index)=> (
                            <li 
                                onClick={()=> setSliderIndex(index)}
                                className={`w-6 h-3 border-2 border-teal-600 rounded-md cursor-pointer  ${index === sliderIndex ? 'bg-teal-200 w-8 h-4' :''}`}
                                key={name}></li>
                        ))
                    }
                </ul>

            </div>
        </div>
        <ScrollLeftBtn 
            onClick={handleNext} 
            leftScroll={10} 
            />
         <ScrollRightBtn 
            onClick={handlePrev} 
            leftScrollEnds={10} 
            />
    </div>
  )
}