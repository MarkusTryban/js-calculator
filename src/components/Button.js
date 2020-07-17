import React, { Component } from 'react';

import PropTypes from 'prop-types';

class Button extends Component {
  isOperator = (val) => {
    return !Number.isNaN(val) || val === '.' || val === '=';
  };

  render() {
    const { children, handleClick } = this.props;

    return (
      <div
        className={`button ${this.isOperator(children) ? '' : 'operator'}`}
        role='button'
        onKeyPress={this.handleKeyPress}
        onClick={() => handleClick(children)}
      >
        {children}
      </div>
    );
  }
}

Button.propTypes = {
  children: PropTypes.element.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
