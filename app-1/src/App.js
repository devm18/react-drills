import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super(); 
    this.state = { 
      userInput: ''  
    }
  }

  changeHandler = (val) => {
    this.setState({ userInput: val })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to HELL </h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <input className="input" type='text'
        placeholder="enter text here..." 
        onChange={(e) => this.changeHandler(e.target.value) }
        ></input>
        <p className="output"> { this.state.userInput } </p>
      </div>
    );
  }
}

export default App;
