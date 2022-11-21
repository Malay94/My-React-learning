import React from 'react';
import './App.css';

class App extends React.Component{
  render(){
return (
    <>
    <h1>This is a props</h1>
    {this.props.username}
    <br/>
    {this.props.password}
    </>
  );
}
}

export default App;
