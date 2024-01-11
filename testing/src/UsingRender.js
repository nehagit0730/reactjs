import React, { Component } from 'react';

class UsingRender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Sangeeta",
    };
  }

  render() {
    console.log(this.state.name, this.props.car);
    console.log(this.props.emps.name, this.props.emps.age);

    return (
      <div>This is Rendered Component</div>
    );
  }
}

export default UsingRender;