import React, { Component } from 'react';
import './App.css';
import FiveDays from './components/FiveDays';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Clara&#39;s Weather App</h1>
        </header>
        <FiveDays />
      </div>
    );
  }
}

export default App;
