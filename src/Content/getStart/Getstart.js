import React from 'react'
import img from "../../image/g1.png"
import "./getstart.css"
import { Link } from 'react-router-dom'
import img1 from "../../image/eat.png"
import img2 from "../../image/boilC.png"
import img3 from "../../image/boil.png"
import img4 from "../../image/picg.jpg"

const Getstart = () => {
  return (
    <>
    <div className='getstartContainer'>
      <Link to="/">
        <img src={img} alt="mylogo" /></Link>
      <div className='getStartwithus'>
        <span className='stroke-text'>Start</span>
        <span>With</span>
        <span className='stroke-text'>us</span>
      </div>
      <div className='ditePlan'>
        <span>Eat Healthy</span>
        <span>To Have A Ideal Body! Food Plays a Main role So Eat Healthy</span>
        <img src={img1} alt="healthyFood" />
      </div>
      <div className='dietImg'>
          <div><img src={img2} alt="" /></div>
          <div><img src={img3} alt="" /></div>
          <div><img src={img2} alt="" /></div>
          <div><img src={img3} alt="" /></div>
          <div><img src={img2} alt="" /></div>
          <div><img src={img3} alt="" /></div>
        </div>
        <div className='exercisePlan'>
          <span>discipline is most important </span>
          <span>Follow This</span>
          <img src={img4}/>
        </div>
        <div className='motivationD'>
          <span>We are what we repeatedly do. Excellence then is not an act but a habit</span>
        </div>
    </div>
    
    </>
  )
}

export default Getstart