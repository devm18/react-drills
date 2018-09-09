import React, { Component } from 'react';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    }
    // this.handleLogin = this.handleLogin.bind(this);
    // this.handleUsername = this.handleUsername.bind(this);
    // this.handlePassword = this.handlePassword.bind(this);
    // WHY ONLY handleLogin AND NOT handleUsername & handlePassword TOO? 

  }

  handleUsername(val) { 
    this.setState({username: val })
  }
  handlePassword(val) { 
    this.setState({password: val })
  }
  handleLogin() { 
    // NOT this.alert() bc alert is a method of the window
    // BUT handleLogin still needs binding to this object. 
    alert(`Username: ${this.state.username}\nPassword: ${this.state.password}`)
  }

  render() {
    return (
      <div> 
        <input type='text' placeholder='username...' 
        onChange={ (e) => this.handleUsername(e.target.value) } /> 
        <input type='password' placeholder='password...'
        onChange={ (e) => this.handlePassword(e.target.value) } />
        <button onClick={ () => this.handleLogin() }> Login </button>
      </div>
    )
  }
}