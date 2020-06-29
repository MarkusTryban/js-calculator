import React from 'react';

function ClearButton() {
  render() {
    <div className='clear-btn' onClick={() => this.props.handleClear()}></div>;
    return <div>{this.props.children}</div>;
  }
}

export default ClearButton;
