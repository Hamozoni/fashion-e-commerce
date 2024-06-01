import React from 'react'
import AuthHeader from '../_components/authHeader'
import Link from 'next/link';
import {VerificationForm} from "../_components/verificationForm"

function verificationPage() {
  return (
    <div className="">
        <div 
            className=" bg-white w-[450px] p-4 rounded-md shadow-md"
            >
             <AuthHeader text='confirming your verification...'/>

             <VerificationForm />
             <Link 
                className='w-full text-center p-4'
                href='/auth/login'
                 >back to login
             </Link>
        </div>
    </div>
  )
}

export default verificationPage