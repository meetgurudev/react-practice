import React, { Component } from 'react';
import Person from "./Person/Person";


class Persons extends Component {

  // ! Depricated.    
  // static getDerivedStateFromProps(props, state) {
  //     console.log('[Persons.js] getDerivedStateFromProps');
  //     return state;
  // }

  // ! Depricated.    
  // componentWillReceiveProps() {
  //     console.log('[Persons.js] componentWillReceiveProps');
  // }

  shouldComponentUpdate(nextProps, nextState) {
    // Have to return true or false.
    // Add conditon and decide to update or nor
    console.log('[Persons.js] shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return { message: "Sanpshot!" };
  }

  // componentWillUpdate() {
  // this is not avaliable
  // }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot);
  }

  render() {

    console.log('[Persons.js] rendering...');

    return this.props.persons.map((person, index) => {
      return <Person
        name={person.name}
        age={person.age}
        key={person.id}
        click={() => this.props.clicked(index)}
        changed={(event) => this.props.changed(event, person.id)} />
    })
  }
}

export default Persons; 