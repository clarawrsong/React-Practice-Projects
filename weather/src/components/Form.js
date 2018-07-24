import React, { Component } from 'react';

class Form extends Component {

  render() {
    return (
      <div>
        <form onSubmit={this.props.entered}>
          <input type="text" name="location" placeholder="city, country"></input>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;

// <input type="text" placeholder="city, country"></input>
// <button onClick={this.entered}>Enter</button>
