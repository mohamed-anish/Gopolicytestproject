import React from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Slider from './Slider';


export default function Popupbar() {
  return (
    <div>Popup
          <Popup trigger={<button> Trigger</button>} position="right center">
          <div>Popup content here !! which is clicked</div>
          </Popup>

          <Slider/>

    </div>
  )
}
