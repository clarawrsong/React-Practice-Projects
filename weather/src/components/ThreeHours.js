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
    var tomorrow = this.props.hourly[this.props.startTom+1].time.day;
    return (
      <div>
        <dl id = 'todayHourly'>
          <h2> {today} </h2>
          {this.renderDays(0, this.props.startTom)}
        </dl>
        <dl id = 'tomorrowHourly'>
          <h2> {tomorrow} </h2>
          {this.renderDays(this.props.startTom, 9)}
        </dl>
      </div>
    );
  }
}
export default ThreeHours;
