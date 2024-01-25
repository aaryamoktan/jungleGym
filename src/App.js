import './App.css';
import heart from "./image/heart.png"
import body from "./image/body4.png"
import cal from "./image/cal.png"
import Testo from './Content/testomonial/Testo';
import Programs from './Content/Programs/Programs';
import Nevbar from './Content/Nevbar/Nevbar';   
import { Link } from 'react-router-dom';
import Whyus from './Content/whyus/Whyus';
import { WiDirectionUp } from "react-icons/wi";
import Plans from './Content/Plans/Plans';
function App() {
  return (
    <>
    <Nevbar/>
      <div className='App1'>
        <div className='left-h'>
          <div className='thebestAdd'>
            <div></div>
            <span> the best fitness club in the town</span>
          </div>
          <div className='hero-text'>
            <div><span className='stroke-text'>Shape </span><span> Your</span></div>
            <div>
              <span>Ideal Body</span>
            </div>
            <div><span>In here we will help you to shape and build your ideal body and live up your life to fullest</span></div>
          </div>
          <div className='figure'>
            <div><span>+140</span><span>export coachs</span></div>
            <div><span>+985</span><span>members joined</span></div>
            <div><span>+50</span><span>fitness programs</span></div>
          </div>
          <div className='hero-button'>
            <button className='btn'><Link to="/getstart" onClick={()=>
        {
            window.scrollTo(0,0)
        }}  style={{textDecoration:"none",color:"white"}}>Get Started</Link></button>
            
          </div>
        </div>
        <div className='right-h'>
         
          <div className='heart-rate'>
            <img src={heart} alt="heart"/>
            <span>Heart Rate</span><span>116 bpm</span>
          </div>
          <img src={body} alt="" className='hero-img'/>
          
          <div className='calories'>
          <img src={cal}/>
            
            <div>
            <span>Calories Burns</span>
            <span>220 kcl</span>
            </div> 
          </div>
        </div>
        
      </div>
      <button className='bt' onClick={()=>
          {
            window.scrollTo({
  top: 100,
  left: 100,
  behavior: "smooth",
})
          }}><WiDirectionUp/></button>
      <Programs/>
      <Whyus/>
      <Plans/>
      <Testo/>
      
    </>
  );
}

export default App;
