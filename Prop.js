import React from 'react'

class Prop extends React.Component {
    render(){
  return (
    <>
      <h1>Props</h1>
      {this.props.firstname}
      {this.props.lastname}
    </>
  )
}
}

export default Prop;