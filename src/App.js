import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    inputText: ''
  }

  inputChangeHandler = (event) => {
    this.setState({inputText: event.target.value});
  } 

  deleteCharHandler = (charIndex) => {
    const tmpString = this.state.inputText.split('');
    tmpString.splice(charIndex,1);
    const newText = tmpString.join('');
    this.setState({inputText: newText});

  }
  render() {
    const charList = this.state.inputText.split('').map( (c,index)=>{
      return <Char key={index} charecter = {c} clicked = {()=> this.deleteCharHandler(index)}/>;
    });
    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        
        <hr/>
        <input type='text' onChange={this.inputChangeHandler} value={this.state.inputText}/>
        <p>{this.state.inputText}</p>
        <Validation textLen={this.state.inputText.length}/>
        {charList}
      </div>
    );
  }
}

export default App;
