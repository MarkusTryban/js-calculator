import React, { Component } from 'react';

export default class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mainCalc: [],
    };
  }

  render() {
    return <h1>This is a JavaScript Calculator</h1>;
  }
}
