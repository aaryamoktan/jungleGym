import React, { useState } from 'react'
import "./book.css"
import { useLocation } from 'react-router-dom'
const Book = () => {
  const uselocation = useLocation();
  const [months,setmonths] = useState(1)
  let Cost = uselocation.state.cost
 const [username,setUsername] = useState();
 const [phone,setPhone] =useState();
  return (
    <div className='bookContainer'>
    <form>
      
      <br/>
      
      <p>Package {uselocation.state.title }</p>
      <input type="text" onChange={(e)=>
      {
        setUsername(e.target.value)
      }} value={username}/>
      <input type="text" onChange={(e)=>
      {
        setPhone(e.target.value)
      }} value={phone}/>
      Months<input type="number" onChange={(e)=>
      {
        setmonths(e.target.value)
      }} value={months}/>
      <p>${Cost*months}</p>

      <button onSubmit={()=>
      {
        alert("")
      }}>Book</button>
      
      
    </form>
        
    </div>
  )
}

export default Book