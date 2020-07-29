import React from 'react';

import PropTypes from 'prop-types';

const ClearButton = (props) => {
  const { children, handleClear } = props;

  return (
    <div
      className='clear-btn'
      id='clear'
      role='presentation'
      onClick={() => handleClear()}
    >
      {children}
    </div>
  );
};

ClearButton.propTypes = {
  children: PropTypes.string.isRequired,
  handleClear: PropTypes.func.isRequired,
};

export default ClearButton;
