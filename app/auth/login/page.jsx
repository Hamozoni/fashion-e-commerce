import AuthHeader from "../_components/authHeader"
import { AuthInput } from "../_components/authInput"
import { loginInputs } from "../_components/authInputsData"
import AuthSocial from "../_components/authSocial"
function LoginPage() {
  return (
    <div>
        <div className="">
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
            </form>
            <AuthSocial text='don not have an account' link='/auth/register' />
        </div>
    </div>
  )
}

export default LoginPage