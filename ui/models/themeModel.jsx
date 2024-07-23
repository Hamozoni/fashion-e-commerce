"use client"

import { useContext, useState } from "react";
// context
import {AppContext} from "../../app/contextProvider";
// icons
import { IoIosArrowForward ,IoIosArrowDown} from "react-icons/io";
import { MdDarkMode ,MdLightMode,MdOutlineDevicesOther} from "react-icons/md";
import { GiCheckMark } from "react-icons/gi";
import { IoInvertModeOutline } from "react-icons/io5";

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
        li: "capitalize px-4 py-2  text-sm font-bold text-teal-950 dark:text-teal-100 cursor-pointer flex items-center justify-between",
        btn: "border-b border-b-gray-200 dark:border-b-teal-950 flex items-center justify-between w-full px-4 py-3 hover:bg-gray-100 dark:hover:bg-teal-950 text-sm font-medium text-teal-950 dark:text-teal-100 "
    }

    return (
            <li className=''>
                <button
                    onClick={()=> setIsTheme(!isTheme)}
                    className={className.btn}>
                   <div className="flex items-center gap-3 capitalize">
                       <IoInvertModeOutline size={24} /> theme: <small><b>{theme}</b></small>
                    </div> 
                    {
                        isTheme ? 
                        <IoIosArrowDown/> :
                         <IoIosArrowForward />
                    }
                </button>
                {
                    isTheme ? 
                    <ul className="bg-white dark:bg-teal-950 border-b border-b-gray-200 dark:border-b-teal-900 ">

                        {
                            themeOptions?.map(({name,Icon})=> (
                                <li 
                                    className={`${theme === name ? 'bg-gray-300 dark:bg-teal-800' :'hover:bg-gray-200 dark:hover:bg-teal-900'} ${className.li}`}
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