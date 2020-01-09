import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

// const App = props => {
//   const [this.state, setthis.state] = useState({
//     persons: [
//       { name: 'Anthony', age: 30 },
//       { name: 'Debra', age: 29 },
//       { name: 'Vincent', age: 1 },
//       { name: 'Max', age: 28 },
//       { name: 'Manu', age: 29 }
//     ]
//   });

class App extends Component {
  state = {
    persons: [
      { name: 'Anthony', age: 30 },
      { name: 'Debra', age: 29 },
      { name: 'Vincent', age: 1 },
      { name: 'Max', age: 26 },
      { name: 'Manu', age: 21 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    console.log('Was clicked!');
    this.setState({
      persons: [
        { name: newName, age: 50 },
        { name: 'Debra', age: 25 },
        { name: 'Vincent', age: 6 },
        { name: 'Max', age: 100 },
        { name: 'Manu', age: 23 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Anthony', age: 50 },
        { name: event.target.value, age: 25 },
        { name: 'Vincent', age: 6 },
        { name: 'Max', age: 100 },
        { name: 'Manu', age: 23 }
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App.</h1>
        <p> This is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {this.state.showPersons === true ?
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age} />
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              changed={this.nameChangedHandler} />
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age} />
            <Person
              name={this.state.persons[3].name}
              age={this.state.persons[3].age} />
            <Person
              name={this.state.persons[4].name}
              age={this.state.persons[4].age}
              clickMe={this.switchNameHandler.bind(this, "Tony!")}>My Hobbies: Racing</Person>
          </div> : null
        }
      </div>
    );
  }
}
export default App;