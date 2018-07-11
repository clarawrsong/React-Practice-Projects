import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <div id="post" className={this.props.selected.url===this.props.url? 'selected' : ''}
        onClick={() => this.props.select(this.props.url, this.props.info)}>
        <img src={this.props.url} className={this.props.selected.url===this.props.url? 'selected' : ''}
          alt= "https://img.buzzfeed.com/buzzfeed-static/static/2014-10/20/13/enhanced/webdr05/enhanced-5564-1413824442-8.jpg?downsize=715:*&output-format=auto&output-quality=auto">
        </img>
        <div id="text">{this.props.description}</div>
      </div>
    );
  }
}

export default Card;
