import React, { useState } from 'react'
import './App.css';
import Person from './Person/Person'

const App = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value'
  })

  const [otherState, setOtherState] = useState({
    otherState: 'some other value'
  })

  const switchNameHandler = () => {
    // DON'T DO THIS this.state.persons[0].name = 'Maximilian'
    setPersonsState({
      ...personsState,
      persons: [
        { name: 'Maximilian', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 26 }
      ],
    })
  }

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
      <Person name={personsState.persons[2].name} age={personsState.persons[2].name}>
        My Hobbies: Racing
      </Person>
    </div>
  )

    // return React.createElement(
    //   'div',
    //   { className: 'App' },
    //   React.createElement('h1', null, 'Hi, I\'m a React App')
    // )
}

export default App;
