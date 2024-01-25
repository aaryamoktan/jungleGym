import React from 'react'
import Footer from './footer/Footer'
import { Outlet } from 'react-router-dom'
const LAyout = () => {
  return (
    <>
        
        <Outlet/>
        <Footer/>
    </>
  )
}

export default LAyout