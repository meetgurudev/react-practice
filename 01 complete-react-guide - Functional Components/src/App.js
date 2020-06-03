import React, { useState, useReducer } from 'react';
import './App.css';
import Person from "./Person/Person";

const app = props => {

  const [personsState, setPersonState] = useState({
    persons: [
      { name: "Guru", age: 23 },
      { name: "Dev", age: 29 },
      { name: "Kittu", age: 18 }
    ],
  });

  const [otherState, setOtherState] = useState('Some other state data');

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    // DON'T DO THIS
    // this.state.persons[0].name = "Gurudev";

    //RATHER DO IT THIS WAY
    setPersonState({
      persons: [
        { name: "Guru Dev", age: 23 },
        { name: "Dev", age: 29 },
        { name: "Kittu", age: 28 }
      ]
    })

    setOtherState('Some diffrent sate data')
  }

  return (

    // class here cant be used, it is a reserved word in JS "class", className attr to add CSS class.
    // Always wrap all elements in to one single root element you return.
    <div className="App">

      {/* Can be basic html tag here */}
      <h1>Hi, I'm a React App</h1>
      <p>This is really working</p>

      {/* Don't add paranthesis, rather only reference to the function */}
      <button onClick={switchNameHandler} >Switch Name</button>

      {/* Imported components can be appended like this */}

      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>

  );

}

export default app;