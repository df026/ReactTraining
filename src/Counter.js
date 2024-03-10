import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: localStorage.getItem('Counter') ? parseInt(localStorage.getItem('Counter')) : 0
    };
  }

  componentDidUpdate() {
    localStorage.setItem('Counter', this.state.counter);
  }
  
  render() {
    return (
      <>
        <button onClick={() => this.setState({ counter: this.state.counter + 1 })}>++</button>
        <button onClick={() => this.setState({ counter: this.state.counter - 1 })}>--</button>
        <p>Counter: {this.state.counter}</p>
      </>
    );
  }
}

export default Counter;
