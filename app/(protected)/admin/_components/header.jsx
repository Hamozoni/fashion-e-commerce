import { AdminAccount } from "./adminAccount";
import { MdOutlineLocationSearching } from "react-icons/md";
import { AiOutlineNotification } from "react-icons/ai";

export const Header = ()=> {
    return (
        <header className=" p-3 lg:px-8">
            <div className="flex items-center justify-between gap-5">
                <div className="flex-1">
                   <AdminAccount />
                </div>
               <div className="flex-1 flex items-center gap-5">
                    <div className="flex-1">
                        <form action="" className="flex items-stretch rounded-full border border-gray-200 overflow-hidden w-full" >
                            <input 
                                    className=" p-3 pl-5 bg-gray-50 w-full"
                                    type="search" 
                                    placeholder="search..." />
                            <button className="bg-teal-400 px-3 pr-5">
                                    <MdOutlineLocationSearching size={22} color="white"/>
                            </button>
                        </form>
                    </div>

                    <div className="flex items-center justify-center p-3 rounded-full bg-gray-100">
                        <AiOutlineNotification size={22} color='#2dd4bf'/>
                    </div>
               </div>
            </div>
        </header>
    )
}