import React from 'react';
import PropTypes from 'prop-types';

const ClearButton = ({ children }) => {
  return (
    <div
      className='clear-btn'
      role='button'
      onClick={() => this.props.handleClear()}
    >
      {children}
    </div>
  );
};

ClearButton.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ClearButton;
