import { IoPerson } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoIosLock } from "react-icons/io";
import AuthHeader from "../_components/authHeader";
import AuthSocial from "../_components/authSocial"

function RegisterPage() {

    const className = {
        inputContainer : "flex items-center rounded-md overflow-hidden border border-gray-100 mb-2",
        input: 'w-full p-2 focus:bg-green-50',
        inputIcon: 'bg-green-900 p-2 text-green-100',
        submitbtn: 'w-full text-center p-2 capitalize mb-4 rounded-md border border-green-50 shadow-md bg-slate-800 text-green-50 hover:bg-slate-700'
    }
  return (
    <div>
        <div className=" bg-white w-[450px] p-4 rounded-md shadow-md">
            <AuthHeader text='create an account'/>
            <form action="" onSubmit={""}>
                <div className={className.inputContainer}>
                     <div className={className.inputIcon}>
                         <IoPerson size={22}/>
                     </div>
                    <input className={className.input} type="text" name="name" placeholder="name"/>
                </div>
                <div className={className.inputContainer}>
                    <div className={className.inputIcon}>
                        <MdEmail size={22} />
                    </div>
                    <input className={className.input} type="email" name="email" placeholder="email"/>
                </div>
                <div className={className.inputContainer}>
                    <div className={className.inputIcon}>
                       <IoIosLock size={22}/>
                    </div>
                    <input className={className.input} type="password" name="password" placeholder="password"/>
                </div>
                <div className={className.inputContainer}>
                    <div className={className.inputIcon}>
                        <IoIosLock size={22}/>
                    </div>
                    <input className={className.input} type="password" name="conrim-password" placeholder="confirm password"/>
                </div>
                <button 
                    className={className.submitbtn}
                    >
                        create an account
                </button>
            </form>
            <AuthSocial text="already have an account?" link='/auth/login' />
        </div>
    </div>
  )
}

export default RegisterPage