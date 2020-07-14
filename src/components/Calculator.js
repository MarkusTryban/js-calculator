import React, { Component } from 'react';
import Button from './Button';
import ClearButton from './ClearButton';
import Input from './Input';

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      previousNumber: '',
      currentNumber: '',
      operator: '',
    };
  }

  addToInput = (val) => {
    this.setState({ input: this.state.input + val });
  };

  addDecimal = (val) => {
    if (this.state.input.indexOf('.') === -1) {
      this.setState({ input: this.state.input + val });
    }
  };

  addZeroToInput = (val) => {
    if (this.state.input !== '') {
      this.setState({ input: this.state.input + val });
    }
  };

  clearInput = () => {
    this.setState({ input: '' });
  };

  add = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: '' });
    this.state.operator = 'plus';
  };

  subtract = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: '' });
    this.state.operator = 'subtract';
  };

  multiply = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: '' });
    this.state.operator = 'multiply';
  };

  divide = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: '' });
    this.state.operator = 'divide';
  };

  render() {
    return (
      <div className='main'>
        <div className='display'>
          <h1>{this.state.input}</h1>
        </div>
        <div className='wrapper'>
          <div className='button-layout'>
            <button id='seven'>7</button>
            <button id='eight'>8</button>
            <button id='nine'>9</button>
            <button id='divide'>/</button>
          </div>
          <div className='button-layout'>
            <button id='four'>4</button>
            <button id='five'>5</button>
            <button id='six'>6</button>
            <button id='multiply'>*</button>
          </div>
          <div className='button-layout'>
            <button id='one'>1</button>
            <button id='two'>2</button>
            <button id='three'>3</button>
            <button id='add'>+</button>
          </div>
          <div className='button-layout'>
            <button id='decimal'>.</button>
            <button id='zero'>0</button>
            <button id='equals'>=</button>
            <button id='subtract'>-</button>
          </div>
          <div className='button-layout'>
            <button id='clear'>clear</button>
          </div>
        </div>
        <div className='footer'>
          by{' '}
          <a
            href='https://markustryban.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            Markus Tryban
          </a>
        </div>
      </div>
    );
  }
}

export default Calculator;
