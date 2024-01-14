import React from 'react'
import "./plansd.css"
import img from "../../image/g1.png"
import { Link } from 'react-router-dom'
const Plansd = () => {
  return (
    <div className='plansd'>
    <Link to="/">
      <img src={img} alt="mylogo"/></Link>
    </div>
  )
}

export default Plansd