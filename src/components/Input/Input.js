import React from 'react';

export default (props) => {
  const { total, expression } = props;

  return (
    <div className='display-container'>
      <div className='display'>{expression}</div>
      <div className='input'>{total} </div>
    </div>
  );
};
