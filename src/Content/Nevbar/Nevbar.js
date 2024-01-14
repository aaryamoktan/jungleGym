import React from 'react'
import logo from "../../image/g1.png"
import "./Nevbar.css"
const Nevbar = () => {
  return (
    <>
     <div className='nevbar'>
     <div className=''>
      <img src={logo} alt="myimg" className='logo'/>
      <p>Jungle gym</p>
      </div>
      <ul className='nevbar-menu'>
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