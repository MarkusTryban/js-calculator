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
            <Button handleClick={this.addToInput} id='seven'>
              7
            </Button>
            <Button handleClick={this.addToInput} id='eight'>
              8
            </Button>
            <Button handleClick={this.addToInput} id='nine'>
              9
            </Button>
            <Button handleClick={this.divide} id='divide'>
              /
            </Button>
          </div>
          <div className='button-layout'>
            <Button handleClick={this.addToInput} id='four'>
              4
            </Button>
            <Button handleClick={this.addToInput} id='five'>
              5
            </Button>
            <Button handleClick={this.addToInput} id='six'>
              6
            </Button>
            <Button handleClick={this.multiply} id='multiply'>
              *
            </Button>
          </div>
          <div className='button-layout'>
            <Button handleClick={this.addToInput} id='one'>
              1
            </Button>
            <Button handleClick={this.addToInput} id='two'>
              2
            </Button>
            <Button handleClick={this.addToInput} id='three'>
              3
            </Button>
            <Button handleClick={this.add} id='add'>
              +
            </Button>
          </div>
          <div className='button-layout'>
            <Button handleClick={this.addDecimal} id='decimal'>
              .
            </Button>
            <Button handleClick={this.addZeroToInput} id='zero'>
              0
            </Button>
            <Button handleClick={this.evaluate} id='equals'>
              =
            </Button>
            <Button id='subtract'>-</Button>
          </div>
          <div className='button-layout'>
            <ClearButton handleClear={this.clearInput}>clear</ClearButton>
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
