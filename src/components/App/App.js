import React, { Component } from 'react';

import Input from '../Input/Input';

import Keypad from '../Keypad/Keypad';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className='calculator-container'>
        <Input {...this.props} />
        <Keypad {...this.props} />
      </div>
    );
  }
}

export default App;
