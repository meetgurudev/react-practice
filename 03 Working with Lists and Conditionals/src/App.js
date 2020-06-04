import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {

	// state variables can be used only in class
	state = {
		persons: [
			{ id: 'ads', name: "Guru", age: 23 },
			{ id: 'dafg', name: "Dev", age: 29 },
			{ id: 'asdas', name: "Kittu", age: 18 }
		],
		showPersons: false
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

		const btnStyle = {
			backgroundColor: 'white',
			font: 'inherit',
			boder: '1px solid blue',
			padding: '8px',
			curson: 'pointer'
		}

		// We can have perosons var for holding the div
		let persons = null;
		if (this.state.showPersons) {
			persons = (
				<div >
					{this.state.persons.map((person, index) => {
						return <Person
							name={person.name}
							age={person.age}
							click={() => this.deletePersonHandler(index)}
							key={person.id}
							changed={event => this.nameChangedHandler(event, person.id)} />
					})}
				</div>
			);
		}

		return (

			<div className="App">

				<h1>Hi, I'm a React App</h1>
				<p>This is really working</p>

				<button style={btnStyle}
					onClick={() => this.togglePersonHandler()} >Switch Name </button>

				{persons}

			</div>

		);
	}
}

export default App;
