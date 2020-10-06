import React, { useState } from 'react';

import Input from '../Input/Input';

import Keypad from '../Keypad/Keypad';

import calculate from '../../utils/calculate/calculate';

import './App.css';

const App = () => {
  const [expression, setExpression] = useState('');
  const [total, setTotal] = useState(0);

  const setExpressionState = () => {
    const initialState = { expression, total };

    const { expressionKey } = initialState.expressionKey;

    return {
      ...initialState,
      expression,
      total: calculate(expressionKey),
    };
  };

  return (
    <div className='calculator-container'>
      <Input expression={expression} total={total} />
      <Keypad {setExpression()} />
    </div>
  );
};
export default App;
