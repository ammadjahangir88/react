
import './App.css';


import {Table} from 'react-bootstrap'
function App()
{
  // let student=["salman","ammad","billa"];

  let students=[
    {name: "Bobby", email:"ammad@gmail.com", phone: "090078601" , address:[
      {houseNumber:"423 Shahhen Block", city:"Lahore"},
      {houseNumber:"523 Shahhen Block", city:"Lahore"},
      {houseNumber:"623 Shahhen Block", city:"Lahore"},
    ]},
    {name: "Salman", email:"ammad@gmail.com", phone: "090078602", address:[
      {houseNumber:"423 Shahhen Block", city:"Lahore"}
    ]},
    {name: "Billa", email:"ammad@gmail.com", phone: "090078603", address:[
      {houseNumber:"423 Shahhen Block", city:"Lahore"}
    ]}
  ]

  return(
    <div className='App'>
     <h1>List With Bootstrap Table</h1> 
     <Table >
      <tbody>
     <tr>
        <td>Name</td>
        <td>Email</td>
        <td>Contact</td>
        </tr>
    {
      students.map((data,i)=>
      <tr key={i}>
        <td>{data.name}</td>
        <td>{data.email}</td>
        <td>{data.phone}</td>
         <Table  >
          <tbody>
          {
             data.address.map((data1,i)=>
             <tr>
              <td>{data1.houseNumber}</td>
              <td>{data1.city}</td>
            
              </tr>
             )
          }
          </tbody>
          </Table>
        
      
        </tr>
      )
    }  
    </tbody>
    </Table>
      
      
    </div>

  )
}

export default App;
