import React, { Component } from 'react';

export default class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mainCalc: [],
    };
  }

  render() {
    return (
      <div className='main'>
        <div id='display'>
          <h1>This is a JavaScript Calculator</h1>
        </div>
        <div className='clac-layout'>
          <div className='calc-button'></div>
        </div>
      </div>
    );
  }
}
