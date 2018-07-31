import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <button id={this.props.id} onClick={() => {this.props.handleClick(this.props.name)}}>
        {this.props.name}
      </button>
    );
  }
}

export default Button;
