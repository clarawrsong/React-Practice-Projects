import React, { Component } from 'react';

class SocialCard extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <img src={this.props.image}>
        <h3>{this.props.author}<h3>
        <body>{this.props.description}<body>
      </div>
    );
  }
}

export default SocialCard;
