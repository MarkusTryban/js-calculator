import React, { Component } from 'react';
import CalcButton from './CalcButton';

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
        <div className='display'>
          <h1>This is a JavaScript Calculator</h1>
        </div>
        <CalcButton />

        <button id='equals' className='display' type='button'>
          =
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
