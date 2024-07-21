
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const className = {
    nextPrevBtn : "absolute cursor-pointer hover:scale-110 hover:border-teal-300 top-1/4 w-[40px] h-[40px] border-2 border-l-teal-300 rounded-full flex items-center justify-center bg-teal-50"
};

export const ScrollLeft = ({onClick})=> {
    return (
        <botton
            onClick={onClick} 
            className={`${className.nextPrevBtn} left-0`}
            >
            <IoIosArrowBack size={24} color='#5eead4'/>
        </botton>
    )
};

export const ScrollRight = ({onClick})=> {
     return (
        <botton 
            onClick={onClick}
            className={`${className.nextPrevBtn} right-0`}>
           <IoIosArrowForward size={24} color='#5eead4'/>
        </botton>
     )
}