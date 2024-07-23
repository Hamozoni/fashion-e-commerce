"use client";
import Image from "next/image";
import { useState } from "react";
// components
import { SubCatories } from "../header/components/headerCategories";
import {Overlay} from "./overlay";
// icons
import { TiThMenuOutline } from "react-icons/ti";
import { GiTireIronCross } from "react-icons/gi";
import { IoIosArrowForward } from "react-icons/io";
// categories data
import { categoriesData } from "../../data/categoriesData";

export const MobileMenu = () => {
  
  const [isCategory,setIsCategory] = useState(false);
  const [openedSubCategoyIndex,setOpenedSubCategoyIndex] = useState(null)
  
  const MobileCategories = ()=> {

    const handleSubCatgoryOpen = (index)=> {
      if(index === openedSubCategoyIndex) {
        setOpenedSubCategoyIndex(null);
      }else {
        setOpenedSubCategoyIndex(index);

      }
    };

    return (
      <>
         <Overlay onClick={()=> setIsCategory(false)} />
        <div className="capitalize fixed min-w-fit left-0 z-[70] h-screen max-h-screen top-0 w-fit bg-gray-50">
            <header className="flex items-center justify-between p-3">
                <h4 className="text-teal-950 text-xl font-bold">categories</h4>
                <button><GiTireIronCross/></button>
            </header>
            <div className="h-[500px] max-h-[500px] overflow-y-auto">
              <ul className="py-3 h-fit min-h-fit">
                  {
                      categoriesData?.map(({name,imagePath,sub},index)=>(
                        <li 
                            key={name} 
                            className="p-3 min-w-[300px] w-[300px]" 
                            onClick={()=> handleSubCatgoryOpen(index)}
                            >
                          <div className="flex items-center justify-between cursor-pointer rounded-md p-3 border-2 border-gray-200 hover:bg-gray-100">
                            <div className="flex items-center gap-2">
                              <Image className='rounded-md' src={imagePath} width={50} alt={name}/>
                              <h5 className="text-teal-950 font-bold text-xl">{name} fashion</h5>
                            </div>
                              <button 
                                  className={`${index === openedSubCategoyIndex ? 'rotate-90':''}`}
                                  >
                                    <IoIosArrowForward />
                              </button>
                          </div>
                          {
                            openedSubCategoyIndex === index &&
                            <SubCatories 
                              subCategories={sub}
                              setIsSubCategories={setIsCategory}
                              />
                          }
                        </li>
                      ))
                  }
              </ul>
            </div>
        </div>
      </>
    )
  }

  return (
    <section>
        <h3 onClick={()=> setIsCategory(true)} className="cursor-pointer text-teal-900 dark:text-teal-100">
            <TiThMenuOutline size={26} />
        </h3>
        {
           isCategory &&
          <MobileCategories />
        }
    </section>
  )
};