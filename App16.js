
import './App.css';

import User1 from "./User"
import {Table} from 'react-bootstrap'
function App()
{
  const users=[
    {
      name:"Ammad", email:"ammad@gmail.com", contact:"111"
    },
    {
      name:"Burhan", email:"burhan@gmail.com", contact:"222"
    },
    {
      name:"Peter", email:"peter@gmail.com", contact:"222"
    }

  ]
  return(
    <div className='App'>
     <h1>Reuse Component With List</h1> 

     {
      users.map((data)=>
      <h1><User data={data} /></h1>
      )
     }
 
      
      
    </div>

  )
}

export default App;
