import { FaGooglePlay } from "react-icons/fa";
import { BsApple } from "react-icons/bs";

export const DownloadApps = ()=> {
    const className = {
        btn: 'flex gap-2 w-full justify-center items-center bg-teal-50 p-2 px-4 capitalize rounded-full border border-gray-200 hover:scale-105'
    };
    return (
        <div className="py-3 capitalize">
            <header className=" mb-4">
                <h4 
                    className="text-lg font-bold text-teal-50"
                    >download our apps
                </h4>
                <p 
                    className="text-teal-200"
                    >Shop our products and offers on-the-go.
                </p>
            </header>
            <div className="">
                <div className="flex gap-5 text-teal-800">
                    <button className={className?.btn}>
                        <FaGooglePlay/> google play
                    </button>
                    <button className={className?.btn}>
                        <BsApple/> apple store
                    </button>
                </div>
            </div>
        </div>
    )
}