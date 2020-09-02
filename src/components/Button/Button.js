import React from 'react';

import PropTypes from 'prop-types';

const Button = ({ onButtonClick, buttonKey }) => {
  const handleClick = () => {
    onButtonClick(buttonKey);
  };

  return (
    <button type='button' onClick={handleClick}>
      {buttonKey}
    </button>
  );
};

Button.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
  buttonKey: PropTypes.string.isRequired,
};

export default Button;
