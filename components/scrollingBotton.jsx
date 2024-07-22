
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const className = {
    nextPrevBtn : "absolute cursor-pointer hover:scale-110 hover:border-teal-300 top-1/2 -translate-y-1/2 w-[40px] h-[40px] border-2 rounded-full flex items-center justify-center"
};

export const ScrollLeft = ({onClick,leftScroll})=> {
    return (

        leftScroll === 0 ? null :
        <botton
            onClick={onClick} 
            className={`${className.nextPrevBtn} left-0 border-l-teal-300`}
            >
            <IoIosArrowBack size={24} color='#5eead4'/>
        </botton>
    )
};

export const ScrollRight = ({onClick,leftScrollEnds})=> {
     return (
        leftScrollEnds <= 1 ? null :
        <botton 
            onClick={onClick}
            className={`${className.nextPrevBtn} right-0 border-r-teal-300`}>
           <IoIosArrowForward size={24} color='#5eead4'/>
        </botton>
     )
}