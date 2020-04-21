import React, { useState } from "react";
import "./App.css";
import Person from './Person/Person';

const App = props => {
    const [personsState,setPersonState] = useState({
            persons: [
                {
                    name: "ameer", age: 30, hobbies: ['pics', 'flicks', 'chicks']
                }
            ]
        }
    )

    const changeNameClickHandler = () =>{
            console.log('click handler');
            setPersonState({
                persons:[
                    {name:"ameer nagvenkar", age:30, hobbies:[
                        'pics','flicks'
                    ]}
                ]      
            })
}
        return (
            <div className="App" >
                <h1> FIrst Page</h1>
                <p>checking if this works</p>
                <button onClick={changeNameClickHandler}>change something</button>
                <Person name={personsState.persons[0].name} age={personsState.persons[0].age} hobbies={personsState.persons[0].hobbies}>My Hobbies:</Person>
            </div>
        );
    
}



export default App;


