import React, { Component } from 'react'
import NavBar from './Components/NavBar'
import News from './Components/News'

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <News></News>
    
       
      </div>
    )
  }
}