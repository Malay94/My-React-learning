import React, { Component } from "react";

// There are three  types of component in React
// 1. Pure Component :- Which does not render values
// 2.Control Component:-We can use handle data using state
// 3.Un-control Component:-In un conroll component we can use data without state form

class ComponentTypes extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.input = React.createRef();
  }
  handleChange = (newText) => {
    console.log(newText);
  };
  render() {
    return (
      <>
        <div className="App2">
          <div className="container">
            <input
              type="text"
              placeholder="Please write something..."
              ref={this.input}
              onChange={(event) => this.handleChange(event.target.value)}
            />
          </div>
        </div>
      </>
    );
  }
}
export default ComponentTypes;
