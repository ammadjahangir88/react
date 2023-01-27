import React from 'react'

export default function User(props) {
   let data="Ammad Jahangir"
  return (
    <div>

        <h1>Data To be Displayed</h1>

        <button onClick={()=>props.alert(data)}>Call Parent Function</button>
        
   
        
        
   </div>
  )
}
