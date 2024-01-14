import React from 'react'
import img from "../../image/g1.png"
import "./testomore.css"
import { Link } from 'react-router-dom'
const Testomore = () => {
  return (
    <div className='trdtomoreContainer'>
    <Link to="/">
    <img src={img} alt="mylogo"/></Link>
      
    </div>
  )
}

export default Testomore