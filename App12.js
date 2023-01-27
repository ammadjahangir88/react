import React, { Component } from 'react'

export default class App10 extends Component {
    constructor()
    {
        super()
        
       
    }
  render() {
    console.warn(this.props)
    return (
      <div>User Component {this.props.data}</div>
    )
  }
}
