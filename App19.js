
import './App.css';

import User from "./User"
import { PureComponent,useState,useMemo ,useRef } from 'react';
import {Table} from 'react-bootstrap'

function App()
{
  let inputRef=useRef(null)
  function getVal()
  {
    inputRef.current.value="Salman Bahsier";
    inputRef.current.focus()
    inputRef.current.style.display="none"
  }
  return(
    <div className='App'>
     <h1>UseRef Hook in React</h1>

     <input type="text" ref={inputRef} />

     <button onClick={getVal}>Get Value</button>
    
    </div>
  )
}

export default App;
