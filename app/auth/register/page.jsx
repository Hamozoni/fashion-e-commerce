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
import loginImage from "@/public/login-image.jpg";

import { LuClipboardSignature } from "react-icons/lu";
import { AppContext } from "../../contextProvider";
import { useRouter } from "next/navigation";
import { Loading } from "@/ui/models/loading";
import Image from "next/image";

function RegisterPage() {

    const registerForm = useRef(null);

    const [isLoading,startTranation] = useTransition();
    const [validationError,setValidationError] = useState(null);
    const [serverErrror,setServerErrror] = useState(null);
    const [serverSucces,setServerSucces] = useState(null);
    const {currentUser,innerWidth} = useContext(AppContext);
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
                        }else if(data.error) {
                            setServerErrror(data.error);

                        }
                    })
            
            }else if(test.error) {
                setValidationError(JSON.parse(test.error));
            }
       })
    };


  return (
    <div className="flex items-center justify-center w-full p-4">
        <div className="border w-full sm:w-fit border-teal-100 dark:border-stone-800  rounded-md shadow-md overflow-hidden  flex items-stretch justify-center">

            <div className="bg-white dark:bg-stone-950 w-full sm:w-[450px] sm:max-w-[450px] flex-1 p-4">
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
            {
                innerWidth > 970 ?
                <div className=" flex-1">
                    <Image src={loginImage} height={520} width={520} alt="login"/>
                </div>
                : null
            }
            {
                isLoading ? 
                <Loading />
                :null
            }
        </div>

    </div>
  )
}

export default RegisterPage