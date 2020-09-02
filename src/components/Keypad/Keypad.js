import React, { Component } from 'react';

import calculate from '../../utils/calculate/calculate';

import buttonKeys from '../../utils/constants';

import Button from '../Button/Button';

class Keypad extends Component {
  handleClick = (key) => {
    const { clear, deleteKey, evaluate } = this.props;

    switch (key) {
      case 'c':
        clear();
        break;
      case 'Del':
        deleteKey();
        break;
      case '=':
        evaluate();
        break;
      default:
        calculate(key);
        break;
    }
  };

  render() {
    return (
      <div className='keypad'>
        {buttonKeys.map((block) => {
          return (
            <div key={block.toString()} className='block'>
              {block.map((key) => (
                <Button
                  key={key}
                  onButtonClick={this.handleClick}
                  buttonKey={key}
                />
              ))}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Keypad;
