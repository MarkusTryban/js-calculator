import React, { Component } from 'react';

import Input from '../Input/Input';

import Keypad from '../Keypad/Keypad';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expression: '',
      total: 0,
    };
  }

  render() {
    const { total } = this.state;

    return (
      <div className='calculator-container'>
        <Input>{total}</Input>
        <Keypad />
      </div>
    );
  }
}

export default App;
