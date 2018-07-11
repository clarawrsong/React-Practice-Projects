import React, { Component } from 'react';

class SocialCard extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <img src={this.props.image}></img>
        <div>
          <body>{this.props.description}</body>
        </div>
      </div>
    );
  }
}

export default SocialCard;
