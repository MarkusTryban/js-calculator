import React from 'react';

import PropTypes from 'prop-types';

const Input = (props) => {
  const { children } = props;

  return <div className='input'>{children}</div>;
};

Input.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
};

Input.defaultProps = {
  children: PropTypes.string.isRequired,
};

export default Input;
