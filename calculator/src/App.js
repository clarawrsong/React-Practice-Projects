import React, { Component } from 'react';
import './App.css';
import Display from './components/Display';
import Pad from './components/Pad';

class App extends Component {
  constructor() {
    super();
    this.state = {
      prevExpr: '',
      prevSoln: 0,
      main: ''
    };

    this.clear = this.clear.bind(this);
    this.CE = this.CE.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.operClicked = this.operClicked.bind(this);
    this.decClicked = this.decClicked.bind(this);
    this.solve = this.solve.bind(this);
  };

  clear() {
    this.setState({main: ''});
  }

  CE() {
    var len = this.state.main.length;
    if (len !== 0) {
      var newMain = this.state.main.substring(0, len-1);
      this.setState(this.setState({main: newMain}));
    }
  }

  handleClick(x) {
    var newMain = this.state.main;
    newMain += x;
    this.setState({main: newMain})
  };

  operClicked(y) {
    if (this.state.main === '') {
      this.handleClick(`${this.state.prevSoln}`+y)
    } else {
      this.handleClick(y);
    }
  }

  decClicked() {
    if (this.state.main ==='') {
      this.handleClick('0.')
    } else if (this.state.main.includes('.')) {
      return;
    } else {
      this.handleClick('.');
    }
  }

  solve() {
    var len = this.state.main.length;
    if (len === 0 || ['+','-','*','/'].includes(this.state.main[len-1])) return
    else {
      var expr = this.state.main;
      var soln = eval(expr).toFixed(4);
      expr += '=' + soln;
      this.setState({prevExpr: expr});
      this.setState({prevSoln: soln});
      this.setState({main: soln});
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Display prev={this.state.prevExpr} expression={this.state.main}/>
        <Pad clear={this.clear} CE={this.CE} numPress={this.handleClick}
          opPress={this.operClicked} equalPress={this.solve} decPress={this.decClicked}/>
      </div>
    );
  }
}

export default App;
