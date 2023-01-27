import React, { Component } from 'react'

export default class App10 extends Component {
    constructor()
    {
        super()
        this.state={
            name:'ammad'
        }
        
       
    }
  render() {
   console.warn(this.state.name)
    return (
      <div>
      <h1>User Component {this.state.name} </h1>
      <button onClick={()=>this.setState({name:"Muhammad Ammad Jahangir"})}>Update Name</button>
      </div>
    
    )
  }
}
