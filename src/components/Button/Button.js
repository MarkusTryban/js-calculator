import React from 'react';

import PropTypes from 'prop-types';

import { operators, specialOperators } from '../../utils/constants';

const Button = ({ onButtonClick, buttonKey }) => {
  const handleClick = (e) => {
    onButtonClick(e.target.textContent);
  };

  const classNames = [
    'btn',
    operators.includes(buttonKey) ? 'btn-orange' : '',
    specialOperators.includes(buttonKey) ? 'btn-gray' : '',
  ];

  return (
    <button
      className={classNames.join(' ').trim()}
      type='button'
      onClick={handleClick}
    >
      {buttonKey}
    </button>
  );
};

Button.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
  buttonKey: PropTypes.string.isRequired,
};

export default Button;
