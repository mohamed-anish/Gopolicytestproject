import React, { useState } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
// import ProgressBar from 'react-customizable-progressbar'


export default function Test() {
    // const [home,setHome] = useState('true')

    const [bgcolor,setBgcolor] = useState(0)
    const percentage = 50;

  return (
    <div className='navbar'>
      <div className='nav'>
        <ul className='navbar-links'>
            <li className={bgcolor === 0? "red" : "blue"} onClick={()=>{setBgcolor(0)}}>Home</li>
            <li className={bgcolor === 1? "red" : "blue"} onClick={()=>{setBgcolor(1)}}>Menu</li>
            <li className={bgcolor === 2? "red" : "blue"} onClick={()=>{setBgcolor(2)}}>About</li>
            <li className={bgcolor === 3? "red" : "blue"} onClick={()=>{setBgcolor(3)}}>Contact</li>
            <li className={bgcolor === 4? "red" : "blue"} onClick={()=>{setBgcolor(4)}}>Expansion</li>
        </ul>
      </div>

        <h1>Loading animation</h1>

      <div className='test-chart'>


        <div className='circleflow'></div>

        <div style={{width:"100px",height:"100px"}}>
        <CircularProgressbar value={percentage} text={`${percentage}%`} />
        </div>
      </div>      

    </div>
  )
}
