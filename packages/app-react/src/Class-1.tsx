import React from "react";

class class1 extends React.Component {
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
      我是class组件
      <h1>Counter: {this.state.count}</h1>  
      <button onClick={this.increment}>Increment</button>  
    </div>
  }
}

export default class1;