


import './App.css';

import User from "./User"
import { PureComponent,useState,useMemo } from 'react';
import {Table} from 'react-bootstrap'

function App()
{
  const [count,setCount]=useState(0)
  const [item,setItem]=useState(10)

  const multiCountMemo =useMemo(()=>{
    console.warn("Hello")
    return count *5
  },[count])

  return(
    <div className='App'>
     <h1>UseMemo Hook in React</h1>\
     <h1>Count : {count}</h1>
     <h1>Item : {item}</h1>
     <h2>{multiCountMemo}</h2>
     <button onClick={()=>setCount(count+1)}>Count</button>
     <button  onClick={()=>setItem(item*10)}>Item</button>
    </div>
  )
}

export default App;
