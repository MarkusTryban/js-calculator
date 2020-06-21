import React, { Component } from 'react';

export default class Button extends Component {
  isOperator = (val) => {
    return !isNaN(val) || val === '.' || val === '=';
  };

  render() {
    return <div>{this.props.children}</div>;
  }
}
