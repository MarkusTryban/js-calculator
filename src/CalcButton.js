import React from 'react';

const CalcButton = () => {
  return (
    <div className='clac-layout'>
      <button id='zero' type='button' className='calc-button'>
        0
      </button>
      <button id='one' type='button' className='calc-button'>
        1
      </button>
      <button id='two' type='button' className='calc-button'>
        2
      </button>
      <button id='three' type='button' className='calc-button'>
        3
      </button>
      <button id='four' type='button' className='calc-button'>
        4
      </button>
      <button id='five' type='button' className='calc-button'>
        5
      </button>
      <button id='six' type='button' className='calc-button'>
        6
      </button>
      <button id='seven' type='button' className='calc-button'>
        7
      </button>
      <button id='eight' type='button' className='calc-button'>
        8
      </button>
      <button id='nine' type='button' className='calc-button'>
        9
      </button>
    </div>
  );
};

export default CalcButton;
