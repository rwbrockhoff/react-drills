import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      value: ''
    }
  }

renderValue(e){
  this.setState({
    value: e
  })
}
  
  render() {
    return (
      <div className="App">
        <input onChange={(e) => this.renderValue(e.target.value)}/>
        <h2> {this.state.value} </h2>
      </div>
    );
  }
}

export default App;
