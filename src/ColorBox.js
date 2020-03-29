import React, { Component } from 'react';

export default class ColorBox extends Component {
  state = {
    todos: [],
  };

  render() {
    let result;
    let number;

    if (this.props.opacity >= 0.2) {
      number = this.props.opacity - 0.1;
      result = <ColorBox opacity={number} />;
    } else if (this.props.opacity < 0.2) {
      debugger;
      return null;
    }
    return (
      <div
        className="color-box"
        style={{ opacity: this.props.opacity /*replace null with the value*/ }}
      >
        {result}
      </div>
    );
  }
}
