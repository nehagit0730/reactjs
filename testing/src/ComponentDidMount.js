import React, { Component } from "react";

export class ComponentDidMount extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  componentDidMount() {
    /// Best place to keep API calls
    console.log("Component Mounted");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component Updated", prevState.counter);
  }

  componentWillUnmount() {
    console.log("Component Unmounted");
  }

  // shouldComponentUpdate() {
  //   console.log("shouldComponentUpdate");
  //   console.log(this.state.counter);
  //   if (this.state.counter === 1) {
  //     return true;
  //   }
  //   return false;
  // }

  render() {
    // console.log(this.state.name, this.props.car);
    // console.log(this.props.emps.name, this.props.emps.age);

    return (
      <div>
        {/* <div>This is Rendered Component</div> */}
        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          Press Me
        </button>
      </div>
    );
  }
}

export default ComponentDidMount;