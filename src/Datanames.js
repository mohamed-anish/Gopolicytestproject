import React, { useEffect, useState } from 'react'

export default function Datanames() {

  const [data,setData] = useState([])
  console.log(data)

  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/users`).then(res=> res.json()).then(data=>setData(data));

  },[])

  // console.log(fetchdata)
  return (
    <div style={{display:"block",width:"100%"}}>Datanames
      {data.map((t)=>(
        <tr><td style={{paddingLeft:"100px"}}>{t.id}</td>
            <td style={{paddingLeft:"100px"}}>{t.name}</td>
            <td style={{paddingLeft:"100px"}}>{t.address.zipcode}</td>
        </tr>
        

      ))}
    </div>
  )
}
