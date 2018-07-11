import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SocialCard from './Components/SocialCard'

class App extends Component {
  render() {
    return (

      <div className="App">
        <h1>Social Card React Project</h1>
        <SocialCard />
      </div>
    );
  }
}

export default App;
