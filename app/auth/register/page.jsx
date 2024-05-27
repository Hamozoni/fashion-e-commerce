import { IoPerson } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoIosLock } from "react-icons/io";
import AuthHeader from "../_components/authHeader";

function RegisterPage() {

    const className = {
        inputContainer : "flex items-center"
    }
  return (
    <div>
        <div className="">
            <AuthHeader text='create an account'/>
            <form action="" onSubmit={""}>
                <div className={className.inputContainer}>
                    <IoPerson />
                    <input type="text" name="name" placeholder="name"/>
                </div>
                <div className={className.inputContainer}>
                    <MdEmail />
                    <input type="email" name="email" placeholder="email"/>
                </div>
                <div className={className.inputContainer}>
                    <IoIosLock />
                    <input type="password" name="password" placeholder="password"/>
                </div>
                <div className={className.inputContainer}>
                    <IoIosLock />
                    <input type="password" name="conrim-password" placeholder="confirm password"/>
                </div>
                <div className="">
                    <button>create an account</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default RegisterPage