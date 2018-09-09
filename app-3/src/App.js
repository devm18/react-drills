import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      foods: [ 'steak', 'heart', 'liver', 'tri-tip', 'fries', 'mashed potatoes', 'salad' ],
      userInput: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(val) {
    this.setState({userInput: val})
  }

  render() {
    let foodsToDisplay = this.state.foods
    .filter(elem => elem.includes(this.state.userInput))
    .map((e,i) => {
      return <h3 key={i}> {e} </h3>
    })

    return (
      <div className='App'>
        <input type="text" 
        onChange={(e) => this.handleChange(e.target.value)} /> 
        { foodsToDisplay }
      </div>
    )
  }

}