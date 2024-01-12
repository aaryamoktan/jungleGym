import React from 'react'
import './why.css';
import { IoMdDoneAll } from "react-icons/io";
import img from "../../image/body4.png"
import { SiPuma } from "react-icons/si";
import { SiAdidas } from "react-icons/si";
const Whyus = () => {
  return (
    <div className='whyContiner'>
        <div className='whyimg'>
        <img src={img}/>
        </div>
        <div className='whyus' id="why">
            <span><span className='stroke-text'>Why </span><span>Choose US</span></span>
            <span><span><IoMdDoneAll/> </span><span>over 140+ expert coachs</span></span>
            <span><span><IoMdDoneAll/> </span><span>Trsin smart and fater than before</span></span>
            <span><span><IoMdDoneAll/> </span><span>1 free program for new member</span></span>
            <span><span><IoMdDoneAll/> </span><span>Reliable patners</span></span>
            <span>Our Partners</span>
            <span><span><SiPuma/> </span><span><SiAdidas/></span></span>
        </div>
    </div>
  )
}

export default Whyus