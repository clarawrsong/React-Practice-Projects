import React, { Component } from 'react';
import Card from './Card'

class Gallery extends Component {

  renderList() {
    var list = [];
    this.props.pictures.forEach((pic) => {
      list.push(
        <Card url={pic.url} description={pic.info}/>
      );
    });
    return list;
  }

  render() {
    return (
      <div>
        <dl className="list">
          {this.renderList()}
        </dl>
      </div>
    );
  }
}

export default Gallery;
