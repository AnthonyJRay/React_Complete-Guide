import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person';
import Validator from './Validation/Validation';


//  STATE
class App extends Component {
  state = {
    persons: [
      { id: '0', name: 'Anthony', age: 30 },
      { id: '1', name: 'Debra', age: 29 },
      { id: '2', name: 'Vincent', age: 1 },
      { id: '3', name: 'Max', age: 26 },
      { id: '4', name: 'Manu', age: 21 }
    ],
    otherState: 'some other value',
    showPersons: false,
    stringState: "",
    inputLength: ""
  }


  //  SWITCH NAME
  // switchNameHandler = (newName) => {
  //   console.log('Was clicked!');
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 50 },
  //       { name: 'Debra', age: 25 },
  //       { name: 'Vincent', age: 6 },
  //       { name: 'Max', age: 100 },
  //       { name: 'Manu', age: 23 }
  //     ]
  //   })
  // }


  //  NAME CHANGE
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons })
  }


  //  DELETE PERSON
  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }

  // TOGGLE PERSON
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  // Character Styles
  charBoxStyle = {
    display: 'inline-block',
    padding: '16px',
    textAlign: 'center',
    margin: '16px',
    border: '1px solid black',
    backgroundColor: 'lightblue'
  }

  // Delete Char Handler

  deleteCharHandler = () => {
    const charIndex = this.state.stringState;
    charIndex.splice(charIndex, 1);
    this.setState({ charIndex: charIndex })
  }

  // inputChangeHandler
  inputChangeHandler = (event) => {
    const inputState = event.target.value;
    const inputArr = inputState.split("").map((char) => {
      return <span
        style={this.charBoxStyle}
        onClick={this.deleteCharHandler}> {char} </span>
    });
    this.setState(
      {
        stringState: inputArr,
        inputLength: inputArr.length
      })
  }


  //  RENDER
  render() {

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    const inputStyle = {
      marginTop: '350px'
    }


    // CONDITIONALS
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}
            />
          })}
        </div>
      );

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    const classes = []
    if (this.state.persons.length <= 2) {
      classes.push('red'); // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold'); // class = ['red', 'bold']
    }

    // JSX / COMPONENTS

    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi, I'm a React App.</h1>
          <p className={classes.join(' ')}> This is really working!</p>
          <button
            style={style}
            onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
          <hr />
          <input type="text"
            onChange={this.inputChangeHandler}
            value={this.props.stringState}
            style={inputStyle}
          />
          <div>
            {this.state.stringState}
          </div>
          <Validator
            inputLength={this.state.stringState.length} />
        </div>
      </StyleRoot>
    );
  }
}
export default Radium(App);