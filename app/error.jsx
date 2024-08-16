"use client"
import { ButtonWithIcon } from "@/ui/buttons/buttons";
import { useRouter } from "next/navigation";
import { BiMessageSquareError } from "react-icons/bi";
import { PiTrayArrowDownThin } from "react-icons/pi";

const ErrorPage = ()=> {

    const router = useRouter()
    return (
        <div className="w-full">
            <div className="flex items-center justify-center flex-col gap-5 capitalize h-[400px] ">
                <div className="flex items-center gap-2 justify-center text-gray-400">
                    <BiMessageSquareError size={24} /> 
                    <p className="font-bold text-sm">
                        opps! something went weong place tray again
                    </p>
                </div>
                <div className="max-w-[150px] mx-auto">
                    <ButtonWithIcon 
                        type='delete'
                        text='tray again'
                        Icon={PiTrayArrowDownThin}
                        disabled={false}
                        onClick={()=> router.refresh()}
                         />
                </div>
            </div>
        </div>
    )
}

export default ErrorPage;