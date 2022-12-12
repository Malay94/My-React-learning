import React from 'react'

class Storagedata extends React.Component {
   constructor(props){
    super(props);
    this.state={}
   };
 
  setData(){
    localStorage.setItem("name",'Malay');
    alert("Data is set");
  }

  getData(){
   let a = localStorage.getItem("name");
   alert("Your Name is "+a);
  }

  removeData(){
    localStorage.removeItem("name");
    alert("Your Data is removed");
  }
 

    render(){
  return (
    <div>
        <h1>Local Storage</h1>
        <button onClick={this.setData.bind(this)}>Set Data</button>
        <button onClick={this.getData.bind(this)}>Get Data</button>
        <button onClick={this.removeData.bind(this)}>Remove Data</button>
    </div>
  )
}
}

export default Storagedata