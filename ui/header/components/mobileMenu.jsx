"use client";
import { useState } from "react";
// components
import Overlay from "../../../components/Overlay";
// icons
import { TiThMenuOutline } from "react-icons/ti";
import { GiTireIronCross } from "react-icons/gi";
// categories data
import { categoriesData } from "../../../data/categoriesData";

export const MobileCategories = ()=> {
  return (
    <>
       <Overlay />
      <div className=" fixed left-3 lg:left-8 top-[70px] w-[300px] bg-teal-50 rounded-md border border-teal-200">
          <header>
              <h4>categories</h4>
              <button><GiTireIronCross/></button>
          </header>
          <ul className="">
               {
                  categoriesData?.map(({name,imagePath})=>(
                    <li key={name} className="">

                    </li>
                  ))
               }
          </ul>
      </div>
    </>
  )
}

const MobileMenu = () => {

    const [isCategory,setIsCategory] = useState(false)

    const className = {
        menuContainer: 'flex items-center justify-center fixed left-0 z-50 w-full bg-green-100',
    };

  return (
    <section>
        <h3 onClick={()=> setIsCategory(true)} className="cursor-pointer">
            <TiThMenuOutline size={26} />
        </h3>
    </section>
  )
}

export default MobileMenu