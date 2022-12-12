import React from 'react'
import {useState} from 'react';

export default function Hook (){
  const[color,setColor]= React.useState('red');

  return (
    <>
      <h1>Hooks</h1>
      <h2>color is {color}.</h2>
      <button onClick={()=> setColor('Yellow')}> Click me to change color</button>
    </>
  )
}
