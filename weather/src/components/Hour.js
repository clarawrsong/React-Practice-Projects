import React, { Component } from 'react';

class Hour extends Component {
  render() {
    var hourly = this.props.hr;
    return (
      <div id='hourCard'>
        <h4> {hourly.time.hour} </h4>
        <img src={hourly.icon}/>
        <p> {hourly.temp} F </p>
      </div>
    );
  }
}

export default Hour;
