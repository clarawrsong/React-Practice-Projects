import React, { Component } from 'react';

class Hour extends Component {

  hover(hour) {
    this.refs.info.innerHTML += "<br>" + hour.description + "<br>" + hour.rainfall + ' mm';
  }

  nohover(hour) {
    var text = this.refs.info.innerHTML;
    var lines = text.split('<br>');
    this.refs.info.innerHTML = lines[0];
  }

  render() {
    var hourly = this.props.hr;
    return (
      <div id='hourCard' onMouseOver={() => this.hover(hourly)}
        onMouseOut={() => this.nohover(hourly)}>
        <h4> {hourly.time.hour} </h4>
        <img src={hourly.icon}/>
        <p ref="info"> {hourly.temp} </p>
      </div>
    );
  }
}

export default Hour;
