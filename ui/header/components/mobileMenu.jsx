"use client";
import { TiThMenuOutline } from "react-icons/ti";
import Categories from "../../../components/Categories";
import { useState } from "react";
import Overlay from "../../../components/Overlay";
const MobileMenu = () => {

  const [isCategory,setIsCategory] = useState(false)

    const className = {
        menuContainer: 'flex items-center justify-center fixed left-0 top-[120px] z-50 w-full h-[120px] bg-green-100',
    }
  return (
    <section>
        <h3 onClick={()=> setIsCategory(true)} className="cursor-pointer">
            <TiThMenuOutline size={22} />
        </h3>
        {
          isCategory && (
            <>
              <Overlay onClick={()=> setIsCategory(false)}/>
              <div className={className.menuContainer}>
                  <Categories/>
              </div>
            </>

          )
        }
    </section>
  )
}

export default MobileMenu