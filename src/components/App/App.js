import React, { Component } from 'react';

import Input from '../Input/Input';

import Keypad from '../Keypad/Keypad';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expression: '2+2',
      total: 0,
    };
  }

  render() {
    const { total, expression } = this.state;

    return (
      <div className='calculator-container'>
        <Input expression={expression} total={total} />
        <Keypad />
      </div>
    );
  }
}

export default App;
