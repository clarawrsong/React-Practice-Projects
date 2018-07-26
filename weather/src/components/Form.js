import React, { Component } from 'react';

class Form extends Component {

  render() {
    return (
      <div>
        <form onSubmit={this.props.entered}>
          <input type="text" name="location" placeholder="city, country"></input>
          <button>Submit</button>
        </form>
        <button className={this.props.units == 'imperial' ? 'selected' : ''}
          onClick={this.props.toF}> &#8457; </button>
        <button className={this.props.units == 'metric' ? 'selected' : ''}
          onClick={this.props.toC}> &#8451; </button>
      </div>
    );
  }
}

export default Form;
