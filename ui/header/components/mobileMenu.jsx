"use client";
import { TiThMenuOutline } from "react-icons/ti";
import Categories from "../../../components/Categories";
import { useState } from "react";
import Overlay from "../../../components/Overlay";
const MobileMenu = () => {

  const [isCategory,setIsCategory] = useState(false)

    const className = {
        menuContainer: 'fixed left-1 top-1 z-50 w-full',
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