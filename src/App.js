import React from "react";
import { findRenderedComponentWithType } from "react-dom/test-utils";
import Api2 from "./Api2";
import "./App.css";

export default function App(){

  return(<>
  <Api2/>
  </>)
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myData : [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((response) => {
        console.table(response);
        this.setState ({myData : response});
      });
  }

  render() {
    return (
      <>
        <h1>API</h1>
        {this.state.myData.map(values =>
          <li>Name : {values.name} || Email : {values.email}</li>)}
      </>
    );
  }
}


