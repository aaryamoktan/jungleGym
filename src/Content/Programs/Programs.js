import React from 'react'
import "./programs.css"
import { LuDumbbell } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { WiDirectionRight } from "react-icons/wi";
import { FaRunning } from "react-icons/fa";
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
                <button>Join Now <span><WiDirectionRight/></span></button>
            </div>
            <div>
            <span><MdOutlineLocalFireDepartment/></span>
                <span>Fat burning</span>
                <span>In this program, we main do exercise which helap to  burn of calories as much as we can</span>
                <button className=''>Join Now <span><WiDirectionRight/></span></button>
            </div>
            <div>
            <span><FaRunning/></span>
                <span>Cardio tranning</span>
                <span>In this program you are mainly focouse on you movement exercise</span>
                <button>Join Now <span><WiDirectionRight/></span></button>
            </div>
            <div>
            <span><CiHeart/></span>
                <span>Health Fitness</span>
                <span>In this program,we target to our health doing basic exercise</span>
                <button>Join Now <span><WiDirectionRight/></span></button>
            </div>
        </div>
        
    </div>
  )
}

export default Programs