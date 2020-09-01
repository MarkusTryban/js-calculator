import React, { Component } from 'react';

import calculate from '../../utils/calculate/calculate';

import { buttonKeys } from '../../utils/constants';

import Button from '../Button/Button';

class Keypad extends Component {
  handleClick = (key) => {
    calculate(key);
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
