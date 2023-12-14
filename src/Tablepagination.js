import React, { useState } from 'react'
import Popupshow from './Popupshow';

export default function Tablepagination() {

    const data = [
        {id:"1",name:"Mohamed Anish",age:"00",cnumber:"12345"},
        {id:"2",name:"Mohamed Anish",age:"00",cnumber:"12345"},
        {id:"3",name:"Mohamed Anish",age:"00",cnumber:"12345"},
        {id:"4",name:"Mohamed Anish",age:"00",cnumber:"12345"},
        {id:"5",name:"Mohamed Anish",age:"00",cnumber:"12345"},
        {id:"6",name:"Mohamed Anish",age:"00",cnumber:"12345"},
        {id:"7",name:"Mohamed Anish",age:"00",cnumber:"12345"},
        {id:"8",name:"Mohamed Anish",age:"00",cnumber:"12345"},
        {id:"9",name:"Mohamed Anish",age:"00",cnumber:"12345"},
        {id:"10",name:"Mohamed Anish",age:"00",cnumber:"12345"},
        {id:"11",name:"Mohamed Anish",age:"00",cnumber:"12345"},
        {id:"12",name:"Mohamed Anish",age:"00",cnumber:"12345"},
        {id:"13",name:"Mohamed Anish",age:"00",cnumber:"12345"},
        {id:"14",name:"Mohamed Anish",age:"00",cnumber:"12345"},
        {id:"15",name:"Mohamed Anish",age:"00",cnumber:"12345"},
        {id:"16",name:"Mohamed Anish",age:"00",cnumber:"12345"},
        {id:"17",name:"Mohamed Anish",age:"00",cnumber:"12345"},
        {id:"18",name:"Mohamed Anish",age:"00",cnumber:"12345"},
        {id:"19",name:"Mohamed Anish",age:"00",cnumber:"12345"},
        {id:"20",name:"Mohamed Anish",age:"00",cnumber:"12345"},
        {id:"21",name:"Mohamed Anish",age:"00",cnumber:"12345"},
        {id:"22",name:"Mohamed Anish",age:"00",cnumber:"12345"},
        {id:"23",name:"Mohamed Anish",age:"00",cnumber:"12345"},
        {id:"24",name:"Mohamed Anish",age:"00",cnumber:"12345"},
        {id:"25",name:"Mohamed Anish",age:"00",cnumber:"12345"},
        {id:"26",name:"Mohamed Anish",age:"00",cnumber:"12345"},



    ]

    const [currentpage,setCurrentpage] = useState(1);
    const recordsperpage = 5;
    const lastindex = recordsperpage * currentpage;
    const firstindex = lastindex - recordsperpage;
    const records = data.slice(firstindex,lastindex)
    const npage = Math.ceil(data.length/recordsperpage);
    const numbers = [...Array(npage + 1).keys()].slice(1);

    const [show,setShow] = useState(false)

    const handleCprevoius =()=>{
        if(currentpage !== 1){
            setCurrentpage(currentpage - 1)

        }
    }

    const currentPageChange= (id) => {
            setCurrentpage(id)
        // }
        //  console.log(currentpage) 
        console.log(id)
    }

    const handleCnext = ()=>{
        if(currentpage !== npage){
            setCurrentpage(currentpage + 1)

        }
    }

  return (
    <div style={{textAlign:"center",backgroundColor:"wheat",height:"50px"}}>
        <h1>Tablepagination</h1>
        <div>
            <table className='table'>
                <thead>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>DOB</th>
                    <th>CONTACT NUMBER</th>
                </thead>
                <tbody>
                    {records.map((e,index)=>(
                                            <tr>
                                            <td>{e.id}</td>
                                            <td>{e.name}</td>
                                            <td>{e.age}</td>
                                            <td>{e.cnumber}</td>
                                        </tr>
                    
                    ))}
                </tbody>
            </table>
         

            <ul style={{listStyle:"none",display:"flex",justifyContent:"space-around"}}>
                <li onClick={handleCprevoius} >Previous</li>
                {numbers.map((n,i)=>{
                    return(
                        <>
                        {/* style={{backgroundColor:currentpage===n? "white": ""}} */}
                    <li key={i} onClick={()=>currentPageChange(n)} className={currentpage===n ? "white" : "hide"} >{n}</li>
                    </>
                    )}
                )}
                
                <li onClick={handleCnext}>next</li>
            </ul>

            <p>{}</p>

            <div>
                <button style={{width:"150px",height:"50px",backgroundColor:"orange",borderRadius:"10px"}} onClick={()=>{setShow(true)}}>Pop Button</button>
            </div>

            {show && <Popupshow close ={setShow}/>}
        </div>
    </div>
  )
}
