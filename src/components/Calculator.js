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

  render() {
    return (
      <div className='main'>
        <div className='display'>
          <h1>{}</h1>
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
