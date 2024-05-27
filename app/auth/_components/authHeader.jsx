import React from 'react'

function AuthHeader({text}) {
  return (
    <header className='mb-4'>
        <div className="text-center">
          <h2 className='text-3xl uppercase font-bold text-green-950'>system store</h2>
          <h5 className='captilize text-green-800 text-lg font-medium'>{text}</h5>
        </div>
    </header>
  )
}

export default AuthHeader