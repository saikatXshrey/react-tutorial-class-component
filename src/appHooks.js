import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person.js'


// hooks in use
const app = props => {

    const [personsState, setPersonsState] = useState(
        {
            persons: [
                { name: 'Max', age: 28 },
                { name: 'Manu', age: 29 },
                { name: 'Eminem', age: 50 }
            ]
        }
    );

    const [otherState, setOtherState] = useState('some other value');

    console.log(personsState, otherState);

    const switchNameHandler = () => {
        // console.log('Was Clicked!');
        setPersonsState({
            persons: [
                { name: 'Maximillian', age: 28 },
                { name: 'Manu', age: 29 },
                { name: 'Marshal Mathers', age: 50 }
            ]
        })
    };

    return (
        <div className="App">
            <h1>Hi, I'm a React App</h1>
            <p>This is working!!</p>
            <button onClick={switchNameHandler}>Click This!</button>

            <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />

            <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My hobies:Games</Person>

            <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
        </div>
    );
    // return React.createElement('div', {className: 'App' }, React.createElement('h1', null, "Hi im a React App"));
}

export default app;