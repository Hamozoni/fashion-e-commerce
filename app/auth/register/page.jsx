
import AuthHeader from "../_components/authHeader";
import AuthSocial from "../_components/authSocial";
import {AuthInput} from "../_components/authInput";
import {registerInputs} from "../_components/authInputsData";
import {SubmitBtn} from "../_components/submitBtn";
import {registerAction} from "../../../actions/register";

function RegisterPage() {

    // const register = (e)=> {
    //     e.preventDefault();
    // }


  return (
    <div>
        <div className=" bg-white w-[450px] p-4 rounded-md shadow-md">
            <AuthHeader text='create an account'/>
            <form action={registerAction}>

                {
                    registerInputs.map((input)=> (
                        <AuthInput 
                            key={input.name}
                            type={input.type} 
                            name={input.name} 
                            Icon={input.Icon} 
                            />
                    ))
                }
                <SubmitBtn text='create an account' />
            </form>
            <AuthSocial text="already have an account?" link='/auth/login' />
        </div>
    </div>
  )
}

export default RegisterPage