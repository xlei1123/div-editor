import React from "react";

import Class1 from './Class-1';

class TestClass extends React.Component {
  state = {
    count: 1
  }
  increment = () => {
    this.setState({
      count: this.state.count+1
    })
  }
  render(): React.ReactNode {
    return <div>
      <Class1 />
    </div>
  }
}

export default TestClass;