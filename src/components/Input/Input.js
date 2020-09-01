import React from 'react';

import PropTypes from 'prop-types';

const Input = ({ total, expression }) => {
  return (
    <div className='display-container'>
      <div className='display'>{expression}</div>
      <div className='input'>{total}</div>
    </div>
  );
};

Input.propTypes = {
  total: PropTypes.number.isRequired,
  expression: PropTypes.string.isRequired,
};

export default Input;
