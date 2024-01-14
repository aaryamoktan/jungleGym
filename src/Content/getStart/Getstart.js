import React from 'react'
import img from "../../image/g1.png"
import "./getstart.css"
import { Link } from 'react-router-dom'
const Getstart = () => {
  return (
    <div className='getstartContainer'>
    <Link to="/">
    <img src={img} alt="mylogo"/></Link>
      
    </div>
  )
}

export default Getstart