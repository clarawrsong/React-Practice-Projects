import React, { Component } from 'react';
import './App.css';
import Display from './components/Display';
import Pad from './components/Pad';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Display />
        <Pad />
      </div>
    );
  }
}

export default App;
