import logo from './logo.svg';
import './App.css';

import Student from './Student';
import { useState } from 'react';
function App() {
  const [status,setStatus]=useState(true)

  return (
    <div className="App">
     {
        status ? <h1>Hello World</h1>: null
     }
     {/* <button onClick={()=>setStatus(false)}> hide</button>
     <button  onClick={()=>setStatus(true)}> show</button> */}

     <button onClick={()=>setStatus(!status)}> Toggle</button>

    </div>
  );
}

export default App;
