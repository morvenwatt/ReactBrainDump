import React from 'react';
import './Person.css';


const person = (props) => {
  return (
  <div className='Person'>
    <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
    <p>{props.children}</p>
    <input type='text' onChange={props.changed} value={props.name} />
  </div>
  )
};
//don't use onClick with non-interactive elements (i.e p, h1, etc)


export default person;
