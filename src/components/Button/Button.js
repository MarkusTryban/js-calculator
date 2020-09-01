import React, { Component } from 'react';

export default ({ onButtonClick, buttonKey }) => {
  let handleClick = () => {
    onButtonClick(buttonKey);
  };

  return <button onClick={handleClick}>{buttonKey}</button>;
};
