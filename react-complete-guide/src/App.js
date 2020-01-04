import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App.</h1>
        <p> This is really working!</p>
        <Person name="Anthony" age="30" />
        <Person name="Debra" age="29" />
        <Person name="Vincent" age="1" />
        <Person name="Max" age="28" />
        <Person name="Manu" age="29">My Hobbies: Racing</Person>
      </div>
    );

    // return React.createElement(
    //   'div',
    //   { className: 'App' },
    //   React.createElement(
    //     'h1',
    //     null,
    //     'Hi, I\'m a React App!'
    //   )
    // );

  }
}

export default App;
