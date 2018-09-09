import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      foods: [ 'steak', 'heart', 'liver', 'tri-tip' ]
    }
  }

  //// This can go here, but logically belongs in render()
  // foodsToDisplay() {
  //   return this.state.foods.map((elem,i) => {
  //     return (
  //       <h3 key={i}> { elem } </h3>
  //     )
  //   });
  // } 
  //// If it goes here, then you must modify & invoke this line within render's return: 
  // <div> { this.foodsToDisplay() } </div> 

  
  render() {
    let foodsToDisplay = this.state.foods.map((elem,i) => {
      return (
        <h3 key={i}> { elem } </h3>
      )
    }); 
    
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React-drills App-2</h2>
        </div>    
        <div> { foodsToDisplay } </div>
      </div>
    );
  }
}

export default App;
