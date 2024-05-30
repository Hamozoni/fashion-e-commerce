"use client"
import AuthHeader from "../_components/authHeader";
import AuthSocial from "../_components/authSocial";
import {AuthInput} from "../_components/authInput";
import {registerInputs} from "../_components/authInputsData";
import {SubmitBtn} from "../_components/submitBtn";
import {registerSchema} from "../../../validationSchemas/authSchemas"
import { useRef, useState, useTransition } from "react";
import {registerAction} from "../../../actions/register";
import { useRouter } from "next/navigation";
import { BiError } from "react-icons/bi";

function RegisterPage() {

    const registerForm = useRef(null);

    const [isLoading,startTranation] = useTransition();
    const [validationError,setValidationError] = useState(null);
    const [serverErrror,setServerErrror] = useState(null);

    const router = useRouter();

    const register =async ()=> {

        const formData = new FormData(registerForm.current);
        const test = registerSchema.safeParse(Object.fromEntries(formData.entries()));

        startTranation(()=> {

            setValidationError(null);
            setServerErrror(null);

            if(test.success){
                    registerAction(formData)
                    .then((data)=> {
                        if(data.success) {
                            router.push('/auth/login');

                        }else if(data.error) {
                            console.log(data.error)
                            setServerErrror(data.error);

                        }
                    })
            
            }else if(test.error) {
                setValidationError(JSON.parse(test.error));
                console.log(JSON.parse(test.error));
            }
       })
    };


  return (
    <div>
        <div className=" bg-white w-[450px] p-4 rounded-md shadow-md">
            <AuthHeader text='create an account'/>
            <form ref={registerForm}  action={register}>

                {
                    registerInputs.map((input)=> (
                        <AuthInput 
                            key={input.name}
                            type={input.type} 
                            name={input.name} 
                            Icon={input.Icon} 
                            isLoading={isLoading}
                            error={validationError ? validationError?.find(e=> e.path?.includes(input.name)) : null}
                            />
                    ))
                }
                {
                    serverErrror &&
                    <h4 
                        className="w-full p-2 my-3 font-medium capitalize rounded-md bg-rose-200 text-green-900 flex items-center justify-center">
                        <BiError size={22} /> {serverErrror}
                    </h4>
                }
                <SubmitBtn isLoading={isLoading} text='create an account' />
            </form>
            <AuthSocial text="already have an account?" link='/auth/login' />
        </div>
    </div>
  )
}

export default RegisterPage