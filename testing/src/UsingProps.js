// using props with a functional component
/*
function NewProp(props) {

    return (
        <div>
     <h1>Name:{props.name}</h1>
     <h1>Email:{props.email}</h1>
        </div>
    );
}

export default NewProp;
*/

// using props with a class component
import React, { Component } from 'react';
class ClassComponentWithProps extends Component {
    render() {
      return (
        <div>
          <h1>Name: {this.props.name}</h1>
          <h1>Email: {this.props.email}</h1>
        </div>
      );
    }
  }
  
  export default ClassComponentWithProps;