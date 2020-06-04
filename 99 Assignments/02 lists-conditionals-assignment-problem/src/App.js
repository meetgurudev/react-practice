import React, { Component } from 'react';
import './App.css';

import ValidationComponent from "./ValidationComponent/ValidationComponent";
import Char from './Char/Char';

class App extends Component {

  // State of the component
  state = {
    textInput: ""
  };


  inputChangeHandler = (event) => {
    // Get the input value here.
    let inputString = event.target.value;
    // Set the updated state.
    this.setState({ textInput: inputString });
  }

  deleteCharHandler = index => {
    // Convert the string to array.
    const text = this.state.textInput.split('');
    // Remove char at the index.
    text.splice(index, 1);
    // Convert back the array into string.
    const updatedText = text.join('');
    // then set the state with updated text.
    this.setState({ textInput: updatedText });
  }

  render() {

    const listStyle = {
      fontSize: '12px',
      textAlign: 'center'
    };

    const charList = this.state.textInput.split('').map((char, index) => {
      return <Char
        character={char}
        key={index}
        clicked={this.deleteCharHandler.bind(this, index)} />
    })

    return (
      <div className="App">
        <ol style={listStyle}>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>

        <hr />

        <input
          type='text'
          onChange={this.inputChangeHandler}
          value={this.state.textInput} />

        <p>{this.state.textInput}</p>

        <ValidationComponent inputLength={this.state.textInput.length} />
        {charList}
      </div >
    );
  }
}

export default App;
