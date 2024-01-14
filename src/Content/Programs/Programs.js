import React from 'react'
import "./programs.css"
import { LuDumbbell } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { WiDirectionRight } from "react-icons/wi";
import { FaRunning } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { MdOutlineLocalFireDepartment } from "react-icons/md";
const Programs = () => {
  return (
    <div className='programs' id="programs">
        <div className='programsSpan'>
            <span className='stroke-text'>Explore Our</span>
            <span>programs</span>
            <span className='stroke-text'>to shape you</span>
        </div>
        <div className='programdown'>
            <div>
                <span><LuDumbbell/></span>
                <span>Strength Tranning</span>
                <span> in this program, you are trained to improve your strength through many exercise</span>
               
            </div>
            <div>
            <span><MdOutlineLocalFireDepartment/></span>
                <span>Fat burning</span>
                <span>In this program, we main do exercise which helap to  burn of calories as much as we can</span>
                
            </div>
            <div>
            <span><FaRunning/></span>
                <span>Cardio tranning</span>
                <span>In this program you are mainly focouse on you movement exercise</span>
               
            </div>
            <div>
            <span><CiHeart/></span>
                <span>Health Fitness</span>
                <span>In this program,we target to our health doing basic exercise</span>
            </div>
            
        </div>
        <button><Link to="/Programsd" onClick={()=>
        {
            window.scrollTo(0,0)
        }}  style={{textDecoration:"none",color:"black"}}>Join Now <span><WiDirectionRight/></span></Link></button>
        
    </div>
  )
}

export default Programs