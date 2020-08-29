import React, { Component } from 'react';
import Button from '../Button/Button';
import ClearButton from '../ClearButton';
import Input from '../Input';

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '0',
      previousNumber: '',
      operator: '',
    };
  }

  addToInput = (val) => {
    const { input } = this.state;

    if (input === '0') {
      this.setState({ input: val });
    } else {
      this.setState({ input: input + val });
    }
  };

  addDecimal = (val) => {
    const { input } = this.state;

    if (input.indexOf('.') === -1) {
      this.setState({ input: input + val });
    }
  };

  addZeroToInput = (val) => {
    const { input } = this.state;

    if (input !== '0') {
      this.setState({ input: input + val });
    }
  };

  clearCurrentState = () => {
    this.setState({
      input: '0',
      previousNumber: '',
      operator: '',
    });
  };

  previousNum = () => {
    const { input } = this.state;

    this.state.previousNumber = input;
    this.setState({ input: '' });
  };

  add = () => {
    this.previousNum();
    this.state.operator = 'plus';
  };

  subtract = () => {
    this.previousNum();
    this.state.operator = 'subtract';
  };

  multiply = () => {
    this.previousNum();
    this.state.operator = 'multiply';
  };

  divide = () => {
    this.previousNum();
    this.state.operator = 'divide';
  };

  evaluate = () => {
    const { input, operator, previousNumber } = this.state;

    if (operator === 'plus') {
      this.setState({
        input: parseFloat(previousNumber) + parseFloat(input),
      });
    } else if (operator === 'subtract') {
      this.setState({
        input: parseFloat(previousNumber) - parseFloat(input),
      });
    } else if (operator === 'multiply') {
      this.setState({
        input: parseFloat(previousNumber) * parseFloat(input),
      });
    } else if (operator === 'divide') {
      this.setState({
        input: parseFloat(previousNumber) / parseFloat(input),
      });
    }
  };

  render() {
    const { input } = this.state;

    return (
      <div className='main'>
        <div className='wrapper'>
          <div id='display' className='button-layout'>
            <Input>{input}</Input>
          </div>

          <div className='button-layout'>
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.divide}>/</Button>
          </div>
          <div className='button-layout'>
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.multiply}>*</Button>
          </div>
          <div className='button-layout'>
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.add}>+</Button>
          </div>
          <div className='button-layout'>
            <Button handleClick={this.addDecimal}>.</Button>
            <Button handleClick={this.addZeroToInput}>0</Button>
            <Button handleClick={this.evaluate}>=</Button>
            <Button handleClick={this.subtract}>-</Button>
          </div>
          <div className='button-layout'>
            <ClearButton handleClear={this.clearCurrentState}>
              clear
            </ClearButton>
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
      </div>
    );
  }
}

export default Calculator;
