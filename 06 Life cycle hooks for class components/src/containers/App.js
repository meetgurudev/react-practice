import React, { Component } from 'react';
import './App.css';

import Persons from "../Components/Persons/Persons";
import Cockpit from "../Components/Cockpit/Cockpit";
import classes from "./App.css";

class App extends Component {

  constructor(props) {
    // Exec extended componnent
    super(props);
    console.log('[App.js] constructor');
    // state variables can be used only in class
    this.state = {
      persons: [
        { id: 'ads', name: "Guru", age: 23 },
        { id: 'dafg', name: "Dev", age: 29 },
        { id: 'asdas', name: "Kittu", age: 18 }
      ],
      showPersons: false
    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] get derived state from props', props);
    return state;
  }

  // componentWillMount() {
  // 	console.log('[App.js] component will mount');
  // }

  componentDidMount() {
    console.log('[App.js] Componentn did mount');
  }

  shouldComponentUpdate(nextProps, nextSteps) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  deletePersonHandler = (personIndex) => {
    // slice w/o args simply copies the array.
    // const persons = this.state.persons.slice();
    // Or use spread op using the previous array.
    const persons = [...this.state.persons];
    // Removes one elm form Index.
    persons.splice(personIndex, 1);
    // Then update the state.
    this.setState({ persons: persons })
  }

  nameChangedHandler = (event, id) => {

    // Get the index of the entry if id matches
    const personIndex = this.state.persons.findIndex(per => {
      return per.id === id;
    });

    // Assigning the object properties to be updated person.
    const updatedPerson = { ...this.state.persons[personIndex] };

    // Assgin updated person the input value.
    updatedPerson.name = event.target.value;

    // Copy the state persons array.
    const updatedPersons = [...this.state.persons];

    // Update the copy with updated person who is at fetched index.
    updatedPersons[personIndex] = updatedPerson;

    // Then set the state with updated persons.
    this.setState({ persons: updatedPersons })

  }

  togglePersonHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }


  render() {
    console.log('[App.js] render');

    // We can have perosons var for holding the div
    let persons = null;


    if (this.state.showPersons) {
      persons = (
        <div >
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
        </div>
      );

    }

    return (

      <div className={classes.App}>
        < Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonHandler} />
        {persons}

      </div >

    );
  }
}

export default App;
