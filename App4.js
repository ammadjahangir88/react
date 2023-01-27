import logo from './logo.svg';
import './App.css';

import Student from './Student';
import { useState } from 'react';
function App() {
  const [data,setData]=useState(null)
  
 
  return (
    <div className="App">
    <h1>props in React</h1>
    <Student name={"Ammad"} email="ammad.jahangir@gmail.com"/>
    <Student name={"Peter"} email="Peter@gmail.com" />
    </div>
  );
}

export default App;
