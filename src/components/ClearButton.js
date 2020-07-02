import React from 'react';

const ClearButton = () => {
  return (
    <div className='clear-btn' onClick={() => this.props.handleClear()}>
      {this.props.children}
    </div>
  );
};

export default ClearButton;
