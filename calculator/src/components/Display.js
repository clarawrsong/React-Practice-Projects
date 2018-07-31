import React, { Component } from 'react';

class Display extends Component {
  render() {
    return (
      <div id="display">
        <p>{this.props.prev}</p>
        <h2 id='mainLine'>{this.props.expression}</h2>
      </div>
    );
  }
}

export default Display;
