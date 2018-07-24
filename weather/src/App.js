import React, { Component } from 'react';
import './App.css';
import ThreeHours from './components/ThreeHours';
import Form from './components/Form'

class App extends Component {

  constructor() {
    super();
    const lastVisit = localStorage.getItem('previous');
    // alert('constructor')
    this.state = {
      weather: null,
      units: 'imperial',
      city: lastVisit ? lastVisit : '',
      input: ''
    };

    this.setLocation = this.setLocation.bind(this);
  }

  /* gets data from http request */
  getData() {
    if (this.state.city === '') return;
    let tempUnit = this.state.units;
    let cityName = this.state.city;
    let url = `https://api.openweathermap.org/data/2.5/forecast?appid=5e488f627103c54501b7ef81152218bf&q=${cityName}&units=${tempUnit}`;
    fetch(url)
      .then(r => {
        return r.json();
      })
      .then(j => {
        this.setWeather(j.list);
      })
      .catch(error => alert('incorrect input'));
  };

  /* gets starting index position of the next day */
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

  /* sets weather state (an array) according to data parameter
  for each item in the array is a different hour (every 3 hours)
  for each hour, sets the time, temp, icon, description, and rainfall */
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

  /* sets city state and sets previous history as input city */
  setLocation(input) {
    var newCity = input.target.elements.location.value;
    localStorage.setItem('previous', newCity);
    this.setState({city: newCity}, this.getData());
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    alert("render: " + this.state.city);  //problem! renders 4x everytime city changed
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Clara&#39;s Weather App</h1>
        </header>
        <Form entered={this.setLocation}/>
        {this.state.weather !== null?
          <ThreeHours hourly={this.state.weather} startTom={this.getStartTom()} city={this.state.city}/>
          : 'enter state, country (e.g. Philadelphia, US)'}
      </div>
    );
  }
}

export default App;
