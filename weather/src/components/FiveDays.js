import React, { Component } from 'react';
import Day from './Day';
require('dotenv').config()

class FiveDays extends Component {

  constructor() {
    super();
    this.state = {
      weather: null
    };
  }

  getData() {
    let url = `https://api.darksky.net/forecast/${process.env.REACT_APP_DARK_SKY_KEY}/42,75`;
    fetch(url)
      .then((r) => {
        console.log(r);
        return r.json();
      })
      .then((j) => {
        console.log(j);
      })
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div className="App">
        <Day />
      </div>
    );
  }
}
export default FiveDays;
