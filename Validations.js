import React, { Component } from 'react'

class Validations extends Component {
  constructor(props){
    super(props);
    this.state={
      firstname:'',
      surname:'',
      mobile:'',
      Gender:'',
     email:'',
     errors:{},
    }
  }
  
  onChange=(e)=>{
    this.setState({[e.target.name] :e.target.value});
  }

  setData(){
    localStorage.setItem("firstname",this.state.firstname);
    localStorage.setItem("surname",this.state.surname);
    localStorage.setItem("mobile",this.state.mobile);
    localStorage.setItem("Gender",this.state.Gender);
    localStorage.setItem("email",this.state.email);
    alert("Your data is set");
  }

  formValidation=()=>{
  const {firstname,surname, email, mobile}=this.state;
  let isValid = true;
  const errors={};

  if(!firstname){
   errors.firstname="Enter the Name";
   isValid=false;
  }
  if(!surname){
    errors.surname="Enter the surname";
    isValid=false;
  }
  if(!mobile){
    errors.mobile="enter the mobile";
    isValid=false;
  }
  if(!email){
    errors.email="enter the email";
    isValid=false;
  }
  this.setState({errors});
  return isValid;
 }

 onSubmit=(e)=>{
  e.preventDefault();
  const isValid = this.formValidation();
  if(isValid){
    console.log("onSubmit",this.state);
    this.setState({firstname:"",surname:"",mobile:"",Gender:"",email:""})
  }
 }
  render(){
    const{firstname, surname, email, Gender, mobile, errors}=this.state;
  return (
    <React.Fragment>
      <form onSubmit={this.onSubmit}>
      <label>Name :</label>
      <input type="text" name="firstname" value={firstname} onChange={this.onChange.bind(this)}></input>
      <br/><span style={{color:'red'}}>{errors.firstname}</span><br/>
      <label>Surname :</label>
      <input type="text" name="surname" value={surname} onChange={this.onChange.bind(this)}></input>
      <br/><span  style={{color:'red'}}>{errors.surname}</span><br/>
      <label>Email :</label>
      <input type="email" name="email" value={email} onChange={this.onChange.bind(this)}></input>
      <br/><span style={{color:'red'}}>{errors.email}</span><br/>
      <label>Mobile :</label>
      <input type="number" name="mobile" value={mobile} onChange={this.onChange.bind(this)}></input>
      <br/><span style={{color:'red'}}>{errors.mobile}</span><br/>

      <button type='submit' onClick={this.setData.bind(this)}>Submit</button>
      </form>
    </React.Fragment>
  )
}
}
export default Validations;