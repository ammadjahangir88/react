
import './App.css';

import User from "./User"
import { PureComponent,useState,useMemo ,useRef } from 'react';
import Abc from "./A_forwardRef"
import {Table} from 'react-bootstrap'

function App()
{
  let inputRef=useRef(null)
  function getVal()
  {
    inputRef.current.value="Salman Bahsier";
    
  }
  return(
    <div className='App'>
     <h1>UseRef Hook in React</h1>

     <Abc ref={inputRef}/>

     <button onClick={getVal}>Get Value</button>
    
    </div>
  )
}

export default App;
