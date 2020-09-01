import React, { Component } from 'react';

import { buttonKeys } from '../../utils/constants';

import Button from '../Button/Button';

class Keypad extends Component {
  handleClick = (key) => {
    this.props.calculate(key);
  };

  render() {
    return buttonKeys.map((block) => {
      return block.map((key) => (
        <Button key={key} onButtonClick={this.handleClick} buttonKey={key} />
      ));
    });
  }
}

export default Keypad;
