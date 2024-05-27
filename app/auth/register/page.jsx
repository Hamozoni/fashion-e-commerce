import { IoPerson } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { AuthHeader } from "../_commponents/AuthHeader";

function RegisterPage() {

  return (
    <div className="">
      <div className="">
        <AuthHeader text='create an account' />
        <form action="">
            <div className="">
              <IoPerson />
              <input type="text" placeholder='name' name="name" />
            </div>
            <div className="">
              <MdEmail />
              <input type="email" placeholder='email' name="email"/>
            </div>
            <div className="">
              <RiLockPasswordFill />
              <input type="password" placeholder='password' name='password' />
            </div>

        </form>

      </div>
    </div>
  )
}

export default RegisterPage;