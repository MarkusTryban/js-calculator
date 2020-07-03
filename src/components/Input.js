import React, { Component } from 'react';

import '../App.css';

export default class Input extends Component {
  render() {
    return <div className='input'>{this.children}</div>;
  }
}
