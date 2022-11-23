import React from "react";
// import About from "./About";
// import Contact from "./Contact";
// import Home from "./Home";
// import Error from "./Error";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// function App() {
//   return (
//     <>
//       <Router>
//         <Link to="/Home">Home  |</Link>
//         <Link to="/About">About |</Link>
//         <Link to="/Contact">Contact </Link>
//         <Routes>
//           <Route path="/Home" element={<Home />} />
//           <Route path="/About" element={<About />} />
//           <Route path="/Contact" element={<Contact />} />
//           <Route path="*" element={<Error/>} />
//         </Routes>
//       </Router>
//     </>
//   );
// }

// class App extends React.Component{
//   constructor(props){
//     super(props);
//     this.state={
//       myValue:"Raj Pandya" ,
//       myAge:25

//     };
//   }
//   render(){
//     return(<>
//     State Value is {this.state.myValue}
//     <br/>
//     My Age is {this.state.myAge}
//     </>);
//   }
// }

// class App extends React.Component{
//   constructor(props){
//     super(props);
//     this.state={ myValue:"Name"}
//   }
//   btnClick1(){
//   this.setState({myValue:'Raj'})
//   }
//   btnClick2(){
//     this.setState({myValue:'Malay'})
//     }
//     render(){
//       return(
//         <>
//         Your name is {this.state.myValue}
//         <br/>
//         <input type="button" onClick={this.btnClick1.bind(this)} value="Get Name"/>
//         <input type="button" onClick={this.btnClick2.bind(this)} value="Get SecondName"/>
//         </>
//       )
//     }
// }

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       myvalue: 0,
//     };
//   }
//   btnClick() {
//     this.setState({
//       myvalue: this.state.myvalue + 1,
//     });
//   }
//   btnClick1() {
//     this.setState({
//       myvalue: this.state.myvalue - 1,
//     });
//   }
//   render() {
//     return (
//       <div>
//         Counter Value is : {this.state.myvalue}
//         <br />
//         <input
//           type="button"
//           onClick={this.btnClick.bind(this)}
//           value="Increase"
//         />
//         <input
//           type="button"
//           onClick={this.btnClick1.bind(this)}
//           value="Dicrease"
//         />
//       </div>
//     );
//   }
// }

// class App extends React.Component{
//   constructor(props){
//     super(props);
//     this.state={}
//   }
//   //Set state
//   setData(){
//   localStorage.setItem("myColor",'red');
//   alert("State is set");
// }

//   //Get state
//   getData() {
//   let myItem = localStorage.getItem("myColor");
//     alert("Color is " + myItem);

//   if(myItem){
//       alert("Color is " + myItem);
//   }
//   else
//   {
//     alert("Please Enter color");
//   }
// }

// //Remove Data
// removeData(){
//   localStorage.removeItem('myColor');
//   alert("Remove Data");
// }
// render(){
//   return(<>
//   <h1>local Storage Data</h1>
//   <button onClick={this.setData.bind(this)}>Set Data</button>
//   <button onClick={this.getData.bind(this)}>Get Data</button>
//   <button onClick={this.removeData.bind(this)}>Remove Data</button>
//   </>)
// }
// }

function App() {

  const [value, setValue] = React.useState("LocalStorage");

  const setData = () => {
    setValue("Value is Set");
    localStorage.setItem("name", "Raj");
  };

  const getData = () => {
    var a = localStorage.getItem('name');
    setValue("Value is : " + a);
  };

  const removeData = () => {
    localStorage.removeItem("name");
    setValue("Value is removed");
  };

  return (
    <>
      {value}
      <button onClick={setData}>Set Data</button>
      <button onClick={getData}>Get Data</button>
      <button onClick={removeData}>Remove Data</button>
    </>
  );
}
export default App;
