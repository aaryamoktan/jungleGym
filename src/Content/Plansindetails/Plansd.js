import React from 'react'
import "./plansd.css"
import { FaHeartbeat } from "react-icons/fa";
import { LuDumbbell } from "react-icons/lu";
import { FaCrown } from "react-icons/fa";
import img from "../../image/g1.png"
import { Link } from 'react-router-dom'
const Plansd = () => {
  return (
    <div className='plansd'>
      <Link to="/">
        <img src={img} alt="mylogo" /></Link>
      <div className='plansdd1'>
          <div>
            <span className='span1'><FaHeartbeat /></span>
            <span className='span2'>Basic Plan</span>
            <span className='span3'>$ 25</span>
            <span className='span4'><span></span><span>2 hours of excercise</span></span>
            <span className='span5'><span></span><span>Access to the  community</span></span>
          </div>
        <div>

          <span></span>
          <button ><Link to="/book" state={{title:"Basic Plan",cost:"25"}} style={{textDecoration:"none",color:"black"}}>Book Now</Link></button>
        </div>
      </div>
      <div className='plansdd2'>
        <div>
        
          <span></span>
          <button ><Link to="/book" state={{title:"Premium Plan",cost:"30"}} style={{textDecoration:"none",color:"black"}}>Book Now</Link></button>
        </div>
          <div>
            <span className='spans1'><FaCrown /></span>
            <span className='spans2'>Premium Plan</span>
            <span className='spans3'>$ 30</span>
            <span className='spans4'><span></span><span>5 hours of excercise</span></span>
            <span className='spans5'><span></span><span>Access to the  minibar</span></span>
          </div>
      </div>
      <div className='plansdd3'>
          <div>
            <span className='span1'><LuDumbbell /></span>
            <span className='span2'>pro Plan</span>
            <span className='span3'>$ 45</span>
            <span className='span4'><span></span><span>8 hours of excercise</span></span>
            <span className='span5'><span></span><span>Access to the  all services</span></span>
          </div>
          <div>
         
          <span></span>
          <button ><Link to="/book" state={{ title: "Pro Plan", cost:"45" }} style={{textDecoration:"none",color:"black"}}>Book Now</Link></button>
          </div>
      </div>
    </div>
  )
}

export default Plansd