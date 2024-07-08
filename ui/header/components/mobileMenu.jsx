"use client";
import { TiThMenuOutline } from "react-icons/ti";
import { useState } from "react";
import Overlay from "../../../components/Overlay";
const MobileMenu = () => {

  const [isCategory,setIsCategory] = useState(false)

    const className = {
        menuContainer: 'flex items-center justify-center fixed left-0 z-50 w-full bg-green-100',
    }
  return (
    <section>
        <h3 onClick={()=> setIsCategory(true)} className="cursor-pointer">
            <TiThMenuOutline size={26} />
        </h3>
    </section>
  )
}

export default MobileMenu