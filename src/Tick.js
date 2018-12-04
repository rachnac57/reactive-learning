/* Event handling */


import React from 'react';

/**
*We can also define React components by JS functions:
*then we need not use 'this' keyword
*Since we are using a class here, we need to use 'this' 
**/


class Tick extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

export {Tick};  // named export