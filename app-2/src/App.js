import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      list: ['apple', 'poorly written poetry', 'funny corners', 'random assignment']
    }
  }
  
  display(){
    let mapping = this.state.list;
    let finalMap = mapping.map( (e,i,r) => {
      return <li key={i}> {e } </li>
    })
    return finalMap
  }
  
  
  render() {
    
    
    return (
      <div className="App">

      <ul> <h2> {this.display()} </h2> </ul>
      </div>
    );
  }
}

export default App;
