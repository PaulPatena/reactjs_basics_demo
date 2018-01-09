import React, { Component } from 'react';

import './App.css';
import logo from './static/paul_logo_1440.png'
import UserInput from './PaulsComponents/UserInput'
import UserOutput from './PaulsComponents/UserOutput'
import MyButton from './PaulsComponents/MyButton'

class App extends Component {
  state = {
    name: "Paul Michael"
  };

  inputChangedHandler = (event) => {
    this.setState({name: event.target.value})
  }

  resetNameHandler = () => {
    this.setState({name: "Paul Michael"})
  }

  render() {
    
    return (
      <div className="App">
        <img src={logo} width="400px" alt=""/>
        <UserInput inputChanged={this.inputChangedHandler} name={this.state.name}/>
        <UserOutput name={this.state.name}/>
        <MyButton click={this.resetNameHandler}/>
      </div>
    );
  }
}

export default App;
