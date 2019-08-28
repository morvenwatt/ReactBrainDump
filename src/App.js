import React, { Component } from 'react';
import Person from './composition/Person';
import './App.css';
import Messages from './Messages';
import Counter from './stateWithReact/Counter';
import TheDate from './stateWithReact/TheDate';
//import Tooltip from './composition/Tooltip';

import HelloWorld from './stateWithReact/StateDrills/HelloWorld';
import Bomb from './stateWithReact/StateDrills/Bomb';
import RouletteGun from './stateWithReact/StateDrills/RouletteGun';


class App extends Component {
  state = {
    persons: [
      { id: '13', name: 'Morven', age: 31 },
      { id: '3', name: 'Chad', age: 31 },
      { id: '8', name: 'Isla', age: 0.8 }
    ],
    showPersons: true
  };


  /*switchNameHandler = (newName) => {
     //console.log('was clicked!');
     this.setState({
       persons: [
         { name: 'Morven', age: 31},
         { name: 'Chad', age: 31},
         { name:'Isla Rose', age: 0.8}
       ]
     })
   }*/

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {

    //inline styling example. Yuck. 
    const style = {
      backgroundColor: 'blueviolet',
      border: '1px solid black',
      width: '150px',
      height: '60px',
      fontSize: '20px',
      margin: 'auto',
      marginBottom: '10px',
      cursor: 'pointer'
    };

    let persons = null;
    //let btnClass = '';

    if (this.state.showPersons) {
    
      persons = (
        <div >
          {this.state.persons.map((person, index) => {
            return <Person
              click={this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} /> //will often have ID if info comes from databse
          })}
        </div>
      );
    }
      //btnClass = classes.Red;
      
    //   { this.state.showPersons ? resultDiv : null
    return (
      <div className='app'>
        <h1>REACT</h1>
        <p>Check it out!</p>

        <TheDate />
        <Counter count={123}/>

        <Messages name="Messages" unread={0} />
        <Messages name="Notifications" unread={10} />
        
        <HelloWorld />
        <Bomb />
        <RouletteGun />

        <button className = 'Red'
          style={style}
          onClick={() => this.togglePersonsHandler()}>
          Toggle People
        </button>
        {persons}
      </div>


    );
  }
}

export default App;
