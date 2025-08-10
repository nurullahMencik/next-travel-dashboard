"use client"
import React from 'react'
import {ClerkProvider} from "@clerk/nextjs"

interface ClientProvidersProps{
    children:React.ReactNode
}


const ClientProviders = ({children}:ClientProvidersProps) => {
  return (
    <ClerkProvider>
      {children}
    </ClerkProvider>
  )
}

export default ClientProviders
