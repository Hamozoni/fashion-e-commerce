import React from 'react'
import { BiSolidLock } from "react-icons/bi";
function AuthHeader({text}) {
  return (
    <header className='mb-4'>
        <div className="text-center capitalize">
          <h1  className='text-xl mb-3 uppercase font-bold text-teal-300 flex items-center justify-center gap-2'>
              <BiSolidLock size={40}/> fashion
          </h1>
          <h5 className='captilize text-teal-900 dark:text-teal-100 capitalize text-sm font-medium'>
            {text}
          </h5>
        </div>
    </header>
  )
}

export default AuthHeader