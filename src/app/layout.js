// import { Inter } from 'next/font/google'
import React from 'react'
import './globals.css'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={'root-layout'}>
        {children}
      </body>
    </html>
  )
}