import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      userInput: ''
    }
    // bind
  } 
  // called on this, ergo doesnt need binding
  handleChange = (val) => {
    this.setState({userInput: val})
  }
  handleAddTask = () => {
    let { list, userInput } = this.state; 
    this.setState({
      list: [ ...list, userInput ],
      userInput: ''
    })
  }

  render() {
    let list = this.state.list.map((elem,i) => {
      // return ( <p key={i}>{elem}</p> )
      return ( <Todo key={i} tasks={elem}/> )
    })

    return (
      <div className="App">
        <h3>My to-do list: </h3>
        <input type="text" placeholder="Enter task ..." 
        onChange={(e)=>this.handleChange(e.target.value)} /> 
        <button onClick={this.handleAddTask}>Add</button>
        { list }
      </div>
      
    )
  }
}