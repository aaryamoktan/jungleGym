import React from 'react'
import "./footer.css"
import { FaInstagram } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className='footerContainer'>
      <span><a href="" style={{color:"orange"}}><span><FaSquareFacebook/></span></a><a href="" style={{color:"orange"}}><span><FaInstagram/></span></a> <a href="" style={{color:"orange"}}><span><FaLinkedinIn/></span></a></span>
      <span className='email'>aaryanMoktan2000@gmail.com</span>
    </div>
  )
}

export default Footer