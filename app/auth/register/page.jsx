"use client"
import AuthHeader from "../_components/authHeader";
import AuthSocial from "../_components/authSocial";
import {AuthInput} from "../_components/authInput";
import {registerInputs} from "../_components/authInputsData";
import {registerSchema} from "@/validationSchemas/authSchemas"
import { useContext, useRef, useState, useTransition } from "react";
import {registerAction} from "@/actions/auth/register";
import {ErrorSucces} from "../_components/errorSucces";
import { ButtonWithIcon } from "@/ui/buttons/buttons";

import { LuClipboardSignature } from "react-icons/lu";
import { AppContext } from "../../contextProvider";
import { useRouter } from "next/navigation";

function RegisterPage() {

    const registerForm = useRef(null);

    const [isLoading,startTranation] = useTransition();
    const [validationError,setValidationError] = useState(null);
    const [serverErrror,setServerErrror] = useState(null);
    const [serverSucces,setServerSucces] = useState(null);
    const {currentUser} = useContext(AppContext);
    const router = useRouter()

    if(currentUser) {
        router.push('/')
    }

    const register = ()=> {

        const formData = new FormData(registerForm.current);
        const test = registerSchema.safeParse(Object.fromEntries(formData.entries()));

        setValidationError(null);
        setServerErrror(null);
        setServerSucces(null)

        startTranation(()=> {

            if(test.success){
                    registerAction(formData)
                    .then((data)=> {
                        if(data.success) {
                            setServerSucces(data.success)
                            console.log(data.success)
                        }else if(data.error) {
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
        <div className="bg-white dark:bg-stone-950 border border-teal-100 dark:border-stone-800 w-[450px] p-4 rounded-md shadow-md">
            <AuthHeader text='create an account'/>
            <form ref={registerForm}  action={register}>

                {
                    serverSucces ? null :
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
                <ErrorSucces error={serverErrror} success={serverSucces}/>

                {
                    serverSucces ? null :
                        <ButtonWithIcon 
                            text='create an account' 
                            Icon={LuClipboardSignature} 
                            type='primary' 
                            onClick={()=>''} 
                            disabled={isLoading}
                            />
                }
            </form>
            {
                serverSucces ? null :
                <AuthSocial text="already have an account?" link='/auth/login' page='signUp' />
            }
        </div>
    </div>
  )
}

export default RegisterPage