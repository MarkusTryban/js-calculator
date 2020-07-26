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

  clearCurrentState = () => {
    this.setState({
      input: '',
      previousNumber: '',
      operator: '',
    });
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
    const { input, operator, previousNumber } = this.state;

    if (operator === 'plus') {
      this.setState({
        input: parseInt(previousNumber, 10) + parseInt(input, 10),
      });
    } else if (operator === 'subtract') {
      this.setState({
        input: parseInt(previousNumber, 10) - parseInt(input, 10),
      });
    } else if (operator === 'multiply') {
      this.setState({
        input: parseInt(previousNumber, 10) * parseInt(input, 10),
      });
    } else if (operator === 'divide') {
      this.setState({
        input: parseInt(previousNumber, 10) / parseInt(input, 10),
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
