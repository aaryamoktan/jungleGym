import React from 'react'
import "./testo.css"
import img from "../../image/test.jpg"
import { Link } from 'react-router-dom'
const Testo = () => {
  return (
    <><div className='testo' id="testo">
        <div className='testo-l'>
            <span>testmonials</span>
            <span className='stroke-text'>What they </span>
            <span>say about us</span>
            <span>i made the right choice by choosing the mtfit club by right plan 
            and program i already achive mi ideal body</span>
            <span>Mathew sallyw</span>
        </div>
        <div className='test-r'>
            <div></div>
            <div></div>
            <div>
                <img src={img} alt="img"/>
            </div>
            <button><Link to={"/testomore"} onClick={()=>
        {
            window.scrollTo(0,0)
        }}  style={{textDecoration:"none ",color:"white"}}>see More</Link></button>
        </div>
    </div></>
  )
}

export default Testo