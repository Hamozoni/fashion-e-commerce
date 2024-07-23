"use client"

import { useContext, useState } from "react";
// context
import {AppContext} from "../../app/contextProvider";
// icons
import { IoIosArrowForward ,IoIosArrowDown} from "react-icons/io";
import { MdOutlineDarkMode,MdDarkMode ,MdLightMode,MdOutlineDevicesOther} from "react-icons/md";
import { GiCheckMark } from "react-icons/gi";

const themeOptions = [
    {name: 'user device',Icon: MdOutlineDevicesOther},
    {name: 'dark',Icon: MdDarkMode},
    {name: 'light',Icon: MdLightMode},
];

export const ThemeModel = ()=> {

    const {theme,handleTheme} = useContext(AppContext);
    const [isTheme,setIsTheme] = useState(false);

    const themeHandler = (theme)=> {
        localStorage.setItem('theme',theme);
        handleTheme();
    };

    const className = {
        li: "capitalize px-4 py-2  text-sm font-bold text-teal-950 cursor-pointer flex items-center justify-between"
    }

    return (
            <li className=''>
                <button
                    onClick={()=> setIsTheme(!isTheme)}
                    className='border-b border-b-gray-200 flex items-center justify-between w-full px-4 py-3 hover:bg-gray-100  text-lg font-medium text-teal-950 '>
                   <div className="flex items-center gap-3 capitalize">
                       <MdOutlineDarkMode size={24} /> theme: <small><b>{theme}</b></small>
                    </div> 
                    {
                        isTheme ? 
                        <IoIosArrowDown/> :
                         <IoIosArrowForward />
                    }
                </button>
                {
                    isTheme ? 
                    <ul className="bg-white border-b border-b-gray-200 dark:bg-black">

                        {
                            themeOptions?.map(({name,Icon})=> (
                                <li 
                                    className={`${theme === name ? 'bg-gray-300' :'hover:bg-gray-200'} ${className.li}`}
                                    key={name} 
                                    onClick={()=> themeHandler(name)}
                                    >
                                        <div className="flex items-center gap-3">
                                           <Icon />
                                           {name}
                                        </div>
                                        {
                                            theme === name ?
                                            <GiCheckMark />
                                            : null
                                        }
                                </li>
                            ))
                        }
                    </ul>
                    : null

                }

            </li>
    );
};