import React from 'react'
import img from "../../image/g1.png"
import "./learn.css"
import { Link } from 'react-router-dom'
const Learnmore = () => {
  return (
    <div className='learnContainer'>Learnmore
    <Link to="/"><img src={img} alt="mylogo"/></Link></div>
  )
}

export default Learnmore