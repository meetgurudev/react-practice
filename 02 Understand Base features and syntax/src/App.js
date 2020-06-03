import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {

  // state variables can be used only in class
  state = {
    persons: [
      { name: "Guru", age: 23 },
      { name: "Dev", age: 29 },
      { name: "Kittu", age: 18 }
    ]
  }

  swithNameHandler = (newName) => {
    // DON'T DO THIS
    // this.state.persons[0].name = "Gurudev";

    //RATHER DO IT THIS WAY
    this.setState({
      persons: [
        { name: newName, age: 23 },
        { name: "Dev", age: 29 },
        { name: "Kittu", age: 28 }
      ]
    })
  }

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: "Dev", age: 29 },
        { name: event.target.value, age: 23 },
        { name: "Kittu", age: 28 }
      ]
    })
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      boder: '1px solid blue',
      padding: '8px',
      curson: 'pointer'
    }

    return (

      // class here cant be used, it is a reserved word in JS "class", className attr to add CSS class.
      // Always wrap all elements in to one single root element you return.
      <div className="App">

        {/* Can be basic html tag here */}
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>

        {/* Don't add paranthesis, rather only reference to the function */}
        <button style={style}
          onClick={() => this.swithNameHandler("Gurururuururdev")} >
          Switch Name
        </button>

        {/* Imported components can be appended like this */}

        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.swithNameHandler.bind(this, "GuruDev")} />

        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.swithNameHandler.bind(this, "GURUDEV")}
          changed={this.nameChangedHandler} />

        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          click={this.swithNameHandler} />

      </div>

    );

    // The above code in similar to below...
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Does this work?'));
  }
}

export default App;
