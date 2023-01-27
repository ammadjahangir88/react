import logo from './logo.svg';
import './App.css';

import { useState } from 'react';
function App() {

  let [data,setdata]=useState(0)

  function apple()
  {
    setdata(data+1)
    console.log(data)
    // alert(data)

  }
  console.warn(data)
  return (
    <div className="App">
      <h1>{data}</h1>
    
      <button onClick={apple}>Click me</button>
    </div>
  );
}

export default App;
