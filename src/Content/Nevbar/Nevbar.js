import React from 'react'
import "./Nevbar.css"
import { Link ,useNavigate} from 'react-router-dom'
import logo from "../../image/g1.png"
const Nevbar = () => {
  return (
    <>
     <div className='header'>
      <img src={logo} alt="myimg" className='logo'/>
      <p>Jungle gym</p>
      <ul className='header-menu'>
      <li><a href="/" style={{textDecoration:"none",color:"white"}}>Home</a></li>
        <li><a href="#programs" style={{textDecoration:"none",color:"white"}}>Programs</a></li>
        <li><a href="#why" style={{textDecoration:"none",color:"white"}}>Why us</a></li>
        <li><a href="#plans" style={{textDecoration:"none",color:"white"}}>Plans</a></li>
        <li><a href="#testo" style={{textDecoration:"none",color:"white"}}>Testimonials</a></li>
      </ul>
     </div>
    </>
  )
}

export default Nevbar