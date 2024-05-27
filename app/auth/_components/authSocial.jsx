
import { SiGithub } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";

function AuthSocial({text}) {
  return (
    <div>
        <div className="flex items-center gap-3">
            <button className="flex-1 rounded-sm shadow-sm flex items-center justify-center">{SiGithub}</button>
            <button className="flex-1 rounded-sm shadow-sm flex items-center justify-center">{FcGoogle}</button>
        </div>
        <div className="">
            <h4>{text}</h4>
        </div>
    </div>
  )
}

export default AuthSocial