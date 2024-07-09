import { BsCashCoin } from "react-icons/bs";
import { TbArrowBackUp } from "react-icons/tb";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdOutlineLockPerson } from "react-icons/md";

function Features() {

    const className = {
        infoLi: 'flex items-center text-center p-2  flex-col text-sm font-medium max-w-[160px]',
        infoLiIcon:'text-[30px] bg-gray-100  p-2 rounded-full text-teal-950',
        infoSpan: 'text-teal-900 font-bold text-sm'
    }
    
  return (
    <div className="py-4 border-b border-gray-100 overflow-x-auto">
        <ul className="flex items-center gap-3 min-w-fit">
            <li className={className.infoLi}>
                <BsCashCoin className={className.infoLiIcon} size={40}/>
                <span className={className.infoSpan}>cash on delivery</span>
            </li>
            <li className={className.infoLi}>
                <TbArrowBackUp className={className.infoLiIcon} size={40}/>
                <span className={className.infoSpan}>7 days returnable</span>
            </li>
            <li className={className.infoLi}>
                <CiDeliveryTruck className={className.infoLiIcon} size={40}/>
                <span className={className.infoSpan}>delivered by system</span>
            </li>
            <li className={className.infoLi}>
                <MdOutlineLockPerson className={className.infoLiIcon} size={40}/>
                <span className={className.infoSpan}>secure transaction</span>
            </li>
        </ul>
    </div>
  )
}

export default Features