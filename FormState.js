import React from 'react'

class FormState extends React.Component {
 constructor(props){
  super(props);
  this.state={
    firstname:"",
    surname:"",
    mobile:"",
    email:"",
  }
} 
  handleChange(event){
    this.setState({name:event.target.value})
  }
 
  haandleSubmit(event){
    alert("Do you want to submit Data ?");
    event.preventDefault()

  }

  render(){
  return (
    <div>
      <h1>Hi I am state</h1>
      <form onSubmit={this.haandleSubmit.bind(this)}>
        Name:<input type="text" name='firstname' onChange={this.handleChange.bind(this)}/>
        Surname :<input type="text" name='surname' onChange={this.handleChange.bind(this)}/>
        Mobile :<input type="number" name='mobile' onChange={this.handleChange.bind(this)}/>
        Email :<input type="email" name='email' onChange={this.handleChange.bind(this)}/>
        <input type="submit"/><br/>
        Value is :{this.state.name}

      </form>
    </div>
  )
}
}
export default FormState;