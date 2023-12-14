import { useState } from "react";
import React from 'react'
import ProgressBar from "react-customizable-progressbar";


export default function Circular() {
    const [value1,setValue1] = useState(90)
    const [value2,setValue2] = useState(50)
    const [value3,setValue3] = useState(70)

  return (
    <div>
        <label type="text">Value1</label>
        <input type="text" onChange={(e)=>{setValue1(e.target.value)}}></input><br></br>
        <label type="text">Value2</label>
        <input type="text" onChange={(e)=>{setValue2(e.target.value)}}></input><br></br>
        <label type="text">Value3</label>
        <input type="text" onChange={(e)=>{setValue3(e.target.value)}}></input>

              <ProgressBar
        className="first-circle"
        radius={57}
        progress={value1}
        strokeColor="#f7921b"
        pointerRadius={3}
        pointerStrokeWidth={0}
        strokeWidth={10}
        trackStrokeWidth={10}
        pointerStrokeColor="#7bcd5c"
        trackStrokeColor="rgb(214, 240, 189)"
        initialAnimationDelay={1000}
        initialAnimation={true}
        trackTransition=".1s ease"
        transition="1s ease"
      >
        <div className="indicator">
          <ProgressBar
            radius={44}
            className="second-circle"
            progress={value2}
            strokeWidth={10}
            trackStrokeWidth={10}
            strokeColor="black"
            pointerRadius={3}
            pointerStrokeWidth={0}
            pointerStrokeColor="#7bcd5c"
            trackStrokeColor="rgb(214, 240, 189)"
            initialAnimationDelay={1000}
            initialAnimation={true}
            trackTransition=".1s ease"
            transition="1s ease"
          >
            <div className="indicator-2">
              <ProgressBar
                radius={31}
                className="third-circle"
                progress={value3}
                strokeColor="#f2291e"
                strokeWidth={10}
                trackStrokeWidth={10}
                pointerRadius={3}
                pointerStrokeWidth={0}
                pointerStrokeColor="#7bcd5c"
                trackStrokeColor="rgb(214, 240, 189)"
                initialAnimationDelay={1000}
                initialAnimation={true}
                trackTransition=".1s ease"
                transition="1s ease"
              />
            </div>
          </ProgressBar>
        </div>
      </ProgressBar>
    
    </div>
  )
}
