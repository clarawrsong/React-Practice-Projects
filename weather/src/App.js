import React, { Component } from 'react';
import './App.css';
import ThreeHours from './components/ThreeHours';
import Form from './components/Form'

class App extends Component {

  constructor() {
    super();
    this.state = {
      weather: null,
      units: 'imperial',
      city: 'Philadelphia, US',
    };
  }

  getData() {
    console.log('getData');
    let tempUnit = this.state.units;
    let cityName = this.state.city;
    let url = `https://api.openweathermap.org/data/2.5/forecast?appid=5e488f627103c54501b7ef81152218bf&q=${cityName}&units=${tempUnit}`;
    fetch(url)
      .then((r) => {
        return r.json();
      })
      .then((j) => {
        this.setWeather(j.list);
      });
  };

  setWeather(data) {
    let newWeather = [];
    for (var i = 0; i < 9; i++) {
      var rainVol = (('rain' in data[i])&&('3h' in data[i].rain))? data[i].rain : '0';
      var newForecast = {
        time: {
          day: data[i].dt_txt.substring(5,10),
          hour: data[i].dt_txt.substring(11,16),
        },
        temp: data[i].main.temp,
        icon: `http://openweathermap.org/img/w/${data[i].weather[0].icon}.png`,
        description: data[i].weather[0].description,
        rainfall: rainVol
      };
      newWeather.push(newForecast);
    }
    this.setState({weather: newWeather});
  };

  getStartTom() {
    var i = 1;
    var tod = this.state.weather[0].time.day;
    var day = this.state.weather[i].time.day;

    while (day === tod) {
      i++;
      day = this.state.weather[i].time.day
    };
    return i;
  }

  componentDidMount() {
    console.log('didmount');
    this.getData();
  }

  render() {
    console.log('render');
    console.log(this.state.weather);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Clara&#39;s Weather App</h1>
        </header>
        <Form />
        {this.state.weather !== null?
          <ThreeHours hourly={this.state.weather} startTom={this.getStartTom()}/>
          : 'enter state, country'}
      </div>
    );
  }
}

export default App;
