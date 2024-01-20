import React, { useState } from 'react'
import "./book.css"
import { useLocation } from 'react-router-dom'
const Book = ({props}) => {
  const uselocation = useLocation();
  const [months,setmonths] = useState()
  let Cost = uselocation.state.cost
 const [username,setUsername] = useState();
 const [phone,setPhone] =useState();
  return (
    <div className='bookContainer'>
    <div className='bookForm'>
  <p>{uselocation.state.title}</p>
    <form>
      
     <input type="text" placeholder='Enter your name' onChange={(e)=>
      {
        setUsername(e.target.value)
      }} value={username}/>
     
      <input type="text" placeholder='Enter your EmailId' onChange={(e)=>
      {
        setPhone(e.target.value)
      }} value={phone}/>
      
      
     <input type="number" placeholder=" months" onChange={(e)=>
      {
        
        setmonths(e.target.value)
      }} value={months}/>
      <button >${months*Cost}</button>
      <button onSubmit={()=>
      {
        alert("")
      }}>Book</button>
    </form>  
    </div>
    </div>
  )
}

export default Book