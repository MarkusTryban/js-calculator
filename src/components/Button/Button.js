import React, { Component } from 'react';

import PropTypes from 'prop-types';

class Button extends Component {
  isOperator = (val) => {
    return !isNaN(val) || val === '.' || val === '=';
  };

  buttonId = (e) => {
    let id;

    if (e === '=') {
      id = 'equals';
    } else if (e === '0') {
      id = 'zero';
    } else if (e === '1') {
      id = 'one';
    } else if (e === '2') {
      id = 'two';
    } else if (e === '3') {
      id = 'three';
    } else if (e === '4') {
      id = 'four';
    } else if (e === '5') {
      id = 'five';
    } else if (e === '6') {
      id = 'six';
    } else if (e === '7') {
      id = 'seven';
    } else if (e === '8') {
      id = 'eight';
    } else if (e === '9') {
      id = 'nine';
    } else if (e === '+') {
      id = 'add';
    } else if (e === '-') {
      id = 'subtract';
    } else if (e === '*') {
      id = 'multiply';
    } else if (e === '/') {
      id = 'divide';
    } else if (e === '.') {
      id = 'decimal';
    }

    return id;
  };

  render() {
    const { children, handleClick } = this.props;

    return (
      <div
        className={`button ${this.isOperator(children) ? '' : 'operator'}`}
        id={this.buttonId(children)}
        role='button'
        tabIndex='-1'
        onKeyPress={this.handleKeyPress}
        onClick={() => handleClick(children)}
      >
        {children}
      </div>
    );
  }
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
