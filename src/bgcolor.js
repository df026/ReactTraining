import React, { Component } from 'react';

class BGColor extends Component {
  constructor(props) { 
    super(props);
    this.state = {
      color: localStorage.getItem('BGColor') ? localStorage.getItem('BGColor') : 'white'
    };
  }

  componentDidUpdate() {
    localStorage.setItem('BGColor', this.state.color);
  }

  render() {
    var bgstyle = {
      height: '100vh',
      backgroundColor: this.state.color
    };

    return (
      <div style={bgstyle}>
        <button onClick={() => this.setState({ color: "red" })}>Red</button>
        <button onClick={() => this.setState({ color: "blue" })}>Blue</button>
        <button onClick={() => this.setState({ color: "green" })}>Green</button>
      </div>
    );
  }
}

export default BGColor;
