import React from 'react';

const Input = ({ total, expression }) => {
  return (
    <div className='display-container'>
      <div className='display'>{expression}</div>
      <div className='input'>{total}</div>
    </div>
  );
};

export default Input;
