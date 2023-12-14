import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop : {
        breakpoint:{max:4000,min:3000},
        items:5,
        
    },

    desktop : {
        breakpoint:{max:3000,min:1024},
        items:5,
        slidesToSlide: 1, // optional, default to 1.

    },

    tablet : {
        breakpoint:{max:1024,min:464},
        items:2,
    },

    mobile : {
        breakpoint:{max:464,min:0},
        items:1
    }
}

export default function Slider() {
    const array = ["items1","items1","items1","items1","items1","items1","items1","items1",]
    
  return (
    <div className='Slider'>

    <Carousel responsive={responsive} autoPlay infinite arrows={true} showDots={true} centerMode={true}>
        <div style={{width:"100px",height:"50px",backgroundColor:"greenyellow",textAlign:"center",paddingTop:"25px",margin:"10px"}}>item2</div>
        <div style={{width:"100px",height:"50px",backgroundColor:"greenyellow",textAlign:"center",paddingTop:"25px",margin:"10px"}}>item3</div>
        <div style={{width:"100px",height:"50px",backgroundColor:"greenyellow",textAlign:"center",paddingTop:"25px",margin:"10px"}}>item4</div>
        <div style={{width:"100px",height:"50px",backgroundColor:"greenyellow",textAlign:"center",paddingTop:"25px",margin:"10px"}}>item5</div>
        <div style={{width:"100px",height:"50px",backgroundColor:"greenyellow",textAlign:"center",paddingTop:"25px",margin:"10px"}}>item6</div>
        <div style={{width:"100px",height:"50px",backgroundColor:"greenyellow",textAlign:"center",paddingTop:"25px",margin:"10px"}}>item7</div>
        <div style={{width:"100px",height:"50px",backgroundColor:"greenyellow",textAlign:"center",paddingTop:"25px",margin:"10px"}}>item1</div>
        <div style={{width:"100px",height:"50px",backgroundColor:"greenyellow",textAlign:"center",paddingTop:"25px",margin:"10px"}}>item8</div>

    </Carousel>

    <Carousel responsive={responsive} autoPlay infinite arrows={true} centerMode={true}>
        {array.map((ed)=>{
            return(
            <div style={{width:"100px",height:"50px",backgroundColor:"greenyellow",textAlign:"center",paddingTop:"25px",margin:"10px"}}>
                {ed}
            </div>
            )
        })}
    </Carousel>
    </div>
  )
}
