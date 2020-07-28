import React, { Component } from 'react';

import PropTypes from 'prop-types';

class Button extends Component {
  isOperator = (val) => {
    return !isNaN(val) || val === '.' || val === '=';
  };

  buttonId = (children) => {
    if (children === '7') {
      return 'seven';
    }
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
