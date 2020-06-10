import React, { Component } from 'react';
import CalcButton from './CalcButton';

export default class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      calcValue: 0,
    };
  }

  render() {
    const { calcValue } = this.state;

    return (
      <div className='main'>
        <div className='display'>
          <h1>{calcValue}</h1>
        </div>
        <CalcButton />

        <button id='equals' className='display-button' type='button'>
          =
        </button>
        <button id='add' className='display-button' type='button'>
          +
        </button>
        <button id='subtract' className='display-button' type='button'>
          -
        </button>
        <button id='multiply' className='display-button' type='button'>
          *
        </button>
        <button id='divide' className='display-button' type='button'>
          /
        </button>
        <button id='decimal' className='display-button' type='button'>
          .
        </button>
        <button id='clear' className='display-button' type='button'>
          clear
        </button>
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
