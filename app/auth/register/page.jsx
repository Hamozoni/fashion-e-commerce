
import AuthHeader from "../_components/authHeader";
import AuthSocial from "../_components/authSocial";
import {AuthInput} from "../_components/authInput";
import {registerInputs} from "../_components/authInputsData";

function RegisterPage() {

    const className = {
        submitbtn: 'w-full text-center p-2 capitalize mb-4 rounded-md border border-green-50 shadow-md bg-slate-800 text-green-50 hover:bg-slate-700'
    }

  return (
    <div>
        <div className=" bg-white w-[450px] p-4 rounded-md shadow-md">
            <AuthHeader text='create an account'/>
            <form action="" onSubmit={""}>

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
                <button className={className.submitbtn}>
                    create an account
                </button>
            </form>
            <AuthSocial text="already have an account?" link='/auth/login' />
        </div>
    </div>
  )
}

export default RegisterPage