import React from 'react'

function AuthHeader({text}) {
  return (
    <header className='mb-4'>
        <div className="text-center">
          <h2 
               className='text-3xl uppercase font-bold text-teal-950 dark:text-teal-50'
              >system store</h2>
          <h5 className='captilize text-teal-900 dark:text-teal-100 capitalize text-lg font-medium'>{text}</h5>
        </div>
    </header>
  )
}

export default AuthHeader