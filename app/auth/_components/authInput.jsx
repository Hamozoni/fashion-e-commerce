"use client";
import { useState } from "react";
import { BiError } from "react-icons/bi";
import { IoIosEyeOff, IoIosEye} from "react-icons/io";

export function AuthInput({type,name,Icon,isLoading,error}) {

    const className = {
        inputContainer : " relative flex items-center rounded-md overflow-hidden border border-gray-200 dark:border-stone-800 hover:hover:border-teal-300 mb-2",
        input: 'w-full p-2 text-teal-950 dark:text-teal-50 bg-transparent',
        inputIcon: 'bg-teal-100 dark:bg-teal-600 p-2 text-teal-950 dark:text-teal-50',
    };

    const [isPasswordShow,setIsPasswordShow] = useState(false);


  return (
    <div className="">
      <div className={className.inputContainer}>
          <div className={className.inputIcon}>
              <Icon size={22}/>
          </div>
          <input
              disabled={isLoading} 
              className={className.input} 
              required
              type={(isPasswordShow && type === 'password') ? 'text' :type}
              name={name}
              placeholder={name}/>
              
            {
              type === 'password' ?
              <div 
                  onClick={()=> setIsPasswordShow(!isPasswordShow)}
                  className=" absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer text-teal-300">
                    {
                      isPasswordShow ? 
                      <IoIosEye size={24} /> :
                      <IoIosEyeOff size={24} />
                     
                    }
              </div>
              :null
            }
      </div>
      {
        error && 
        <h5 
          className="p-2 pt-0 text-rose-500 font-medium capitalize flex items-center justify-center"
          ><BiError size={20} /> {error?.message}
        </h5>
      }
    </div>
  )
}

 
