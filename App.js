import React from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Events from './Events';
import FormState from './FormState';
import Storagedata from './Storagedata';
import Hook from './Hook';
import Validations from "./Validations";
function App() {
  return (
    <>
    <h1>Welcome To Basic programs for better understanging React Concept.</h1> 
    <Router>
      <Link to="/Home"> <h3>che :02 Home</h3> Home ||</Link>
      <Link to="/About"> che :03 About ||</Link><br/><br/>
      <Link to="/Events">Che:04 Events ||</Link><br/><br/>
      <Link to="/FormState">Che:05 State ||</Link><br/><br/>
      <Link to="/Hook">Che:06 Hooks ||</Link><br/><br/>
      <Link to="/Storagedata">Che:07 Localstorage ||</Link><br/><br/>
      <Link to="/Validations">Che:08 Validation ||</Link><br/><br/>
      <Routes>     
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/Events" element={<Events/>}></Route>
        <Route path="/FormState" element={<FormState/>}></Route>
        <Route path="/Hook" element={<Hook/>}></Route>
        <Route path='/Storagedata' element={<Storagedata/>}></Route>
        <Route path='/Validations' element={<Validations/>}></Route>
      </Routes>
    </Router>    
    </>
  );
}

export default App;
