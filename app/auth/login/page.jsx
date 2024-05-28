import AuthHeader from "../_components/authHeader"
import { AuthInput } from "../_components/authInput"
import { loginInputs } from "../_components/authInputsData"
import AuthSocial from "../_components/authSocial";
import {SubmitBtn} from "../_components/submitBtn";

function LoginPage() {
  return (
    <div>
        <div className="bg-white w-[450px] p-4 rounded-md shadow-md">
            <AuthHeader text='login'/>
            <form action="">
                {
                    loginInputs?.map(input=> (
                        <AuthInput 
                            key={input.name} 
                            type={input.type} 
                            name={input.name} 
                            Icon={input.Icon}
                            />
                    ))
                }
                <SubmitBtn text='login' />
            </form>
            <AuthSocial text="don't have an account" link='/auth/register' />
        </div>
    </div>
  )
}

export default LoginPage