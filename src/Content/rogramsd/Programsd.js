import React from 'react'
import "./programsd.css"
import { LuDumbbell } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { FaRunning } from "react-icons/fa";
import img from "../../image/s1.png"
import img1 from "../../image/f.png"
import img2 from "../../image/c.png"
import img3 from "../../image/h.png"
import { MdOutlineLocalFireDepartment } from "react-icons/md";
import imgs from "../../image/g1.png"
import ProgramsL from './Programslist'
import { Link } from 'react-router-dom'
const Programsd = () => {
  return (
    <div className='programd'>
      <Link to="/">
        <img src={imgs} alt="mylogo" /></Link>
      <div className='div1'>
        <div className='programLl'>
          <span><LuDumbbell/></span>
          <span>Strength tranning</span>
          <span>Strength training, also known as weight training or resistance training, involves the performance of physical exercises that are designed to improve strength and endurance. It is often associated with the lifting of weights.</span>
          <button><Link to="/plan" onClick={()=>
          {
            window.scrollTo(0,0)
          }} style={{textDecoration:"none",color:"black"}}>check plans</Link></button>
        </div>
        <div className='programLr'>
          <img src={img} alt="myimg" />
        </div>
      </div>
      <div className='div2'>
        <div className='programLl'>
          <span><MdOutlineLocalFireDepartment/></span>
          <span>Fat burinig</span>
          <span>Your body stores calories as fat to keep you alive and safe. There are many gimmicks that claim to amplify fat burning, such as working out in the fat-burning zone, spot reduction, and foods or supplements that supposedly make you burn more fat.</span>
          <button><Link to="/plan" onClick={()=>
          {
            window.scrollTo(0,0)
          }} style={{textDecoration:"none",color:"black"}}>check plans</Link></button>
        </div>
        <div className='programLr'>
          <img src={img1} alt="myimg" />
        </div>
      </div>
      <div className='div3'>
        <div className='programLl'>
          <span><FaRunning/></span>
          <span>Cardio tranning</span>
          <span>Cardio exercise, which is sometimes referred to as aerobic exercise, is any rhythmic activity that raises your heart rate into your target heart rate zone. This is the zone where you burn the most fat and calories.</span>
          <button><Link to="/plan"onClick={()=>
          {
            window.scrollTo(0,0)
          }} style={{textDecoration:"none",color:"black"}}>check plans</Link></button>
        </div>
        <div className='programLr'>
          <img src={img2} alt="myimg" />
        </div>
      </div>
      <div className='div4'>
        <div className='programLl'>
          <span><CiHeart/></span>
          <span>Health fitness</span>
          <span>A health and fitness club, also known as a gym or a fitness center, is a facility that provides equipment, programs, and services for physical fitness and exercise. These facilities typically have a variety of exercise equipment, such as treadmills, stationary bikes, weight machines, and free weights.</span>
          <button><Link to="/plan" onClick={()=>
          {
            window.scrollTo(0,0)
          }} style={{textDecoration:"none",color:"black"}}  >check plans</Link></button>
        </div>
        <div className='programLr'>
          <img src={img3} alt="myimg" />
        </div>
      </div>
    </div>

  )
}

export default Programsd