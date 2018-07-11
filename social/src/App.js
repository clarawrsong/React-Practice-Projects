import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SocialCard from './Components/SocialCard'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Social Card React Project</h1>
        <SocialCard description="a hawt dog" image="https://img.buzzfeed.com/buzzfeed-static/static/2014-10/20/13/enhanced/webdr05/enhanced-5564-1413824442-8.jpg?downsize=715:*&output-format=auto&output-quality=auto"/>
      </div>
    );
  }
}

export default App;
