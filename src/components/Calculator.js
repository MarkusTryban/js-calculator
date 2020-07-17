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
    const { input } = this.state;

    this.setState({ input: input + val });
  };

  addDecimal = (val) => {
    const { input } = this.state;

    if (input.indexOf('.') === -1) {
      this.setState({ input: input + val });
    }
  };

  addZeroToInput = (val) => {
    const { input } = this.state;

    if (input !== '') {
      this.setState({ input: input + val });
    }
  };

  clearInput = () => {
    this.setState({ input: '' });
  };

  add = () => {
    const { input } = this.state;

    this.state.previousNumber = input;
    this.setState({ input: '' });
    this.state.operator = 'plus';
  };

  subtract = () => {
    const { input } = this.state;

    this.state.previousNumber = input;
    this.setState({ input: '' });
    this.state.operator = 'subtract';
  };

  multiply = () => {
    const { input } = this.state;

    this.state.previousNumber = input;
    this.setState({ input: '' });
    this.state.operator = 'multiply';
  };

  divide = () => {
    const { input } = this.state;

    this.state.previousNumber = input;
    this.setState({ input: '' });
    this.state.operator = 'divide';
  };

  evaluate = () => {
    const { input, operator, currentNumber, previousNumber } = this.state;

    this.state.currentNumber = input;

    if (operator === 'plus') {
      this.setState({
        input: parseInt(previousNumber, 10) + parseInt(currentNumber, 10),
      });
    } else if (operator === 'subtract') {
      this.setState({
        input: parseInt(previousNumber, 10) - parseInt(currentNumber, 10),
      });
    } else if (operator === 'multiply') {
      this.setState({
        input: parseInt(previousNumber, 10) * parseInt(currentNumber, 10),
      });
    }
  };

  render() {
    const { input } = this.state;

    return (
      <div className='main'>
        <div className='display'>
          <h1>{input}</h1>
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
            <Button handleClick={this.subtract} id='subtract'>
              -
            </Button>
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
