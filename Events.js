import React from 'react'

function Events(){
    function printData(event){
      console.log(event);
      alert("Welcome to Events")
    }
    return(<>
    <h1>Hi I am  Event</h1>
    <button onClick={printData} value="button" name='btn'>Click Me</button>
    </>);
}

export default Events;