
import { SiGithub } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

function AuthSocial({text,link}) {
    const className = {
        socialBtn : "flex-1 rounded-md border border-gray-50 hover:bg-gray-100 bg-gray-50 hover:shadow-none shadow-md flex items-center justify-center py-2"
    }
  return (
    <div>
        <div className="flex items-center gap-3">
            <button className={className.socialBtn}>
                <SiGithub size={24}/>
            </button>
            <button className={className.socialBtn}>
                <FcGoogle size={24}/>
            </button>
        </div>
        <div className="text-center p-3 ">
            <Link href={link} className="capitalize text-green-800 font-medium hover:text-green-700">
                {text}
            </Link>
        </div>
    </div>
  )
}

export default AuthSocial