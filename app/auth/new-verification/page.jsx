
import AuthHeader from '../_components/authHeader'
import {VerificationForm} from "../_components/verificationForm"

function verificationPage() {
  return (
    <div className="">
        <div 
            className=" bg-white dark:bg-stone-950 w-[450px] p-4 rounded-md shadow-md"
            >
             <AuthHeader text='confirming your verification...'/>
             <VerificationForm />
        </div>
    </div>
  )
}

export default verificationPage