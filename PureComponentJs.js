import React, { PureComponent } from "react";

class PureComponentJs extends  PureComponent {
    constructor(props){
        super(props);
        this.state={
            name:"React Js",
        }
    }

    ChangeName=()=>{
        this.setState({name:"React Js"})
    }
  render() {
    console.log("First method Component render method");
    return (<>
    <h1>Pure Component</h1>
    <h2>Your name is {this.state.name}</h2>
    <button onClick={this.ChangeName}>Change name</button>
    </>);
  }
}

export default  PureComponentJs;
