import logo from './logo.svg';
import './App.css';

import { useState,Component } from 'react';


class App extends Component{
  constructor(){
    super();
    this.state={
      data:"ammad jahangir"
    }

  }
  apple()
  {
    this.setState({
      data: "Jahangir Ahmad"
    })
  }
  render()
  {
    return (
      <div className='App'>
      <h1>{this.state.data} </h1>

      <button onClick={()=>{this.apple()}} >Update Data</button>
    </div>
    )
  }
}

export default App;
