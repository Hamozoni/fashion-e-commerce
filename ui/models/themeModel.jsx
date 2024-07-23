"use client"

import { useContext, useState } from "react";
// context
import {AppContext} from "../../app/contextProvider";
// icons
import { IoIosArrowForward ,IoIosArrowDown} from "react-icons/io";

export const ThemeModel = ()=> {

    const {theme,handleTheme} = useContext(AppContext);
    const [isTheme,setIsTheme] = useState(false);

    const themeHandler = (theme)=> {
        localStorage.setItem('theme',theme);
        handleTheme();
    };

    const className = {
        li: "px-4 py-3 capitalize hover:bg-gray-200 text-lg font-medium text-teal-950 cursor-pointer"
    }

    return (
            <li className={className.li}>
                <button
                    onClick={()=> setIsTheme(!isTheme)}
                    className='flex items-center justify-between'>
                   <div className="flex items-center gap-3">
                       <MdOutlineDarkMode size={24} /> appearance
                    </div> 
                    {
                        isTheme ? 
                        <IoIosArrowDown/> :
                         <IoIosArrowForward />
                    }
                </button>
                {
                    isTheme ? 
                    <ul>
                            <li 
                                className={className.li}
                                onClick={()=> themeHandler('user device')}
                                >user device
                            </li>
                            <li 
                                className={className.li}
                                onClick={()=> themeHandler('dark')}
                                >dark
                            </li>
                            <li 
                                className={className.li}
                                onClick={()=> themeHandler('light')}
                                >light
                            </li>
                    </ul>
                    : null

                }

            </li>
    );
};