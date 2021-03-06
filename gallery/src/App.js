import React, { Component } from 'react';
import './App.css';
import Gallery from './components/Gallery'

class App extends Component {
  constructor() {
    super();
    const localGallery = JSON.parse(localStorage.getItem('history'));
    this.state = {
      pictures: localGallery ? localGallery : [],
      input: {url: '', info: ''},
      selected: ''
    };

    this.enterPicture = this.enterPicture.bind(this);
    this.select = this.select.bind(this);
    this.handleURLChange = this.handleURLChange.bind(this);
    this.handleInfoChange = this.handleInfoChange.bind(this);
  }

  enterPicture() {
    const newPictures = this.state.pictures;
    newPictures.push(this.state.input);

    this.setState({pictures: newPictures});
    this.setInput({url: '', info: ''});
    this.save();
  }

  select(url, info) {
    this.setState({selected: {url: url, info: info}})
  }

  handleURLChange(urlInput) {
    let newInput = this.state.input;
    newInput.url = urlInput.target.value
    this.setInput(newInput);
  }

  handleInfoChange(infoInput) {
    let newInput = this.state.input;
    newInput.info = infoInput.target.value
    this.setInput(newInput);
  }

  setInput(newInput) {
    this.setState({input: newInput});
  }

  save() {
    localStorage.setItem('history', JSON.stringify(this.state.pictures));
  }

  render() {
    return (
      <div className="App">
        <h1>Photo Gallery</h1>
        <div className='input'>
          <input type="text" onChange={this.handleURLChange}
            placeholder="Image url"></input>
          <input type="text" onChange={this.handleInfoChange}
            placeholder="Title or short description"></input>
          <button onClick={this.enterPicture}>Enter</button>
        </div>
        <Gallery pictures={this.state.pictures} select={this.select}
          selected={this.state.selected}/>
      </div>
    );
  }
}

export default App;
