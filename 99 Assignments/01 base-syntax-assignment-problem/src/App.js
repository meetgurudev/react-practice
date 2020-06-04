import React, { Component } from 'react';
import './App.css';

import UserOutput from "./UserOutput/UserOutput";
import UserInput from "./UserInput/UserInput";
import userInput from './UserInput/UserInput';

class App extends Component {

  // add the state for app class
  state = { username: ["Gurudev", "Guru", "Dev"] }

  // change the username order method.
  changeOrder = () => {
    this.setState({
      username: ["Guru", "Dev", "Gurudev"]
    })
  }

  // change the username order method.
  renameUser = (event) => {

    let currentname = this.state.username[0];
    let newName = currentname + event.target.value;

    this.setState({
      username: ["Gurudev", "Guru", newName]
    })
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <ol>
          <li><b>[DONE]</b> Create TWO new components: UserInput and UserOutput</li>
          <li><b>[DONE]</b> UserInput should hold an input element, UserOutput two paragraphs</li>
          <li><b>[DONE]</b> Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
          <li><b>[DONE]</b> Pass a username (of your choice) to UserOutput via props and display it there</li>
          <li><b>[DONE]</b> Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
          <li><b>[DONE]</b> Add a method to manipulate the state (=> an event-handler method)</li>
          <li><b>[DONE]</b> Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li><b>[DONE]</b>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol>
        <br></br>
        <br></br>

        <UserInput renameUser={this.renameUser} name={this.state.username[0]} />

        <button onClick={this.changeOrder}>Reverse order</button>

        <hr></hr>
        <UserOutput name={this.state.username[2]} />
        <hr></hr>
        <UserOutput name={this.state.username[1]} />
        <hr></hr>
        <UserOutput name={this.state.username[0]} />
        <hr></hr>

      </div>
    );
  }
}

export default App;
