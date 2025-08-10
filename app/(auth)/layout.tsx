import React from 'react'

interface AuthLayoutProps{
    children:React.ReactNode
}

const AuthLayout = ({children}:AuthLayoutProps) => {
  return (
    <div className='min-h-screen flex justify-center items-center bg-amber-500'>
      {children}
    </div>
  )
}

export default AuthLayout
