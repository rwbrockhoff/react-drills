import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      ourList: ['milk', 'cheese', 'yogurt', 'kombucha'],
      currentInput: '',
      filteredOutput: ['milk', 'cheese', 'yogurt', 'kombucha']
    }
  }

  updateValue(e){
    this.setState({
      currentInput: e
    })

    let filteredArray = this.state.ourList.filter((val, i) => {
      return val.startsWith(e)
    })

    this.setState({
      filteredOutput: filteredArray
    })
    
    }

    makePretty(){
      let tempArr = this.state.filteredOutput;
      let answer = tempArr.map( (e, i) => {
       return <li key={i}> {e}  </li>
       
      })
      return answer;
    }

  
  
  render() {
    return (
      <div className="App">
        <input onChange={ (e)=> this.updateValue(e.target.value) } />
        <h4> {this.makePretty()}</h4>
      </div>
    );
  }
}

export default App;
