import logo from './logo.svg';
import './App.css';
import App9 from './App9';
import Student from './Student';
import { useState } from 'react';
function App() {
 
  const [name,setName]=useState("")
  const [tnc,setTnc]=useState(false)
  const [interest,setInterest]=useState("")
  function getData()
  {
      alert("Hello World")
  }
  return (
    <div className="App">
    <h1>Hello World</h1>
      <App9 data={getData}/>
  
     

    </div>
  );
}

export default App;
