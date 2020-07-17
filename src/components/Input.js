import React from 'react';

import PropTypes from 'prop-types';

const Input = (props) => {
  const { children } = props;

  return <div className='input'>{children}</div>;
};

Input.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Input;
