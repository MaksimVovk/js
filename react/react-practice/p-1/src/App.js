import React, { Component } from 'react'
import './App.css'

import UserInput from './components/UserInut'
import UserOutput from './components/UserOutput'

class App extends Component {
  state = {
    name: 'Max',
    text: 'Hi! I`am'
  }

  handleUserInput = props => {
    this.setState({
      ...this.state,
      name: props.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <UserInput
          placeholder="user input"
          name={this.state.name}
          changed={this.handleUserInput}
        />
        <UserOutput
          name={this.state.name}
          text={this.state.text}
        />
        <UserOutput
          name={this.state.name}
          text={this.state.text}
        />
      </div>
    );
  }
}

export default App;
