import React from 'react'
import Nevbar from './Nevbar/Nevbar'
import Footer from './footer/Footer'
import { Outlet } from 'react-router-dom'
const LAyout = () => {
  return (
    <>
        <Nevbar/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default LAyout