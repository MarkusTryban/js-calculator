import React, { Component } from 'react';

import calculate from '../../utils/calculate/calculate';

import buttonKeys from '../../utils/constants';

import Button from '../Button/Button';

class Keypad extends Component {
  handleClick = (key) => {
    calculate(key);
  };

  render() {
    return (
      <div className='keypad'>
        {buttonKeys.map((block) => {
          return (
            <div key={block.id} className={block}>
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
