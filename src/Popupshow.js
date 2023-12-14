import React from 'react'


export default function Popupshow(props) {
    // const closes = false
  return (
    <div className='popupshow'>
        <div className='popupshow-box'><h3>PopupShow</h3>
        <button onClick={()=>props.close(false)}>close X</button>
        </div>
    </div>
  )
}
