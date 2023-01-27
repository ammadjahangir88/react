import logo from './logo.svg';
import './App.css';

import Student from './Student';
import { useState } from 'react';
function App() {
  function getFormData(e)
  {
    console.log(name,tnc,interest)
    e.preventDefault()
    // alert("Form Submitted")

  }
  const [name,setName]=useState("")
  const [tnc,setTnc]=useState(false)
  const [interest,setInterest]=useState("")
  
  return (
    <div className="App">
      <h1>Handle Form in React</h1>
      <form onSubmit={getFormData} >
        <input type="text" placeholder='enter name'onChange={(e)=>setName(e.target.value)} /> <br /> <br />
        <select onChange={(e)=>setInterest(e.target.value)}>
          <option>Select Options</option>
          <option>Marvel</option>
          <option>Dc</option>
        </select>
        <br /><br />

        <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)} />  <span> Accept term and condition</span> 
        <br /><br />
        <button type="submit">Submit</button>
      </form>
     

    </div>
  );
}

export default App;
