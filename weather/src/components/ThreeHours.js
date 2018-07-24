import React, { Component } from 'react';
import Hour from './Hour';

class ThreeHours extends Component {

  renderDays(start, end) {
    var list = [];
    for (var i = start; i < end; i++) {
      list.push( <Hour hr={this.props.hourly[i]}/> );
    };
    return list;
  }

  render() {
    var today = this.props.hourly[0].time.day;
    var tomorrow = this.props.hourly[this.props.startTom].time.day;
    return (
      <div>
      <h2>{this.props.city}</h2>
        <dl id = 'todayHourly'>
          <h3> {today} </h3>
          {this.renderDays(0, this.props.startTom)}
        </dl>
        <dl id = 'tomorrowHourly'>
          <h3> {tomorrow} </h3>
          {this.renderDays(this.props.startTom, 9)}
        </dl>
      </div>
    );
  }
}
export default ThreeHours;
