import React from 'react'

function AuthHeader({text}) {
  return (
    <header>
        <div className="">
          <h2>system store</h2>
          <h5>{text}</h5>
        </div>
    </header>
  )
}

export default AuthHeader