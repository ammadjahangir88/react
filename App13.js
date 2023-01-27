import logo from './logo.svg';
import './App.css';
import {Component} from 'react'
class App extends Component{
 constructor()
 {
   super()
   console.warn("Constructor")
   this.state={
    data:0
   }
 }
 componentDidMount()
 {
  console.warn("Component Did Mount")
 }
 


 componentDidUpdate(prevProps,PreState)
 {
  console.warn("Component Did Update",PreState)
  if (PreState.data == this.state.data)
  {
    alert("Data Same  Warning")
  }

 }

  render()
  {
    console.warn("Render")
    return(
      <div className='App'>
        <h1>Component Did Mount {this.state.data}</h1>
        <button onClick={()=>this.setState({data: 1})}>On Update Call</button>
      </div>
    )
  }
}



export default App;
