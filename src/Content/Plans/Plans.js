import React from 'react'
import "./plans.css"
import { FaHeartbeat } from "react-icons/fa";
import { LuDumbbell } from "react-icons/lu";
import { FaCrown } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Plans = () => {
  return (
   <>
    <div className='planContainer ' id="plans">
        <div className='planSpan'>
            <span className='stroke-text'>ready to start</span>
            <span>your journey</span>
            <span className='stroke-text'>now withus</span>
        </div>
        <div className='plans '>
            <div className='plans1'>
            <span className='span1'><FaHeartbeat/></span>
            <span className='span2'>Basic Plan</span>
            <span className='span3'>$ 25</span>
            <span className='span4'><span></span><span>2 hours of excercise</span></span>
            <span className='span5'><span></span><span>Access to the  community</span></span>
            
            <button className='plansshop'><Link to="/plan" style={{textDecoration:"none",color:"black"}}>Join Now</Link></button>

            </div>
            <div className='plans2'>
            <span className='spans1'><FaCrown/></span>
            <span className='spans2'>Premium Plan</span>
            <span className='spans3'>$ 30</span>
            <span className='spans4'><span></span><span>5 hours of excercise</span></span>
            <span className='spans5'><span></span><span>Access to the  minibar</span></span>
            
            <button className='plansshop'><Link to="/plan" style={{textDecoration:"none",color:"black"}}>Join Now</Link></button>
            </div>
            <div className=' plans3'>
            <span className='span1'><LuDumbbell/></span>
            <span className='span2'>pro Plan</span>
            <span className='span3'>$ 45</span>
            <span className='span4'><span></span><span>8 hours of excercise</span></span>
            <span className='span5'><span></span><span>Access to the  all services</span></span>
            <button className='plansshop' ><Link to="/plan" style={{textDecoration:"none",color:"black"}}>Join Now</Link></button>
            </div>
        </div>
    </div>
   </>
  )
}

export default Plans