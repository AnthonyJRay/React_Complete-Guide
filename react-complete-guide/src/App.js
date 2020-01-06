import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Anthony', age: 30 },
      { name: 'Debra', age: 29 },
      { name: 'Vincent', age: 1 },
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 }
    ]
  });

  const switchNameHandler = () => {
    // console.log('Was Clicked!');
    setPersonsState({
      persons: [
        { name: 'Anthony', age: 50 },
        { name: 'Debra', age: 25 },
        { name: 'Vincent', age: 6 },
        { name: 'Max', age: 100 },
        { name: 'Manu', age: 23 }
      ]
    });
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React App.</h1>
      <p> This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
      <Person name={personsState.persons[3].name} age={personsState.persons[3].age} />
      <Person name={personsState.persons[4].name} age={personsState.persons[4].age}>My Hobbies: Racing</Person>
    </div>
  );

}
export default App;