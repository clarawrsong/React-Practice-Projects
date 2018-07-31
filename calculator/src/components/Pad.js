import React, { Component } from 'react';
import Button from './Button';

class Pad extends Component {


  render() {
    return (
      <div id='pad'>
        <Button handleClick={this.props.clear} name='clear' id='clear'/>
        <Button handleClick={this.props.CE} name='CE' id='CE'/>

        <Button handleClick={this.props.numPress} name='1'/>
        <Button handleClick={this.props.numPress} name='2'/>
        <Button handleClick={this.props.numPress} name='3'/>
        <Button handleClick={this.props.opPress} name='/'/>

        <Button handleClick={this.props.numPress} name='4'/>
        <Button handleClick={this.props.numPress} name='5'/>
        <Button handleClick={this.props.numPress} name='6'/>
        <Button handleClick={this.props.opPress} name='*'/>

        <Button handleClick={this.props.numPress} name='7'/>
        <Button handleClick={this.props.numPress} name='8'/>
        <Button handleClick={this.props.numPress} name='9'/>
        <Button handleClick={this.props.opPress} name='-'/>

        <Button handleClick={this.props.numPress} name='0'/>
        <Button handleClick={this.props.decPress} name='.'/>
        <Button handleClick={this.props.equalPress} name='=' id='equal'/>
        <Button handleClick={this.props.opPress} name='+'/>
      </div>
    );
  }
}

export default Pad;
